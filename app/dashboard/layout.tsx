"use client";
import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { LayoutDashboard, ClipboardList, LogOut, type LucideIcon } from "lucide-react";
import { supabaseBrowser } from "@/lib/supabase/client";
import { ADMIN_SECTIONS, sectionAllowed, type AdminSection } from "@/lib/admin-sections";

const ICONS: Record<string, LucideIcon> = {
  LayoutDashboard,
  ClipboardList,
};

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const router = useRouter();
  // undefined = noch nicht geladen, null = Vollzugriff, string[] = eingeschränkt.
  const [permissions, setPermissions] = useState<string[] | null | undefined>(undefined);
  const [email, setEmail] = useState<string>("");

  useEffect(() => {
    fetch("/api/admin/me")
      .then((r) => (r.ok ? r.json() : null))
      .then((d) => {
        if (!d) {
          router.push("/login");
          return;
        }
        setPermissions((d.permissions as string[] | null) ?? null);
        setEmail(d.email ?? "");
      })
      .catch(() => router.push("/login"));
  }, [router]);

  const nav =
    permissions === undefined
      ? []
      : ADMIN_SECTIONS.filter((s) => sectionAllowed(permissions, s.key as AdminSection));

  async function logout() {
    await supabaseBrowser().auth.signOut();
    router.push("/login");
  }

  const initials = (email || "?").slice(0, 2).toUpperCase();

  return (
    <div style={{ display: "flex", minHeight: "100svh", background: "var(--bg-2)" }}>
      <aside
        style={{
          flex: "0 0 240px",
          background: "var(--paper)",
          borderRight: "var(--bw) solid var(--ink)",
          padding: "22px 14px",
          display: "flex",
          flexDirection: "column",
          position: "sticky",
          top: 0,
          height: "100svh",
        }}
      >
        <Link href="/dashboard" style={{ padding: "2px 8px 22px", display: "inline-block" }}>
          <Image src="/logo-full.png" alt="Cofound Labs" width={148} height={45} style={{ height: 30, width: "auto" }} />
        </Link>
        <div
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: 11,
            fontWeight: 600,
            letterSpacing: ".08em",
            color: "var(--muted)",
            textTransform: "uppercase",
            padding: "0 10px 10px",
          }}
        >
          Menü
        </div>
        <nav style={{ display: "flex", flexDirection: "column", gap: 4 }}>
          {nav.map((n) => {
            const Icon = ICONS[n.icon] ?? LayoutDashboard;
            const active = n.path === "/dashboard" ? pathname === n.path : pathname.startsWith(n.path);
            return (
              <Link
                key={n.key}
                href={n.path}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 11,
                  padding: "11px 12px",
                  borderRadius: 10,
                  fontSize: 14.5,
                  fontWeight: 700,
                  textDecoration: "none",
                  border: active ? "1.5px solid var(--ink)" : "1.5px solid transparent",
                  background: active ? "var(--accent)" : "transparent",
                  color: "var(--ink)",
                }}
              >
                <Icon size={18} strokeWidth={2.2} />
                <span>{n.label}</span>
              </Link>
            );
          })}
        </nav>

        <div style={{ marginTop: "auto", display: "flex", flexDirection: "column", gap: 10 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10, padding: "6px 8px" }}>
            <div
              style={{
                width: 34,
                height: 34,
                borderRadius: "50%",
                background: "var(--ink)",
                color: "var(--accent)",
                display: "grid",
                placeItems: "center",
                fontSize: 12.5,
                fontWeight: 800,
                fontFamily: "var(--font-mono)",
              }}
            >
              {initials}
            </div>
            <div style={{ lineHeight: 1.25, flex: 1, minWidth: 0 }}>
              <div style={{ fontSize: 12.5, fontWeight: 700, color: "var(--ink)", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
                {email || "…"}
              </div>
              <div style={{ fontSize: 11, color: "var(--muted)" }}>Admin</div>
            </div>
          </div>
          <button
            onClick={logout}
            className="btn btn-ghost"
            style={{ width: "100%", padding: "11px 14px", fontSize: 14, display: "flex", alignItems: "center", justifyContent: "center", gap: 8 }}
          >
            <LogOut size={16} strokeWidth={2.2} /> Abmelden
          </button>
        </div>
      </aside>

      <main style={{ flex: 1, minWidth: 0, padding: "34px clamp(20px, 4vw, 44px)", overflowX: "hidden" }}>
        {children}
      </main>
    </div>
  );
}

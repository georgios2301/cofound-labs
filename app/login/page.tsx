"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { supabaseBrowser } from "@/lib/supabase/client";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [busy, setBusy] = useState(false);

  async function submit() {
    setBusy(true);
    setError(null);
    try {
      const sb = supabaseBrowser();
      const { error } = await sb.auth.signInWithPassword({ email, password });
      if (error) throw error;
      router.push("/dashboard");
    } catch (e) {
      setError(e instanceof Error ? e.message : "Anmeldung fehlgeschlagen.");
      setBusy(false);
    }
  }

  return (
    <main className="zugang">
      <div className="zugang-card">
        <span className="zugang-logo">
          <Image src="/logo-full.png" alt="Cofound Labs" width={158} height={48} />
        </span>
        <p className="kicker">Dashboard</p>
        <h1 className="anton">Anmelden</h1>
        <p className="zugang-sub">Interner Bereich. Bitte mit deinen Zugangsdaten anmelden.</p>

        <form
          className="contact-form"
          onSubmit={(e) => {
            e.preventDefault();
            if (!busy) submit();
          }}
        >
          <div className="field">
            <label htmlFor="email">E-Mail</label>
            <input
              id="email"
              type="email"
              autoComplete="email"
              required
              placeholder="du@cofound-labs.de"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="field">
            <label htmlFor="password">Passwort</label>
            <input
              id="password"
              type="password"
              autoComplete="current-password"
              required
              placeholder="••••••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          {error && <p className="form-error">{error}</p>}
          <button className="btn btn-primary" type="submit" disabled={busy}>
            {busy ? "Anmelden…" : "Anmelden"} <span className="btn-arrow">→</span>
          </button>
        </form>
      </div>
    </main>
  );
}

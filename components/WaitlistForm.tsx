"use client";

import { useState } from "react";
import { ArrowRight, Check } from "./icons";

type Status = "idle" | "loading" | "success" | "error";

export function WaitlistForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError("");

    const form = event.currentTarget;
    const email = String(new FormData(form).get("email") ?? "").trim();

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setStatus("error");
      setError("Please enter a valid email address.");
      return;
    }

    setStatus("loading");

    try {
      const endpoint = process.env.NEXT_PUBLIC_WAITLIST_ENDPOINT;

      if (endpoint) {
        const response = await fetch(endpoint, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email, source: "akango-landing" }),
        });

        if (!response.ok) {
          throw new Error("Request failed");
        }
      } else {
        await new Promise((resolve) => setTimeout(resolve, 700));
      }

      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
      setError("Something went wrong. Please try again.");
    }
  }

  if (status === "success") {
    return (
      <div
        className="flex min-h-[176px] flex-col items-center justify-center rounded-2xl border border-mint/25 bg-mint/[0.06] p-6 text-center"
        aria-live="polite"
      >
        <span className="grid h-12 w-12 place-items-center rounded-full border border-mint/30 bg-mint/15 text-mint">
          <Check className="h-6 w-6" />
        </span>
        <p className="mt-4 font-display text-lg font-semibold text-white">
          You&apos;re on the list.
        </p>
        <p className="mt-1 max-w-xs text-sm text-muted">
          We&apos;ll email you when the first Akango build is ready.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-3" noValidate>
      <label htmlFor="waitlist-email" className="sr-only">
        Email address
      </label>
      <div className="flex flex-col gap-3 sm:flex-row">
        <input
          id="waitlist-email"
          name="email"
          type="email"
          inputMode="email"
          autoComplete="email"
          placeholder="you@example.com"
          required
          className="h-12 min-w-0 flex-1 rounded-full border border-white/15 bg-white/[0.04] px-5 text-sm text-white placeholder:text-white/30 transition focus:border-gold/60 focus:outline-none focus:ring-2 focus:ring-gold/20"
        />
        <button
          type="submit"
          disabled={status === "loading"}
          className="btn btn-primary h-12 shrink-0 !py-0 disabled:cursor-not-allowed disabled:opacity-70"
        >
          {status === "loading" ? "Joining…" : "Join the waitlist"}
          {status !== "loading" && <ArrowRight className="h-4 w-4" />}
        </button>
      </div>

      <div aria-live="polite" className="min-h-5">
        {status === "error" && (
          <p className="text-xs font-medium text-red-400">{error}</p>
        )}
      </div>

      <p className="text-xs leading-5 text-muted">
        No spam. We only send launch updates. Unsubscribe any time.
      </p>
    </form>
  );
}

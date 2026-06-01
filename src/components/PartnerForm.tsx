"use client";

import { useState } from "react";

const HEAR_ABOUT_OPTIONS = [
  "Search engine",
  "Social media",
  "Referral",
  "Event or conference",
  "Other",
] as const;

const inputClass =
  "w-full rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-white placeholder:text-slate-500 outline-none transition focus:border-[#10b981]/50 focus:ring-2 focus:ring-[#10b981]/20";

function FieldLabel({
  htmlFor,
  children,
  required,
}: {
  htmlFor: string;
  children: React.ReactNode;
  required?: boolean;
}) {
  return (
    <label htmlFor={htmlFor} className="mb-1.5 block text-sm font-medium text-slate-200">
      {children}
      {required && <span className="text-[#10b981]"> *</span>}
    </label>
  );
}

export default function PartnerForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("sending");

    const formData = new FormData(event.currentTarget);
    formData.set("form-name", "partner");

    const body = new URLSearchParams();
    for (const [key, value] of formData.entries()) {
      body.append(key, String(value));
    }

    try {
      const response = await fetch("/__forms.html", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: body.toString(),
      });

      if (response.ok) {
        setStatus("sent");
        event.currentTarget.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <>
      <form name="partner" onSubmit={handleSubmit} className="mt-6 space-y-4">
        <input type="hidden" name="form-name" value="partner" />
        <p className="hidden">
          <label>
            Don&apos;t fill this out: <input name="bot-field" />
          </label>
        </p>

        <div>
          <FieldLabel htmlFor="fullName" required>
            Full Name
          </FieldLabel>
          <input
            id="fullName"
            name="fullName"
            type="text"
            required
            placeholder="Enter your full name"
            className={inputClass}
          />
        </div>

        <div>
          <FieldLabel htmlFor="email" required>
            Email Address
          </FieldLabel>
          <input
            id="email"
            name="email"
            type="email"
            required
            placeholder="email@domain.com"
            className={inputClass}
          />
        </div>

        <div>
          <FieldLabel htmlFor="company">Company Name</FieldLabel>
          <input
            id="company"
            name="company"
            type="text"
            placeholder="Enter your company name"
            className={inputClass}
          />
        </div>

        <div>
          <FieldLabel htmlFor="source" required>
            How did you hear about us?
          </FieldLabel>
          <select id="source" name="source" required className={inputClass} defaultValue="">
            <option value="" disabled>
              Select one
            </option>
            {HEAR_ABOUT_OPTIONS.map((opt) => (
              <option key={opt} value={opt} className="bg-slate-900">
                {opt}
              </option>
            ))}
          </select>
        </div>

        <div>
          <FieldLabel htmlFor="subject" required>
            Subject
          </FieldLabel>
          <input
            id="subject"
            name="subject"
            type="text"
            required
            placeholder="Enter a subject"
            className={inputClass}
          />
        </div>

        <div>
          <FieldLabel htmlFor="message" required>
            Message
          </FieldLabel>
          <textarea
            id="message"
            name="message"
            required
            rows={4}
            maxLength={1000}
            placeholder="How can we help?"
            className={`${inputClass} resize-y`}
          />
        </div>

        <button
          type="submit"
          disabled={status === "sending"}
          className="w-full rounded-full bg-[#10b981] py-3 text-sm font-semibold text-[#020617] transition hover:bg-[#34d399] disabled:opacity-60"
        >
          {status === "sending" ? "Sending…" : "Send Message"}
        </button>

        {status === "sent" && (
          <p className="text-sm font-medium text-[#34d399]" role="status">
            Thanks — we&apos;ll get back to you soon.
          </p>
        )}
        {status === "error" && (
          <p className="text-sm font-medium text-red-400" role="alert">
            Something went wrong. Email us at info@volthub.ph instead.
          </p>
        )}

        <p className="text-xs text-slate-500">
          By proceeding, you agree to our Terms &amp; Conditions and Privacy Policy.
        </p>
      </form>
    </>
  );
}

"use client";

import { useCallback, useMemo } from "react";

const CONTACT = {
  firstName: "Mr.",
  lastName: "Wabick",
  company: "Kreshmore",
  phone: "+1-708-704-1120",
  phoneDisplay: "708.704.1120",
  email: "",
  website: "https://www.kreshmore.com",
  title: "Your Finance Guy",
};

const smsBody = encodeURIComponent(
  "Hi Mr. Wabick, thanks for connecting. Let's talk financing opportunities."
);

const noiseTexture =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='160' height='160' viewBox='0 0 160 160'%3E%3Cfilter id='a'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23a)' opacity='0.15'/%3E%3C/svg%3E";

export default function Home() {
  const vcardContents = useMemo(() => {
    const lines = [
      "BEGIN:VCARD",
      "VERSION:3.0",
      `N:${CONTACT.lastName};${CONTACT.firstName};;;`,
      `FN:${CONTACT.firstName} ${CONTACT.lastName}`,
      `ORG:${CONTACT.company}`,
      CONTACT.email ? `EMAIL:${CONTACT.email}` : "",
      `TEL;TYPE=cell:${CONTACT.phone}`,
      `URL:${CONTACT.website}`,
      "END:VCARD",
    ].filter(Boolean);
    return lines.join("\n");
  }, []);

  const handleSaveAndText = useCallback(() => {
    try {
      const blob = new Blob([vcardContents], { type: "text/vcard" });
      const url = URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = "mr-wabick-contact.vcf";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      setTimeout(() => URL.revokeObjectURL(url), 1000);
    } catch (error) {
      console.error("Failed to download contact", error);
    }

    const smsLink = `sms:+17087041120?&body=${smsBody}`;
    setTimeout(() => {
      window.location.href = smsLink;
    }, 400);
  }, [vcardContents]);

  return (
    <main
      className="relative flex min-h-screen items-center justify-center bg-[#1b1f24] px-4 py-10 text-white"
      style={{
        backgroundImage: `linear-gradient(135deg, rgba(17,22,28,0.95), rgba(15,18,22,0.95)), url("${noiseTexture}")`,
      }}
    >
      <div className="absolute inset-0 opacity-50 mix-blend-screen">
        <div
          className="h-full w-full"
          style={{
            backgroundImage: `url("${noiseTexture}")`,
          }}
        />
      </div>

      <div className="relative w-full max-w-md">
        <div className="rounded-[32px] border border-white/10 bg-gradient-to-br from-[#1f2329] via-[#1b1f24] to-[#121519] p-8 shadow-[20px_20px_60px_rgba(0,0,0,0.6),-20px_-20px_60px_rgba(60,60,60,0.1)]">
          <div className="rounded-3xl border border-white/5 bg-[#15191d] p-6 shadow-inner shadow-black/40">
            <p className="text-center text-sm uppercase tracking-[0.6em] text-[#39ff14]">
              {CONTACT.title}
            </p>
            <h1 className="mt-6 text-center text-4xl font-semibold text-white">
              {CONTACT.firstName}
              <span className="text-[#39ff14]"> {CONTACT.lastName}</span>
            </h1>
            <p className="mt-2 text-center text-lg text-slate-300">
              {CONTACT.company}
            </p>

            <button
              type="button"
              onClick={handleSaveAndText}
              className="button-jiggle group mt-10 flex w-full items-center justify-center gap-2 rounded-2xl border border-[#39ff14]/60 bg-[#39ff14] px-6 py-4 text-center text-sm font-semibold uppercase tracking-[0.4em] text-[#0f1216] shadow-[0_12px_30px_rgba(57,255,20,0.45)] transition hover:translate-y-[-1px] hover:shadow-[0_16px_40px_rgba(57,255,20,0.6)]"
            >
              Save & Text Mr. Wabick
              <span className="text-xl leading-none">↗</span>
            </button>
            <p className="mt-3 text-center text-xs text-slate-400">
              Tap to download the contact card and auto-open a text message on
              iOS and Android.
            </p>
          </div>

          <div className="mt-10 text-center text-xs uppercase tracking-[0.5em] text-slate-400">
            Built in America, on earth.
            <p className="mt-2 italic normal-case tracking-normal text-slate-300">
              Making relationships built to last, the American Way.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}

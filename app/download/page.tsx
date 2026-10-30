"use client";
import { useState } from "react";
import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useLanguage } from "../components/LanguageContext";
import { translations } from "../translations";

const platforms = [
  {
    id: "windows",
    name: "Windows",
    icon: "🪟",
    version: "v4.2.1",
    size: "45 MB",
    requirements: "Windows 10 / 11",
    color: "rgba(0,212,255,0.06)",
    border: "rgba(0,212,255,0.2)",
  },
  {
    id: "mac",
    name: "macOS",
    icon: "🍎",
    version: "v4.2.1",
    size: "38 MB",
    requirements: "macOS 12 Monterey+",
    color: "rgba(139,92,246,0.06)",
    border: "rgba(139,92,246,0.2)",
  },
  {
    id: "linux",
    name: "Linux",
    icon: "🐧",
    version: "v4.2.1",
    size: "22 MB",
    requirements: "Ubuntu 20.04+ / Debian",
    color: "rgba(236,72,153,0.06)",
    border: "rgba(236,72,153,0.2)",
  },
  {
    id: "android",
    name: "Android",
    icon: "🤖",
    version: "v4.2.1",
    size: "18 MB",
    requirements: "Android 8.0+",
    color: "rgba(34,197,94,0.06)",
    border: "rgba(34,197,94,0.2)",
  },
  {
    id: "ios",
    name: "iOS",
    icon: "📱",
    version: "v4.2.1",
    size: "24 MB",
    requirements: "iOS 15+",
    color: "rgba(251,191,36,0.06)",
    border: "rgba(251,191,36,0.2)",
  },
  {
    id: "router",
    name: "Router",
    icon: "📡",
    version: "v3.8.0",
    size: "Manual Setup",
    requirements: "DD-WRT / OpenWRT",
    color: "rgba(239,68,68,0.06)",
    border: "rgba(239,68,68,0.2)",
  },
];

const systemRequirements = [
  {
    platform: "Windows",
    reqs: [
      "Windows 10 or later (64-bit)",
      "2GB RAM minimum",
      "100MB free disk space",
      ".NET Framework 4.8+",
    ],
  },
  {
    platform: "macOS",
    reqs: [
      "macOS 12 Monterey or later",
      "Apple Silicon or Intel Mac",
      "50MB free disk space",
      "System Extension permissions",
    ],
  },
  {
    platform: "Linux",
    reqs: [
      "Ubuntu 20.04+, Debian 10+",
      "64-bit processor",
      "50MB free disk space",
      "OpenSSL 1.1+",
    ],
  },
  {
    platform: "Android",
    reqs: [
      "Android 8.0 (Oreo) or later",
      "ARM or x86 processor",
      "30MB free storage",
      "Internet permission required",
    ],
  },
];

export default function DownloadPage() {
  const [selectedPlatform, setSelectedPlatform] = useState("windows");
  const [downloading, setDownloading] = useState<string | null>(null);
  const { lang } = useLanguage();
  const t = translations.download[lang];

  const handleDownload = (id: string) => {
    setDownloading(id);
    setTimeout(() => setDownloading(null), 2000);
  };

  const steps = [
    {
      step: "1",
      title: t.step1Title,
      desc: t.step1Desc,
      icon: "⬇️",
    },
    {
      step: "2",
      title: t.step2Title,
      desc: t.step2Desc,
      icon: "👤",
    },
    {
      step: "3",
      title: t.step3Title,
      desc: t.step3Desc,
      icon: "🔒",
    },
  ];

  return (
    <div style={{ background: "var(--bg-primary)", minHeight: "100vh" }}>
      <Navbar />

      {/* ===== HERO ===== */}
      <section
        id="download-hero"
        className="page-hero text-center overflow-hidden relative"
        style={{ paddingTop: "140px", paddingBottom: "70px" }}
      >
        {/* Background glow */}
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[350px] opacity-25"
          style={{
            background:
              "radial-gradient(ellipse, rgba(0,212,255,0.5) 0%, rgba(139,92,246,0.3) 50%, transparent 80%)",
            filter: "blur(60px)",
          }}
        />

        <div className="container relative z-10">
          <div className="section-label inline-flex mb-4">{t.heroLabel}</div>

          <h1
            className="text-5xl md:text-7xl font-black mb-6"
            style={{
              fontFamily: "var(--font-outfit)",
              letterSpacing: "-0.02em",
            }}
          >
            {t.heroTitle}
            <br />
            <span className="gradient-text">{t.heroSubtitle}</span>
          </h1>
          <p
            className="text-xl mb-10 mx-auto"
            style={{
              color: "var(--text-secondary)",
              maxWidth: "520px",
              lineHeight: 1.8,
            }}
          >
            {t.heroDesc}
          </p>

          {/* Rating badges */}
          <div className="flex flex-wrap justify-center gap-6 mb-8">
            {[
              {
                store: "App Store",
                rating: "4.9 ★",
                count: lang === "zh" ? "20万+ 条评价" : "200K+ reviews",
              },
              {
                store: "Google Play",
                rating: "4.8 ★",
                count: lang === "zh" ? "50万+ 条评价" : "500K+ reviews",
              },
              {
                store: "Trustpilot",
                rating: "4.9 ★",
                count: lang === "zh" ? "5万+ 条评价" : "50K+ reviews",
              },
            ].map((r) => (
              <div
                key={r.store}
                className="glass-card px-5 py-3 flex items-center gap-3"
                id={`rating-${r.store.toLowerCase().replace(/\s/g, "")}`}
              >
                <div>
                  <div
                    className="font-bold text-sm"
                    style={{ color: "var(--text-primary)" }}
                  >
                    {r.store}
                  </div>
                  <div
                    className="text-xs"
                    style={{ color: "var(--text-secondary)" }}
                  >
                    {r.count}
                  </div>
                </div>
                <div
                  className="text-lg font-black"
                  style={{ color: "#f59e0b" }}
                >
                  {r.rating}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== PLATFORM CARDS ===== */}
      <section id="platforms" className="pb-24">
        <div className="container">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {platforms.map((platform) => (
              <div
                key={platform.id}
                className="platform-card"
                id={`platform-${platform.id}`}
                style={{
                  background: platform.color,
                  border: `1px solid ${platform.border}`,
                }}
              >
                <div className="text-5xl mb-4">{platform.icon}</div>

                {/* Info */}
                <h2
                  className="text-2xl font-black mb-1"
                  style={{ color: "var(--text-primary)" }}
                >
                  {platform.name}
                </h2>
                <p
                  className="text-sm mb-1"
                  style={{ color: "var(--text-secondary)" }}
                >
                  {platform.requirements}
                </p>
                <p
                  className="text-xs mb-6"
                  style={{ color: "var(--text-secondary)", opacity: 0.6 }}
                >
                  {platform.version} · {platform.size}
                </p>

                {/* Download button */}
                <button
                  id={`download-${platform.id}-btn`}
                  onClick={() => handleDownload(platform.id)}
                  className="btn-primary w-full"
                  style={{ justifyContent: "center" }}
                >
                  <span>
                    {downloading === platform.id ? (
                      <span className="flex items-center gap-2">
                        <span className="inline-block w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        {t.downloading}
                      </span>
                    ) : (
                      `${t.downloadFor} ${platform.name}`
                    )}
                  </span>
                </button>
              </div>
            ))}
          </div>

          {/* Note */}
          <p
            className="text-center mt-8 text-sm"
            style={{ color: "var(--text-secondary)" }}
          >
            {t.verifyNote} &nbsp;
            <a href="#" style={{ color: "var(--accent-cyan)" }}>
              {t.verifyLink}
            </a>
          </p>
        </div>
      </section>

      {/* ===== HOW TO INSTALL ===== */}
      <section
        id="how-to-install"
        className="py-24"
        style={{ background: "rgba(255,255,255,0.02)" }}
      >
        <div className="container">
          <div className="text-center mb-16">
            <div className="section-label inline-flex mb-4">{t.setupLabel}</div>
            <h2
              className="text-4xl md:text-5xl font-black"
              style={{ fontFamily: "var(--font-outfit)" }}
            >
              {t.setupTitle1}
              <span className="gradient-text"> {t.setupTitle2}</span>
            </h2>
            <div className="divider mt-4" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {steps.map((step, i) => (
              <div
                key={step.step}
                className="text-center relative"
                id={`install-step-${i + 1}`}
              >
                {/* Connector */}
                {i < steps.length - 1 && (
                  <div
                    className="hidden md:block absolute top-10 left-full w-full h-px -translate-x-1/2"
                    style={{
                      background:
                        "linear-gradient(90deg, rgba(0,212,255,0.4), transparent)",
                    }}
                  />
                )}

                <div
                  className="w-20 h-20 rounded-full flex items-center justify-center text-3xl mx-auto mb-6"
                  style={{
                    background: "rgba(0,212,255,0.08)",
                    border: "2px solid rgba(0,212,255,0.3)",
                    boxShadow: "0 0 30px rgba(0,212,255,0.15)",
                  }}
                >
                  {step.icon}
                </div>
                <div
                  className="text-xs font-bold tracking-widest mb-2"
                  style={{ color: "var(--accent-cyan)" }}
                >
                  STEP {step.step}
                </div>
                <h3
                  className="text-xl font-bold mb-3"
                  style={{ color: "var(--text-primary)" }}
                >
                  {step.title}
                </h3>
                <p style={{ color: "var(--text-secondary)", lineHeight: 1.7 }}>
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== SYSTEM REQUIREMENTS ===== */}
      <section id="system-requirements" className="py-24">
        <div className="container">
          <div className="text-center mb-16">
            <div className="section-label inline-flex mb-4">{t.reqLabel}</div>
            <h2
              className="text-4xl font-black"
              style={{ fontFamily: "var(--font-outfit)" }}
            >
              {t.reqTitle}{" "}
              <span className="gradient-text">{t.reqHighlight}</span>
            </h2>
            <div className="divider mt-4" />
          </div>

          {/* Platform selector */}
          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {systemRequirements.map((s) => (
              <button
                key={s.platform}
                id={`req-tab-${s.platform.toLowerCase()}`}
                onClick={() => setSelectedPlatform(s.platform.toLowerCase())}
                className="px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-200"
                style={{
                  background:
                    selectedPlatform === s.platform.toLowerCase()
                      ? "linear-gradient(135deg, #00d4ff, #8b5cf6)"
                      : "rgba(255,255,255,0.06)",
                  color:
                    selectedPlatform === s.platform.toLowerCase()
                      ? "white"
                      : "var(--text-secondary)",
                  border: "none",
                  cursor: "pointer",
                }}
              >
                {s.platform}
              </button>
            ))}
          </div>

          {systemRequirements
            .filter((s) => s.platform.toLowerCase() === selectedPlatform)
            .map((s) => (
              <div
                key={s.platform}
                className="max-w-lg mx-auto glass-card p-8"
                id={`req-content-${s.platform.toLowerCase()}`}
              >
                <h3
                  className="text-xl font-bold mb-6"
                  style={{ color: "var(--text-primary)" }}
                >
                  {s.platform} {t.reqHighlight}
                </h3>
                <ul className="flex flex-col gap-4">
                  {s.reqs.map((req) => (
                    <li key={req} className="flex items-center gap-3">
                      <span
                        className="w-5 h-5 rounded-full flex items-center justify-center text-xs flex-shrink-0"
                        style={{
                          background: "rgba(0,212,255,0.15)",
                          color: "var(--accent-cyan)",
                        }}
                      >
                        ✓
                      </span>
                      <span style={{ color: "var(--text-secondary)" }}>
                        {req}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
        </div>
      </section>

      {/* ===== BROWSER EXTENSIONS ===== */}
      <section
        id="browser-extensions"
        className="py-24"
        style={{ background: "rgba(255,255,255,0.02)" }}
      >
        <div className="container">
          <div className="text-center mb-12">
            <div className="section-label inline-flex mb-4">
              {t.browserLabel}
            </div>
            <h2
              className="text-4xl font-black"
              style={{ fontFamily: "var(--font-outfit)" }}
            >
              {t.browserTitle1}
              <span className="gradient-text"> {t.browserTitle2}</span>
            </h2>
            <div className="divider mt-4" />
          </div>

          <div className="flex flex-wrap justify-center gap-6">
            {[
              {
                name: "Chrome",
                icon: "🟡",
                color: "rgba(251,191,36,0.1)",
                border: "rgba(251,191,36,0.3)",
              },
              {
                name: "Firefox",
                icon: "🦊",
                color: "rgba(249,115,22,0.1)",
                border: "rgba(249,115,22,0.3)",
              },
              {
                name: "Edge",
                icon: "🔵",
                color: "rgba(59,130,246,0.1)",
                border: "rgba(59,130,246,0.3)",
              },
              {
                name: "Safari",
                icon: "🧭",
                color: "rgba(34,197,94,0.1)",
                border: "rgba(34,197,94,0.3)",
              },
            ].map((ext) => (
              <a
                key={ext.name}
                href="#"
                id={`extension-${ext.name.toLowerCase()}`}
                className="flex flex-col items-center gap-3 px-8 py-6 rounded-2xl text-center no-underline transition-all duration-300"
                style={{
                  background: ext.color,
                  border: `1px solid ${ext.border}`,
                  color: "var(--text-primary)",
                  minWidth: "140px",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.transform =
                    "translateY(-6px)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.transform =
                    "translateY(0)";
                }}
              >
                <span className="text-4xl">{ext.icon}</span>
                <span className="font-semibold">{ext.name}</span>
                <span
                  className="text-xs"
                  style={{ color: "var(--accent-cyan)" }}
                >
                  {t.installExtension}
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ===== FINAL CTA ===== */}
      <section id="download-cta" className="py-24">
        <div className="container">
          <div
            className="rounded-3xl p-16 text-center relative overflow-hidden"
            style={{
              background:
                "linear-gradient(135deg, rgba(0,212,255,0.08), rgba(139,92,246,0.08))",
              border: "1px solid rgba(0,212,255,0.2)",
            }}
          >
            <div
              className="absolute -top-24 -left-24 w-64 h-64 rounded-full opacity-20"
              style={{
                background:
                  "radial-gradient(circle, rgba(0,212,255,0.5), transparent)",
                filter: "blur(30px)",
              }}
            />
            <div className="relative z-10">
              <div className="text-5xl mb-4">{t.ctaEmoji}</div>
              <h2
                className="text-4xl md:text-5xl font-black mb-4"
                style={{ fontFamily: "var(--font-outfit)" }}
              >
                {t.ctaTitle}{" "}
                <span className="gradient-text">{t.ctaHighlight}</span>
              </h2>
              <p
                className="mb-8 text-lg"
                style={{
                  color: "var(--text-secondary)",
                  maxWidth: "400px",
                  margin: "0 auto 32px",
                }}
              >
                {t.ctaDesc}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="#platforms"
                  className="btn-primary"
                  id="cta-download-platform-btn"
                  style={{ fontSize: "1.05rem", padding: "16px 40px" }}
                >
                  <span>{t.ctaBtn}</span>
                </a>
                <Link
                  href="/pricing"
                  className="btn-secondary"
                  id="cta-upgrade-btn"
                  style={{ fontSize: "1.05rem", padding: "16px 40px" }}
                >
                  <span>{t.upgradeBtn}</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

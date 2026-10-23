"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const values = [
  {
    icon: "🔒",
    title: "Privacy First",
    desc: "We believe privacy is a fundamental human right. Everything we build puts your data protection above all else.",
  },
  {
    icon: "🌍",
    title: "Open Internet",
    desc: "An open, free internet is essential for democracy and innovation. We fight censorship and geo-restrictions.",
  },
  {
    icon: "🤝",
    title: "Transparency",
    desc: "We publish annual transparency reports and open-source our core security protocols for public audit.",
  },
  {
    icon: "⚡",
    title: "Innovation",
    desc: "Our R&D team constantly develops next-generation encryption and tunneling protocols.",
  },
];

const team = [
  { name: "Alex Rivera", role: "CEO & Co-Founder", initials: "AR", bio: "Former NSA cryptographer with 15+ years in cybersecurity." },
  { name: "Yuki Tanaka", role: "CTO & Co-Founder", initials: "YT", bio: "Ex-Google engineer who built distributed systems at massive scale." },
  { name: "Sofia Müller", role: "VP of Security", initials: "SM", bio: "PhD in Computer Science, specializing in network encryption protocols." },
  { name: "James Park", role: "Head of Infrastructure", initials: "JP", bio: "Built and managed data centers serving 500M+ daily active users." },
];

const milestones = [
  { year: "2018", event: "RainbowVPN Founded", detail: "Started with a mission to make privacy accessible to everyone." },
  { year: "2019", event: "1M Users", detail: "Reached our first million users in just 12 months." },
  { year: "2020", event: "Global Expansion", detail: "Expanded to 50+ countries with 3,000+ servers." },
  { year: "2021", event: "10M Users", detail: "Achieved 10 million users and launched our mobile apps." },
  { year: "2022", event: "Security Audit", detail: "First independent security audit with 100% no-log certification." },
  { year: "2023", event: "50M Users", detail: "Became the world's fastest-growing VPN provider." },
];

export default function AboutPage() {
  const [activeTab, setActiveTab] = useState<"mission" | "team" | "timeline">("mission");

  return (
    <div style={{ background: "var(--bg-primary)", minHeight: "100vh" }}>
      <Navbar />

      {/* ===== PAGE HERO ===== */}
      <section
        id="about-hero"
        className="page-hero relative overflow-hidden"
        style={{ paddingTop: "140px", paddingBottom: "120px" }}
      >
        {/* Background glow */}
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] opacity-20"
          style={{
            background: "radial-gradient(ellipse, rgba(139,92,246,0.6) 0%, transparent 70%)",
            filter: "blur(60px)",
          }}
        />

        <div className="container relative z-10 text-center">
          <div className="section-label inline-flex mb-4">👥 Our Story</div>
          <h1
            className="text-5xl md:text-7xl font-black mb-6"
            style={{ fontFamily: "var(--font-outfit)", letterSpacing: "-0.02em" }}
          >
            We&apos;re On a Mission to
            <br />
            <span className="gradient-text">Protect Everyone</span>
          </h1>
          <p
            className="text-xl mx-auto mb-8"
            style={{ color: "var(--text-secondary)", maxWidth: "640px", lineHeight: 1.8 }}
          >
            Founded in 2018 by cybersecurity veterans, RainbowVPN was built with one belief:
            <strong style={{ color: "var(--text-primary)" }}> privacy is not a luxury — it&apos;s a right.</strong>
          </p>

          {/* Quick stats */}
          <div className="flex flex-wrap justify-center gap-12 mt-16">
            {[
              { val: "2018", label: "Founded" },
              { val: "50M+", label: "Users Protected" },
              { val: "100+", label: "Countries" },
              { val: "4.9★", label: "App Rating" },
            ].map((s) => (
              <div key={s.label} className="text-center" id={`about-stat-${s.label.toLowerCase().replace(/\s/g, '-')}`}>
                <div
                  className="text-3xl font-black"
                  style={{
                    background: "linear-gradient(135deg, #00d4ff, #8b5cf6)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  {s.val}
                </div>
                <div className="text-sm font-medium mt-1" style={{ color: "var(--text-secondary)" }}>
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== TABS ===== */}
      <div
        id="about-tabs"
        style={{
          position: "sticky",
          top: "72px",
          zIndex: 500,
          background: "rgba(5,9,21,0.96)",
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
          borderBottom: "1px solid rgba(255,255,255,0.06)",
          padding: "14px 0",
        }}
      >
        <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 24px", display: "flex", justifyContent: "center" }}>
          <div
            style={{
              display: "flex",
              gap: "4px",
              padding: "4px",
              borderRadius: "50px",
              background: "rgba(255,255,255,0.06)",
              border: "1px solid rgba(255,255,255,0.08)",
            }}
          >
            {(["mission", "team", "timeline"] as const).map((tab) => (
              <button
                key={tab}
                id={`about-tab-${tab}`}
                onClick={() => setActiveTab(tab)}
                style={{
                  padding: "10px 24px",
                  borderRadius: "50px",
                  fontWeight: 600,
                  fontSize: "0.875rem",
                  background: activeTab === tab ? "linear-gradient(135deg, #00d4ff, #8b5cf6)" : "transparent",
                  color: activeTab === tab ? "white" : "var(--text-secondary)",
                  border: "none",
                  cursor: "pointer",
                  transition: "all 0.3s ease",
                  whiteSpace: "nowrap",
                }}
              >
                {tab === "mission" ? "🎯 Mission & Values" : tab === "team" ? "👥 Our Team" : "📅 Timeline"}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* ===== MISSION & VALUES ===== */}
      {activeTab === "mission" && (
        <section id="mission-values" className="py-32">
          <div className="container">
            {/* Mission statement */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-32">
              <div>
                <div className="section-label inline-flex mb-4">🎯 Our Mission</div>
                <h2
                  className="text-4xl font-black mb-8"
                  style={{ fontFamily: "var(--font-outfit)" }}
                >
                  Digital Freedom for
                  <br />
                  <span className="gradient-text">Every Human</span>
                </h2>
                <p className="text-lg mb-6" style={{ color: "var(--text-secondary)", lineHeight: 1.8 }}>
                  We started RainbowVPN because we watched the internet become increasingly surveilled, censored, and commoditized.
                  We believe every person deserves to browse without being tracked, throttled, or blocked.
                </p>
                <p className="text-lg mb-8" style={{ color: "var(--text-secondary)", lineHeight: 1.8 }}>
                  Our technology is built by engineers who have worked at the NSA, Google, Cloudflare, and leading universities.
                  We put that expertise to work protecting you.
                </p>
                <div className="flex gap-4 mt-10">
                  <Link href="/download" className="btn-primary" id="about-download-btn">
                    <span>Get Started Free</span>
                  </Link>
                  <Link href="/pricing" className="btn-secondary" id="about-pricing-btn">
                    <span>View Plans</span>
                  </Link>
                </div>
              </div>

              {/* Visual side */}
              <div className="relative flex items-center justify-center">
                <div className="relative w-72 h-72">
                  {/* Shield with rings */}
                  <div className="absolute inset-0 rounded-full animate-spin-slow" style={{ border: "1px dashed rgba(0,212,255,0.2)" }} />
                  <div className="absolute inset-6 rounded-full animate-spin-slow" style={{ border: "1px dashed rgba(139,92,246,0.2)", animationDirection: "reverse" }} />
                  <div className="absolute inset-12 rounded-full" style={{ background: "rgba(0,212,255,0.05)", border: "1px solid rgba(0,212,255,0.2)" }} />
                  <Image
                    src="/vpn_shield.jpg"
                    alt="RainbowVPN Shield"
                    width={200}
                    height={200}
                    className="absolute top-1/2 left-1/2 rounded-2xl glow-purple"
                    style={{ objectFit: "cover", transform: "translate(-50%, -50%)" }}
                  />
                </div>

                {/* Floating stat cards */}
                <div
                  className="absolute -top-4 -right-4 glass-card px-4 py-3"
                  style={{ border: "1px solid rgba(0,212,255,0.3)" }}
                >
                  <div className="text-xl font-black gradient-text">AES-256</div>
                  <div className="text-xs" style={{ color: "var(--text-secondary)" }}>Encryption</div>
                </div>
                <div
                  className="absolute -bottom-4 -left-4 glass-card px-4 py-3"
                  style={{ border: "1px solid rgba(139,92,246,0.3)" }}
                >
                  <div className="text-xl font-black gradient-text">Zero Logs</div>
                  <div className="text-xs" style={{ color: "var(--text-secondary)" }}>Verified</div>
                </div>
              </div>
            </div>

            {/* Values */}
            <div className="text-center mb-16">
              <div className="section-label inline-flex mb-4">💡 Our Values</div>
              <h2 className="text-4xl font-black" style={{ fontFamily: "var(--font-outfit)" }}>
                What We <span className="gradient-text">Stand For</span>
              </h2>
              <div className="divider mt-4" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {values.map((v, i) => (
                <div key={v.title} className="feature-card" id={`value-${i}`} style={{ padding: "40px 36px" }}>
                  <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl mb-6"
                    style={{ background: "rgba(139,92,246,0.1)", border: "1px solid rgba(139,92,246,0.2)" }}
                  >
                    {v.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-2" style={{ color: "var(--text-primary)" }}>
                    {v.title}
                  </h3>
                  <p style={{ color: "var(--text-secondary)", lineHeight: 1.7 }}>{v.desc}</p>
                </div>
              ))}
            </div>

            {/* Audit badges */}
            <div className="mt-24 text-center">
              <h3 className="text-2xl font-bold mb-8" style={{ color: "var(--text-primary)" }}>
                Independently Audited & Certified
              </h3>
              <div className="flex flex-wrap justify-center gap-8">
                {[
                  { label: "Cure53 Audit", badge: "✅ Passed 2023" },
                  { label: "PwC Verified", badge: "✅ No-Log Policy" },
                  { label: "ISO 27001", badge: "✅ Certified" },
                  { label: "SOC 2 Type II", badge: "✅ Compliant" },
                ].map((item) => (
                  <div key={item.label} className="glass-card px-8 py-6 text-center" id={`audit-${item.label.toLowerCase().replace(/\s/g, '')}`}>
                    <div className="font-bold mb-1" style={{ color: "var(--text-primary)" }}>{item.label}</div>
                    <div className="text-sm" style={{ color: "var(--accent-cyan)" }}>{item.badge}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ===== TEAM ===== */}
      {activeTab === "team" && (
        <section id="team-section" className="py-32">
          <div className="container">
            <div className="text-center mb-20">
              <div className="section-label inline-flex mb-4">👥 The Team</div>
              <h2 className="text-4xl md:text-5xl font-black" style={{ fontFamily: "var(--font-outfit)" }}>
                Built by <span className="gradient-text">Security Experts</span>
              </h2>
              <div className="divider mt-4" />
              <p className="mt-4 text-lg" style={{ color: "var(--text-secondary)" }}>
                Our team of 200+ engineers, security researchers, and privacy advocates
                work tirelessly to keep you safe.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {team.map((member, i) => (
                <div key={member.name} className="team-card" id={`team-member-${i}`}>
                  {/* Avatar */}
                  <div
                    className="h-40 flex items-center justify-center"
                    style={{ background: "linear-gradient(135deg, rgba(0,212,255,0.1), rgba(139,92,246,0.1))" }}
                  >
                    <div
                      className="w-20 h-20 rounded-full flex items-center justify-center text-2xl font-black text-white"
                      style={{ background: "linear-gradient(135deg, #00d4ff, #8b5cf6)" }}
                    >
                      {member.initials}
                    </div>
                  </div>
                  <div className="p-8">
                    <h3 className="text-lg font-bold mb-1" style={{ color: "var(--text-primary)" }}>
                      {member.name}
                    </h3>
                    <div className="text-sm font-medium mb-3" style={{ color: "var(--accent-cyan)" }}>
                      {member.role}
                    </div>
                    <p className="text-sm" style={{ color: "var(--text-secondary)", lineHeight: 1.6 }}>
                      {member.bio}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Join the team */}
            <div
              className="mt-24 rounded-3xl p-16 text-center"
              style={{
                background: "linear-gradient(135deg, rgba(0,212,255,0.06), rgba(139,92,246,0.06))",
                border: "1px solid rgba(255,255,255,0.08)",
              }}
            >
              <div className="text-4xl mb-4">🚀</div>
              <h3 className="text-3xl font-black mb-4" style={{ fontFamily: "var(--font-outfit)" }}>
                Join Our <span className="gradient-text">Team</span>
              </h3>
              <p className="mb-6" style={{ color: "var(--text-secondary)" }}>
                We&apos;re always looking for passionate people who care about privacy.
              </p>
              <a href="#" className="btn-primary" id="careers-btn">
                <span>View Open Positions</span>
              </a>
            </div>
          </div>
        </section>
      )}

      {/* ===== TIMELINE ===== */}
      {activeTab === "timeline" && (
        <section id="timeline-section" className="py-32">
          <div className="container">
            <div className="text-center mb-20">
              <div className="section-label inline-flex mb-4">📅 Our Journey</div>
              <h2 className="text-4xl md:text-5xl font-black" style={{ fontFamily: "var(--font-outfit)" }}>
                From Startup to
                <span className="gradient-text"> Global Leader</span>
              </h2>
              <div className="divider mt-4" />
            </div>

            <div className="relative max-w-3xl mx-auto">
              {/* Vertical line */}
              <div
                className="absolute left-1/2 top-0 bottom-0 w-px"
                style={{ background: "linear-gradient(180deg, rgba(0,212,255,0.6), rgba(139,92,246,0.6))", transform: "translateX(-50%)" }}
              />

              {milestones.map((m, i) => (
                <div
                  key={m.year}
                  className={`relative flex items-start gap-8 mb-16 ${i % 2 === 0 ? "flex-row" : "flex-row-reverse"}`}
                  id={`milestone-${i}`}
                >
                  {/* Content */}
                  <div className={`w-5/12 ${i % 2 === 0 ? "text-right" : "text-left"}`}>
                    <div
                      className="glass-card p-8"
                      style={{ border: "1px solid rgba(255,255,255,0.08)" }}
                    >
                      <div
                        className="text-3xl font-black mb-2"
                        style={{
                          background: "linear-gradient(135deg, #00d4ff, #8b5cf6)",
                          WebkitBackgroundClip: "text",
                          WebkitTextFillColor: "transparent",
                        }}
                      >
                        {m.year}
                      </div>
                      <div className="font-bold text-lg mb-2" style={{ color: "var(--text-primary)" }}>
                        {m.event}
                      </div>
                      <p className="text-sm" style={{ color: "var(--text-secondary)", lineHeight: 1.6 }}>
                        {m.detail}
                      </p>
                    </div>
                  </div>

                  {/* Center dot */}
                  <div className="w-2/12 flex justify-center">
                    <div
                      className="w-5 h-5 rounded-full relative z-10"
                      style={{
                        background: "linear-gradient(135deg, #00d4ff, #8b5cf6)",
                        boxShadow: "0 0 15px rgba(0,212,255,0.5)",
                        marginTop: "24px",
                      }}
                    />
                  </div>

                  {/* Empty side */}
                  <div className="w-5/12" />
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      <Footer />
    </div>
  );
}

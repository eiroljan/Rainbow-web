"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const features = [
  {
    icon: "🔒",
    title: "Military-Grade Encryption",
    desc: "AES-256 encryption keeps your data completely safe from hackers, ISPs, and surveillance agencies.",
  },
  {
    icon: "⚡",
    title: "Lightning Fast Speeds",
    desc: "Our optimized servers ensure blazing-fast connections with zero bandwidth throttling.",
  },
  {
    icon: "🌍",
    title: "10,000+ Global Servers",
    desc: "Connect from anywhere with servers in 100+ countries. Bypass geo-restrictions effortlessly.",
  },
  {
    icon: "🛡️",
    title: "No-Log Policy",
    desc: "We never log, store, or share your personal data. Your privacy is our promise.",
  },
  {
    icon: "🔌",
    title: "Kill Switch",
    desc: "Automatic kill switch cuts internet if VPN drops, ensuring your IP is never exposed.",
  },
  {
    icon: "📱",
    title: "Multi-Device Support",
    desc: "Protect up to 10 devices simultaneously — Windows, Mac, iOS, Android, and more.",
  },
];

const stats = [
  { value: "10K+", label: "Global Servers" },
  { value: "100+", label: "Countries" },
  { value: "50M+", label: "Happy Users" },
  { value: "99.9%", label: "Uptime" },
];

const testimonials = [
  {
    name: "Sarah Chen",
    role: "Cybersecurity Engineer",
    avatar: "SC",
    text: "RainbowVPN is by far the most reliable VPN I've used. The speeds are incredible and the security features are top-notch.",
    rating: 5,
  },
  {
    name: "Marcus Thompson",
    role: "Digital Nomad",
    avatar: "MT",
    text: "I travel constantly and RainbowVPN ensures I can access content from home no matter where I am. Absolute lifesaver.",
    rating: 5,
  },
  {
    name: "Priya Patel",
    role: "Privacy Advocate",
    avatar: "PP",
    text: "The no-log policy and transparency reports give me complete confidence. This is the VPN I recommend to everyone.",
    rating: 5,
  },
];

export default function Home() {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{ background: "var(--bg-primary)", minHeight: "100vh" }}>
      <Navbar />

      {/* ===== HERO SECTION ===== */}
      <section
        id="hero"
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
        style={{ paddingTop: "120px", paddingBottom: "60px" }}
      >
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/vpn_hero_bg.jpg"
            alt="VPN network background"
            fill
            className="object-cover"
            priority
            style={{ opacity: 0.25 }}
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(ellipse at center, rgba(5,9,21,0.2) 0%, rgba(5,9,21,0.8) 70%, var(--bg-primary) 100%)",
            }}
          />
        </div>

        {/* Animated orbs */}
        <div
          className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full animate-pulse-glow"
          style={{
            background:
              "radial-gradient(circle, rgba(0,212,255,0.12) 0%, transparent 70%)",
            filter: "blur(40px)",
          }}
        />
        <div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full animate-pulse-glow"
          style={{
            background:
              "radial-gradient(circle, rgba(139,92,246,0.12) 0%, transparent 70%)",
            filter: "blur(40px)",
            animationDelay: "1s",
          }}
        />

        <div className="container relative z-10 text-center">
          {/* Badge */}
          <div className="flex justify-center mb-6">
            <div className="section-label">
              <span className="animate-pulse-glow">🔐</span>
              World&apos;s Most Trusted VPN — 50M+ Users
            </div>
          </div>

          {/* Headline */}
          <h1
            className="text-5xl md:text-7xl font-black leading-tight mb-6"
            style={{ fontFamily: "var(--font-outfit)", letterSpacing: "-0.02em" }}
          >
            <span style={{ color: "var(--text-primary)" }}>Browse the Web</span>
            <br />
            <span className="gradient-text">Freely & Safely</span>
          </h1>

          {/* Sub */}
          <p
            className="text-xl md:text-2xl mb-10 mx-auto"
            style={{
              color: "var(--text-secondary)",
              maxWidth: "620px",
              lineHeight: 1.7,
            }}
          >
            Military-grade encryption. Zero logs. Lightning-fast speeds.
            <br />
            <strong style={{ color: "var(--text-primary)" }}>
              Connect to 10,000+ servers in 100+ countries.
            </strong>
          </p>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Link href="/download" className="btn-primary" id="hero-download-btn" style={{ fontSize: "1.05rem", padding: "16px 40px" }}>
              <span>⬇️ Download Free</span>
            </Link>
            <Link href="/pricing" className="btn-secondary" id="hero-pricing-btn" style={{ fontSize: "1.05rem", padding: "16px 40px" }}>
              <span>View Plans</span>
            </Link>
          </div>

          {/* Trust badges */}
          <div className="flex flex-wrap justify-center gap-6">
            {["✅ 30-Day Money Back", "✅ No Credit Card Required", "✅ Cancel Anytime"].map(
              (badge) => (
                <span
                  key={badge}
                  style={{ color: "var(--text-secondary)", fontSize: "0.9rem" }}
                >
                  {badge}
                </span>
              )
            )}
          </div>

          {/* Shield logo floating */}
          <div className="flex justify-center mt-16">
            <div className="relative animate-float" style={{ width: "220px", height: "220px" }}>
              <Image
                src="/vpn_shield.jpg"
                alt="RainbowVPN Shield"
                width={220}
                height={220}
                className="rounded-3xl glow-cyan"
                style={{ objectFit: "cover" }}
              />
              {/* Orbiting ring */}
              <div
                className="absolute inset-0 rounded-full animate-spin-slow"
                style={{
                  border: "1px dashed rgba(0,212,255,0.3)",
                  transform: "scale(1.3)",
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ===== STATS SECTION ===== */}
      <section id="stats" className="py-20" style={{ background: "rgba(255,255,255,0.02)" }}>
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="stat-card">
                <div className="stat-number">{stat.value}</div>
                <div
                  className="mt-2 font-medium text-sm uppercase tracking-widest"
                  style={{ color: "var(--text-secondary)" }}
                >
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== FEATURES SECTION ===== */}
      <section id="features" className="py-24">
        <div className="container ">
          <div className="text-center mb-16 ">
            <div className="section-label inline-flex">⚙️ Features</div>
            <h2
              className="text-4xl md:text-5xl font-black"
              style={{ fontFamily: "var(--font-outfit)" }}
            >
              Everything You Need to
              <br />
              <span className="gradient-text">Stay Protected</span>
            </h2>
            <div className="divider mt-4" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, i) => (
              <div key={feature.title} className="feature-card" id={`feature-${i}`}>
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl mb-5"
                  style={{ background: "rgba(0,212,255,0.1)", border: "1px solid rgba(0,212,255,0.2)" }}
                >
                  {feature.icon}
                </div>
                <h3
                  className="text-xl font-bold mb-3"
                  style={{ color: "var(--text-primary)" }}
                >
                  {feature.title}
                </h3>
                <p style={{ color: "var(--text-secondary)", lineHeight: 1.7 }}>
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section >

      {/* ===== HOW IT WORKS SECTION ===== */}
      < section
        id="how-it-works"
        className="py-24"
        style={{ background: "rgba(255,255,255,0.02)" }
        }
      >
        <div className="container">
          <div className="text-center mb-16">
            <div className="section-label inline-flex">🚀 How It Works</div>
            <h2
              className="text-4xl md:text-5xl font-black"
              style={{ fontFamily: "var(--font-outfit)" }}
            >
              Get Protected in
              <span className="gradient-text"> 3 Simple Steps</span>
            </h2>
            <div className="divider mt-4" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 relative">
            {/* connector line */}
            <div
              className="hidden md:block absolute top-12 left-1/4 right-1/4 h-px"
              style={{ background: "linear-gradient(90deg, transparent, rgba(0,212,255,0.4), transparent)" }}
            />

            {[
              {
                step: "01",
                icon: "⬇️",
                title: "Download RainbowVPN",
                desc: "Install RainbowVPN on your device in seconds. Available for all platforms.",
              },
              {
                step: "02",
                icon: "🔗",
                title: "Connect to a Server",
                desc: "Choose from 10,000+ servers in 100+ countries with a single click.",
              },
              {
                step: "03",
                icon: "🌐",
                title: "Browse Freely",
                desc: "Enjoy unlimited, private, and secure internet with full anonymity.",
              },
            ].map((item, i) => (
              <div key={item.step} className="text-center relative" id={`step-${i + 1}`}>
                <div
                  className="w-20 h-20 rounded-full flex items-center justify-center text-3xl mx-auto mb-6 relative z-10"
                  style={{
                    background: "rgba(0,212,255,0.08)",
                    border: "2px solid rgba(0,212,255,0.3)",
                    boxShadow: "0 0 30px rgba(0,212,255,0.15)",
                  }}
                >
                  {item.icon}
                </div>
                <div
                  className="text-xs font-bold tracking-widest mb-2"
                  style={{ color: "var(--accent-cyan)" }}
                >
                  STEP {item.step}
                </div>
                <h3
                  className="text-xl font-bold mb-3"
                  style={{ color: "var(--text-primary)" }}
                >
                  {item.title}
                </h3>
                <p style={{ color: "var(--text-secondary)", lineHeight: 1.7 }}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section >

      {/* ===== TESTIMONIALS ===== */}
      < section id="testimonials" className="py-24" >
        <div className="container">
          <div className="text-center mb-16">
            <div className="section-label inline-flex">⭐ Testimonials</div>
            <h2
              className="text-4xl md:text-5xl font-black"
              style={{ fontFamily: "var(--font-outfit)" }}
            >
              Loved by <span className="gradient-text">Millions</span>
            </h2>
            <div className="divider mt-4" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <div
                key={t.name}
                className="glass-card p-8 transition-all duration-300"
                id={`testimonial-${i}`}
                style={{
                  border:
                    activeTestimonial === i
                      ? "1px solid rgba(0,212,255,0.4)"
                      : "1px solid rgba(255,255,255,0.08)",
                  boxShadow:
                    activeTestimonial === i
                      ? "0 0 40px rgba(0,212,255,0.1)"
                      : "none",
                  transform: activeTestimonial === i ? "scale(1.02)" : "scale(1)",
                }}
              >
                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {Array(t.rating)
                    .fill(0)
                    .map((_, j) => (
                      <span key={j} style={{ color: "#f59e0b" }}>★</span>
                    ))}
                </div>
                <p
                  className="mb-6 leading-relaxed"
                  style={{ color: "var(--text-secondary)", fontStyle: "italic" }}
                >
                  &ldquo;{t.text}&rdquo;
                </p>
                <div className="flex items-center gap-3">
                  <div
                    className="w-11 h-11 rounded-full flex items-center justify-center text-sm font-bold text-white"
                    style={{ background: "linear-gradient(135deg, #00d4ff, #8b5cf6)" }}
                  >
                    {t.avatar}
                  </div>
                  <div>
                    <div className="font-semibold" style={{ color: "var(--text-primary)" }}>
                      {t.name}
                    </div>
                    <div className="text-sm" style={{ color: "var(--text-secondary)" }}>
                      {t.role}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setActiveTestimonial(i)}
                className="rounded-full transition-all duration-300"
                style={{
                  width: activeTestimonial === i ? "24px" : "8px",
                  height: "8px",
                  background:
                    activeTestimonial === i
                      ? "var(--accent-cyan)"
                      : "rgba(255,255,255,0.2)",
                  border: "none",
                  cursor: "pointer",
                }}
                aria-label={`Go to testimonial ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </section >

      {/* ===== CTA BANNER ===== */}
      < section
        id="cta-banner"
        className="py-24"
        style={{ background: "rgba(255,255,255,0.02)" }}
      >
        <div className="container">
          <div
            className="rounded-3xl p-16 text-center relative overflow-hidden"
            style={{
              background: "linear-gradient(135deg, rgba(0,212,255,0.08) 0%, rgba(139,92,246,0.08) 100%)",
              border: "1px solid rgba(0,212,255,0.2)",
            }}
          >
            {/* Decorative blobs */}
            <div
              className="absolute -top-20 -left-20 w-64 h-64 rounded-full opacity-30"
              style={{ background: "radial-gradient(circle, rgba(0,212,255,0.3), transparent)", filter: "blur(30px)" }}
            />
            <div
              className="absolute -bottom-20 -right-20 w-64 h-64 rounded-full opacity-30"
              style={{ background: "radial-gradient(circle, rgba(139,92,246,0.3), transparent)", filter: "blur(30px)" }}
            />

            <div className="relative z-10">
              <div className="text-5xl mb-4">🔐</div>
              <h2
                className="text-4xl md:text-5xl font-black mb-4"
                style={{ fontFamily: "var(--font-outfit)" }}
              >
                Start Protecting Your
                <br />
                <span className="gradient-text">Privacy Today</span>
              </h2>
              <p
                className="text-lg mb-8 mx-auto"
                style={{ color: "var(--text-secondary)", maxWidth: "500px" }}
              >
                Join 50 million+ people who trust RainbowVPN for their online security. No commitment required.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/download" className="btn-primary" id="cta-download-btn" style={{ fontSize: "1.05rem", padding: "16px 40px" }}>
                  <span>⬇️ Get RainbowVPN Free</span>
                </Link>
                <Link href="/pricing" className="btn-secondary" id="cta-pricing-btn" style={{ fontSize: "1.05rem", padding: "16px 40px" }}>
                  <span>See All Plans</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section >

      <Footer />
    </div >
  );
}

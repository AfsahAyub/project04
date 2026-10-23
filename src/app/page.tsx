
"use client";

import { useState } from "react";

const email = "afsahayub45@gmail.com";

const projects = [
  {
    title: "Plant Species Explorer",
    category: "Botany • Plant Identification",
    description:
      "An interactive botanical gallery exploring plant morphology, leaf structures, habitat preferences, and scientific classification.",
    image:
      "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=900&q=85",
    alt: "Green plant leaves in a botanical garden",
    tags: ["Botany", "Plant Science", "Research"],
  },
  {
    title: "Medicinal Plants of Pakistan",
    category: "Ethnobotany • Biodiversity",
    description:
      "A digital field guide exploring medicinal plants, their traditional uses, botanical characteristics, and conservation importance.",
    image:
      "https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?auto=format&fit=crop&w=900&q=85",
    alt: "Medicinal herbs and green foliage",
    tags: ["Ethnobotany", "Biodiversity", "Education"],
  },
  {
    title: "Plant Health & Environment",
    category: "Plant Ecology • Sustainability",
    description:
      "A botanical research concept investigating how soil quality, water availability, and environmental pollution influence plant growth.",
    image:
      "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?auto=format&fit=crop&w=900&q=85",
    alt: "Young plants growing in soil",
    tags: ["Plant Ecology", "Soil Science", "Sustainability"],
  },
];

const skills = [
  "Plant Taxonomy",
  "Plant Morphology",
  "Plant Physiology",
  "Plant Ecology",
  "Biodiversity",
  "Soil Science",
  "Environmental Botany",
  "Scientific Writing",
  "Research & Observation",
];

const interests = [
  {
    icon: "🌿",
    title: "Plant Diversity",
    text: "Exploring plant identification, classification, biodiversity, and ecological roles.",
  },
  {
    icon: "🌱",
    title: "Plant Growth",
    text: "Understanding plant physiology, soil conditions, and environmental factors affecting growth.",
  },
  {
    icon: "🔬",
    title: "Scientific Research",
    text: "Developing research skills through observation, laboratory work, data analysis, and scientific writing.",
  },
];

export default function BotanyPortfolio() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const subject = encodeURIComponent(
      form.subject || "Botany Portfolio Inquiry"
    );
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`
    );

    window.location.href =
      `mailto:${email}?subject=${subject}&body=${body}`;

    setSubmitted(true);
  }

  const navLinks = [
    ["Home", "#home"],
    ["About", "#about"],
    ["Skills", "#skills"],
    ["Projects", "#projects"],
    ["Contact", "#contact"],
  ];

  return (
    <main className="min-h-screen overflow-hidden bg-[#07130f] font-sans text-[#e8f2e9] selection:bg-emerald-300 selection:text-[#07130f]">
      <style jsx global>{`
        html {
          scroll-behavior: smooth;
          scroll-padding-top: 90px;
        }

        body {
          margin: 0;
          background: #07130f;
        }

        .botany-font {
          font-family: Georgia, "Times New Roman", serif;
        }

        .leaf-pattern {
          background-image: radial-gradient(
            rgba(167, 243, 208, 0.1) 1px,
            transparent 1px
          );
          background-size: 24px 24px;
        }

        .glass-card {
          background: rgba(18, 38, 29, 0.78);
          border: 1px solid rgba(167, 243, 208, 0.12);
          backdrop-filter: blur(12px);
        }

        .reveal-line {
          height: 1px;
          background: linear-gradient(
            90deg,
            transparent,
            rgba(110, 231, 183, 0.55),
            transparent
          );
        }
      `}</style>

      {/* NAVBAR */}
      <header className="sticky top-0 z-50 border-b border-emerald-100/10 bg-[#07130f]/90 backdrop-blur-xl">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8">
          <a href="#home" className="flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-full border border-emerald-200/30 bg-emerald-300/10 text-2xl text-emerald-200">
              ❧
            </span>
            <span className="botany-font text-xl font-bold text-emerald-100">
              Afsah Ayub<span className="text-emerald-400">.</span>
            </span>
          </a>

          <button
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            className="rounded-lg border border-emerald-100/20 px-3 py-2 text-sm text-emerald-100 md:hidden"
            aria-label="Toggle navigation"
            aria-expanded={menuOpen}
          >
            {menuOpen ? "Close ✕" : "Menu ☰"}
          </button>

          <div
            className={`${
              menuOpen ? "flex" : "hidden"
            } absolute left-0 right-0 top-full flex-col gap-1 border-b border-emerald-100/10 bg-[#07130f] p-5 md:static md:flex md:flex-row md:items-center md:gap-7 md:border-0 md:bg-transparent md:p-0`}
          >
            {navLinks.map(([label, href]) => (
              <a
                key={label}
                href={href}
                onClick={() => setMenuOpen(false)}
                className="rounded-lg px-3 py-2 text-sm text-[#b3c8b7] transition hover:bg-emerald-300/10 hover:text-emerald-200"
              >
                {label}
              </a>
            ))}

            <a
              href="#projects"
              onClick={() => setMenuOpen(false)}
              className="mt-2 rounded-full bg-emerald-300 px-5 py-2.5 text-center text-sm font-bold text-[#092016] transition hover:bg-emerald-200 md:mt-0"
            >
              Explore My Work ↗
            </a>
          </div>
        </nav>
      </header>

      {/* HERO */}
      <section id="home" className="leaf-pattern relative isolate">
        <div className="absolute -right-32 top-10 -z-10 h-96 w-96 rounded-full bg-emerald-400/10 blur-[110px]" />

        <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-20 sm:px-8 sm:py-28 lg:grid-cols-2 lg:gap-16 lg:py-32">
          <div>
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-emerald-200/20 bg-emerald-300/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-emerald-200">
              <span className="h-2 w-2 rounded-full bg-emerald-400" />
              Botany • Research • Nature
            </div>

            <h1 className="botany-font text-5xl font-bold leading-[1.08] tracking-tight text-[#f0f7ed] sm:text-6xl lg:text-7xl">
              Afsah Ayub
              <br />
              <span className="italic text-emerald-300">
                Exploring Life.
              </span>
            </h1>

            <p className="mt-6 text-lg font-medium text-emerald-100">
              PhD Student in Botany
            </p>

            <p className="mt-2 text-sm text-[#9eb6a5]">
              University of Sargodha, Pakistan
            </p>

            <p className="mt-6 max-w-xl text-base leading-8 text-[#b3c8b7] sm:text-lg">
              I am Afsah Ayub, a PhD student passionate about plant science,
              environmental sustainability, biodiversity, and botanical
              research. I aim to understand how plants interact with their
              environment and how scientific research can contribute to a
              healthier planet.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 rounded-full bg-emerald-300 px-7 py-3.5 text-sm font-bold text-[#092016] shadow-lg transition hover:-translate-y-1 hover:bg-emerald-200"
              >
                Explore My Projects ↗
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full border border-emerald-100/20 px-7 py-3.5 text-sm font-semibold text-emerald-100 transition hover:-translate-y-1 hover:border-emerald-300/60"
              >
                Contact Me
              </a>
            </div>

            <div className="mt-12 flex flex-wrap gap-x-8 gap-y-4 border-t border-emerald-100/10 pt-7">
              <div>
                <p className="botany-font text-2xl font-bold text-emerald-200">
                  Botany
                </p>
                <p className="mt-1 text-xs text-[#8ca697]">Plant Science</p>
              </div>
              <div className="h-12 w-px bg-emerald-100/10" />
              <div>
                <p className="botany-font text-2xl font-bold text-emerald-200">
                  Research
                </p>
                <p className="mt-1 text-xs text-[#8ca697]">Scientific Learning</p>
              </div>
              <div className="h-12 w-px bg-emerald-100/10" />
              <div>
                <p className="botany-font text-2xl font-bold text-emerald-200">
                  Nature
                </p>
                <p className="mt-1 text-xs text-[#8ca697]">Conservation</p>
              </div>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-lg">
            <div className="absolute -inset-4 rotate-3 rounded-[2rem] border border-emerald-200/10" />
            <div className="relative overflow-hidden rounded-[1.8rem] border border-emerald-100/15 bg-[#12261d] p-3 shadow-2xl shadow-black/40">
              <div className="relative overflow-hidden rounded-[1.35rem]">
                <img
                  src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=1100&q=90"
                  alt="Sunlight filtering through a lush green forest"
                  className="h-[390px] w-full object-cover sm:h-[490px]"
                  fetchPriority="high"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#07130f]/90 via-transparent to-emerald-950/10" />
                <div className="absolute bottom-0 p-6 sm:p-8">
                  <p className="text-xs font-semibold uppercase tracking-[0.25em] text-emerald-300">
                    The natural world
                  </p>
                  <h2 className="botany-font mt-2 text-3xl font-bold text-white sm:text-4xl">
                    Every leaf tells a story.
                  </h2>
                  <p className="mt-3 text-sm text-emerald-50/75">
                    Observe. Understand. Preserve.
                  </p>
                </div>
              </div>
            </div>
            <div className="glass-card absolute -bottom-5 -left-3 rounded-2xl px-5 py-4 shadow-xl sm:-left-8">
              <p className="text-2xl">🌱</p>
              <p className="mt-1 text-sm font-bold text-emerald-100">
                A Journey in Botany
              </p>
              <p className="mt-1 text-xs text-[#9eb6a5]">
                Research • Learning • Discovery
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="scroll-mt-24 bg-[#0b1b13] py-20 sm:py-28">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 sm:px-8 lg:grid-cols-2 lg:gap-20">
          <div className="relative">
            <div className="absolute -left-4 -top-4 h-24 w-24 border-l border-t border-emerald-300/40" />
            <img
              src="https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?auto=format&fit=crop&w=1000&q=85"
              alt="Plants growing in a greenhouse"
              loading="lazy"
              className="relative h-[320px] w-full rounded-2xl object-cover shadow-2xl sm:h-[420px]"
            />
            <div className="absolute -bottom-5 -right-3 rounded-xl border border-emerald-100/15 bg-[#12261d] px-5 py-4 sm:-right-5">
              <p className="botany-font text-xl font-bold text-emerald-200">
                A passion for plants
              </p>
              <p className="mt-1 text-xs text-[#a1b7a7]">
                Learning through research
              </p>
            </div>
          </div>

          <div className="pt-5 lg:pt-0">
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-emerald-400">
              About Me
            </p>
            <h2 className="botany-font mt-4 text-4xl font-bold leading-tight text-[#f0f7ed] sm:text-5xl">
              Science in nature.
              <br />
              <span className="italic text-emerald-300">
                Knowledge for life.
              </span>
            </h2>
            <div className="reveal-line mt-6 max-w-24" />

            <p className="mt-7 leading-8 text-[#b3c8b7]">
              I am Afsah Ayub, a PhD student at the University of Sargodha,
              Pakistan. My academic interests focus on botany, plant
              physiology, plant ecology, and the relationship between plants
              and their environment.
            </p>
            <p className="mt-4 leading-8 text-[#b3c8b7]">
              I am particularly interested in understanding environmental
              pollution, sustainable water use, and the role of plants in
              ecological systems. Through doctoral research, I aim to improve
              my scientific knowledge, analytical skills, and contribution
              to environmental sustainability.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="rounded-xl border border-emerald-100/10 bg-[#102319] p-4">
                <span className="text-xl">🎓</span>
                <h3 className="mt-3 font-bold text-emerald-100">
                  Education
                </h3>
                <p className="mt-1 text-sm leading-6 text-[#9eb6a5]">
                  PhD student, University of Sargodha.
                </p>
              </div>
              <div className="rounded-xl border border-emerald-100/10 bg-[#102319] p-4">
                <span className="text-xl">🔬</span>
                <h3 className="mt-3 font-bold text-emerald-100">
                  Research Focus
                </h3>
                <p className="mt-1 text-sm leading-6 text-[#9eb6a5]">
                  Botany, plant science, and environmental research.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* RESEARCH INTERESTS */}
      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-emerald-400">
              Research Interests
            </p>
            <h2 className="botany-font mt-4 text-4xl font-bold text-[#f0f7ed] sm:text-5xl">
              What inspires <span className="italic text-emerald-300">me.</span>
            </h2>
            <p className="mt-4 leading-7 text-[#9eb6a5]">
              Exploring plant life, environmental challenges, and scientific
              approaches to sustainability.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            {interests.map((item) => (
              <article
                key={item.title}
                className="glass-card rounded-2xl p-7 transition duration-300 hover:-translate-y-2 hover:border-emerald-300/30 hover:shadow-xl hover:shadow-emerald-950/20"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-300/10 text-3xl">
                  {item.icon}
                </div>
                <h3 className="botany-font mt-6 text-2xl font-bold text-emerald-100">
                  {item.title}
                </h3>
                <p className="mt-3 leading-7 text-[#a6bcae]">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section
        id="skills"
        className="scroll-mt-24 border-y border-emerald-100/10 bg-[#0b1b13] py-20 sm:py-24"
      >
        <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-emerald-400">
              Academic Skills
            </p>
            <h2 className="botany-font mt-4 text-4xl font-bold text-[#f0f7ed] sm:text-5xl">
              My botanical
              <br />
              <span className="italic text-emerald-300">toolkit.</span>
            </h2>
            <p className="mt-6 max-w-lg leading-8 text-[#a6bcae]">
              My academic journey brings together botanical knowledge,
              scientific observation, research methods, and an interest in
              solving environmental problems.
            </p>
          </div>

          <div className="rounded-3xl border border-emerald-100/10 bg-[#102319] p-6 sm:p-9">
            <h3 className="botany-font mb-6 text-2xl font-bold text-emerald-100">
              Areas of Knowledge
            </h3>
            <div className="flex flex-wrap gap-3">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full border border-emerald-200/15 bg-emerald-300/5 px-4 py-2.5 text-sm text-[#c8ddce] transition hover:border-emerald-300/50 hover:bg-emerald-300/10 hover:text-emerald-200"
                >
                  {skill}
                </span>
              ))}
            </div>
            <div className="mt-8 border-t border-emerald-100/10 pt-6">
              <p className="text-sm leading-7 text-[#8fa999]">
                Interested in botanical research, environmental monitoring,
                data analysis, scientific writing, and continuous learning.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="scroll-mt-24 py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.25em] text-emerald-400">
                Selected Work
              </p>
              <h2 className="botany-font mt-4 text-4xl font-bold text-[#f0f7ed] sm:text-5xl">
                Botanical <span className="italic text-emerald-300">Stories.</span>
              </h2>
            </div>
            <p className="max-w-md leading-7 text-[#9eb6a5]">
              Explore sample project concepts connected with plant
              identification, medicinal plants, and environmental botany.
            </p>
          </div>

          <div className="mt-12 grid gap-7 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, index) => (
              <article
                key={project.title}
                className="group overflow-hidden rounded-2xl border border-emerald-100/10 bg-[#0d1e15] shadow-xl shadow-black/10 transition duration-300 hover:-translate-y-2 hover:border-emerald-200/30 hover:shadow-2xl hover:shadow-emerald-950/30"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.alt}
                    loading="lazy"
                    className="h-60 w-full object-cover transition duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#07130f]/70 via-transparent to-transparent" />
                  <span className="absolute left-4 top-4 rounded-full border border-white/20 bg-[#07130f]/75 px-3 py-1.5 text-xs font-medium text-emerald-100 backdrop-blur">
                    Project 0{index + 1}
                  </span>
                  <span className="absolute bottom-4 right-4 flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-[#07130f]/70 text-xl text-emerald-200 transition group-hover:rotate-12 group-hover:bg-emerald-300 group-hover:text-[#07130f]">
                    ↗
                  </span>
                </div>

                <div className="p-6">
                  <p className="text-xs font-semibold uppercase tracking-wider text-emerald-400">
                    {project.category}
                  </p>
                  <h3 className="botany-font mt-3 text-2xl font-bold text-[#e8f2e9] transition group-hover:text-emerald-200">
                    {project.title}
                  </h3>
                  <p className="mt-3 min-h-[100px] text-sm leading-7 text-[#a6bcae]">
                    {project.description}
                  </p>
                  <div className="mt-5 flex flex-wrap gap-2 border-t border-emerald-100/10 pt-5">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-md bg-emerald-300/5 px-2.5 py-1.5 text-xs text-[#a8c5b2]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>

          <p className="mt-8 text-center text-sm leading-6 text-[#819b89]">
            Replace these sample concepts with your completed PhD projects,
            publications, experiments, and research findings.
          </p>
        </div>
      </section>

      {/* NATURE BANNER */}
      <section className="relative overflow-hidden border-y border-emerald-100/10">
        <img
          src="https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?auto=format&fit=crop&w=1800&q=85"
          alt="Golden sunlight over a natural green landscape"
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-[#07130f]/80" />
        <div className="leaf-pattern relative mx-auto max-w-5xl px-5 py-20 text-center sm:px-8 sm:py-28">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-emerald-300">
            A Thought to Grow By
          </p>
          <h2 className="botany-font mt-6 text-4xl font-bold leading-tight text-white sm:text-6xl">
            Understanding plants.
            <br className="hidden sm:block" />
            Protecting our planet.
          </h2>
          <p className="mx-auto mt-6 max-w-xl leading-7 text-emerald-50/75">
            Through scientific curiosity and botanical research, we can
            better understand the relationship between plants, people, and
            the environment.
          </p>
          <a
            href="#contact"
            className="mt-8 inline-flex rounded-full bg-emerald-300 px-7 py-3.5 text-sm font-bold text-[#092016] transition hover:-translate-y-1 hover:bg-emerald-200"
          >
            Let&apos;s Connect ↗
          </a>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="scroll-mt-24 py-20 sm:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-2 lg:gap-20">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-emerald-400">
              Get in Touch
            </p>
            <h2 className="botany-font mt-4 text-4xl font-bold leading-tight text-[#f0f7ed] sm:text-5xl">
              Let&apos;s grow
              <br />
              <span className="italic text-emerald-300">together.</span>
            </h2>
            <p className="mt-6 max-w-lg leading-8 text-[#a6bcae]">
              Interested in botanical research, academic collaboration,
              plant science, or environmental sustainability? Feel free to
              contact me.
            </p>

            <div className="mt-9 space-y-5">
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-emerald-100/10 bg-emerald-300/5 text-xl">
                  ✉
                </div>
                <div>
                  <p className="text-xs text-[#8fa999]">Email Address</p>
                  <a
                    href={`mailto:${email}`}
                    className="mt-1 inline-block break-all text-sm font-medium text-emerald-100 transition hover:text-emerald-300"
                  >
                    {email}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-emerald-100/10 bg-emerald-300/5 text-xl">
                  🎓
                </div>
                <div>
                  <p className="text-xs text-[#8fa999]">Academic Affiliation</p>
                  <p className="mt-1 text-sm font-medium text-emerald-100">
                    University of Sargodha, Pakistan
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-emerald-100/10 bg-emerald-300/5 text-xl">
                  🔬
                </div>
                <div>
                  <p className="text-xs text-[#8fa999]">Academic Interest</p>
                  <p className="mt-1 text-sm font-medium text-emerald-100">
                    Botany & Environmental Research
                  </p>
                </div>
              </div>
            </div>
          </div>

          <form
            onSubmit={handleSubmit}
            className="rounded-3xl border border-emerald-100/10 bg-[#0d1e15] p-6 shadow-2xl shadow-black/20 sm:p-9"
          >
            <h3 className="botany-font text-2xl font-bold text-emerald-100">
              Send Me a Message
            </h3>
            <p className="mt-2 text-sm leading-6 text-[#8fa999]">
              Complete the form to prepare an email to me.
            </p>

            <div className="mt-7 grid gap-5 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="name"
                  className="mb-2 block text-sm font-medium text-[#c8ddce]"
                >
                  Your Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  required
                  value={form.name}
                  onChange={(e) =>
                    setForm({ ...form, name: e.target.value })
                  }
                  placeholder="Enter your name"
                  className="w-full rounded-xl border border-emerald-100/10 bg-[#07130f] px-4 py-3.5 text-sm text-white outline-none transition placeholder:text-[#60796a] focus:border-emerald-300/60 focus:ring-2 focus:ring-emerald-300/10"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-medium text-[#c8ddce]"
                >
                  Your Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  value={form.email}
                  onChange={(e) =>
                    setForm({ ...form, email: e.target.value })
                  }
                  placeholder="you@example.com"
                  className="w-full rounded-xl border border-emerald-100/10 bg-[#07130f] px-4 py-3.5 text-sm text-white outline-none transition placeholder:text-[#60796a] focus:border-emerald-300/60 focus:ring-2 focus:ring-emerald-300/10"
                />
              </div>
            </div>

            <div className="mt-5">
              <label
                htmlFor="subject"
                className="mb-2 block text-sm font-medium text-[#c8ddce]"
              >
                Subject
              </label>
              <input
                id="subject"
                name="subject"
                type="text"
                value={form.subject}
                onChange={(e) =>
                  setForm({ ...form, subject: e.target.value })
                }
                placeholder="Research, collaboration, or inquiry"
                className="w-full rounded-xl border border-emerald-100/10 bg-[#07130f] px-4 py-3.5 text-sm text-white outline-none transition placeholder:text-[#60796a] focus:border-emerald-300/60 focus:ring-2 focus:ring-emerald-300/10"
              />
            </div>

            <div className="mt-5">
              <label
                htmlFor="message"
                className="mb-2 block text-sm font-medium text-[#c8ddce]"
              >
                Your Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                required
                value={form.message}
                onChange={(e) =>
                  setForm({ ...form, message: e.target.value })
                }
                placeholder="Write your message here..."
                className="w-full resize-y rounded-xl border border-emerald-100/10 bg-[#07130f] px-4 py-3.5 text-sm text-white outline-none transition placeholder:text-[#60796a] focus:border-emerald-300/60 focus:ring-2 focus:ring-emerald-300/10"
              />
            </div>

            <button
              type="submit"
              className="mt-6 flex w-full items-center justify-center gap-3 rounded-xl bg-emerald-300 px-6 py-4 text-sm font-bold text-[#092016] shadow-lg transition hover:-translate-y-0.5 hover:bg-emerald-200"
            >
              Prepare Email <span className="text-lg">↗</span>
            </button>

            {submitted && (
              <p
                role="status"
                className="mt-4 text-center text-sm leading-6 text-emerald-200"
              >
                Your email application should open. If it does not, please
                check whether an email application is configured on your
                device.
              </p>
            )}

            <p className="mt-4 text-center text-xs leading-5 text-[#718a79]">
              Messages are prepared using your device&apos;s email
              application. This form does not send or store messages on a
              website server.
            </p>
          </form>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-emerald-100/10 bg-[#050e0a]">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-5 px-5 py-8 sm:px-8 md:flex-row">
          <a href="#home" className="flex items-center gap-2">
            <span className="text-2xl text-emerald-300">❧</span>
            <span className="botany-font text-lg font-bold text-emerald-100">
              Afsah Ayub.
            </span>
          </a>

          <p className="text-center text-xs leading-6 text-[#819b89]">
            © {new Date().getFullYear()} Afsah Ayub | PhD Student in Botany
          </p>

          <a
            href="#home"
            className="rounded-full border border-emerald-100/15 px-4 py-2 text-sm text-emerald-200 transition hover:border-emerald-300/40 hover:bg-emerald-300/5"
          >
            Back to Top ↑
          </a>
        </div>
      </footer>
    </main>
  );
}

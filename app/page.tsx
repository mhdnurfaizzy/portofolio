import Nav from "./components/Nav";
import Section from "./components/Section";
import {
  profile,
  stats,
  experience,
  skills,
  certifications,
  education,
  involvement,
} from "./data";

export default function Home() {
  return (
    <main id="top" className="min-h-screen bg-slate-50">
      <Nav />

      {/* Hero */}
      <section className="mx-auto max-w-5xl px-6 pb-16 pt-20 md:pb-24 md:pt-28">
        <p className="text-sm font-medium text-accent">Hi, I&apos;m</p>
        <h1 className="mt-2 text-4xl font-bold tracking-tight text-ink md:text-6xl">
          {profile.name}
        </h1>
        <p className="mt-3 text-xl font-medium text-slate-500 md:text-2xl">
          {profile.title}
        </p>
        <p className="mt-6 max-w-2xl text-base leading-relaxed text-slate-600 md:text-lg">
          {profile.summary}
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href="#contact"
            className="rounded-full bg-ink px-5 py-2.5 text-sm font-medium text-white transition hover:bg-accent"
          >
            Get in touch
          </a>
          <a
            href="/resume.pdf"
            download
            className="rounded-full border border-slate-300 px-5 py-2.5 text-sm font-medium text-ink transition hover:border-accent hover:text-accent"
          >
            Download CV
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-slate-300 px-5 py-2.5 text-sm font-medium text-ink transition hover:border-accent hover:text-accent"
          >
            LinkedIn
          </a>
        </div>

        <dl className="mt-16 grid grid-cols-2 gap-6 border-t border-slate-200 pt-10 sm:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label}>
              <dt className="sr-only">{stat.label}</dt>
              <dd className="text-2xl font-bold text-ink md:text-3xl">
                {stat.value}
              </dd>
              <p className="mt-1 text-sm text-slate-500">{stat.label}</p>
            </div>
          ))}
        </dl>
      </section>

      {/* About */}
      <Section id="about" eyebrow="About" title="Summary">
        <p className="max-w-3xl text-base leading-relaxed text-slate-600 md:text-lg">
          {profile.summary}
        </p>
        <div className="mt-8 grid gap-6 rounded-2xl border border-slate-200 bg-white p-6 sm:grid-cols-2">
          <div>
            <p className="text-sm font-semibold text-ink">Education</p>
            <p className="mt-1 text-sm text-slate-600">
              {education.degree} — {education.school} ({education.year})
            </p>
            <p className="mt-1 text-sm text-slate-500">{education.courses}</p>
          </div>
          <div>
            <p className="text-sm font-semibold text-ink">Location</p>
            <p className="mt-1 text-sm text-slate-600">{profile.location}</p>
          </div>
        </div>
      </Section>

      {/* Experience */}
      <Section id="experience" eyebrow="Career" title="Experience">
        <ol className="space-y-10 border-l border-slate-200 pl-6">
          {experience.map((job) => (
            <li key={`${job.company}-${job.period}`} className="relative">
              <span className="absolute -left-[29px] top-1.5 h-3 w-3 rounded-full border-2 border-white bg-accent" />
              <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                <h3 className="text-lg font-semibold text-ink">{job.role}</h3>
                <span className="text-sm text-slate-500">{job.period}</span>
              </div>
              <p className="text-sm font-medium text-accent">
                {job.company} · {job.location}
              </p>
              <ul className="mt-3 space-y-2">
                {job.points.map((point, i) => (
                  <li
                    key={i}
                    className="flex gap-2 text-sm leading-relaxed text-slate-600"
                  >
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-slate-400" />
                    {point}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ol>
      </Section>

      {/* Skills */}
      <Section id="skills" eyebrow="Toolbox" title="Skills">
        <div className="grid gap-6 sm:grid-cols-2">
          {Object.entries(skills).map(([category, items]) => (
            <div
              key={category}
              className="rounded-2xl border border-slate-200 bg-white p-6"
            >
              <h3 className="text-sm font-semibold text-ink">{category}</h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {items.map((item) => (
                  <span
                    key={item}
                    className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Certifications */}
      <Section
        id="certifications"
        eyebrow="Credentials"
        title="Certifications"
      >
        <ul className="grid gap-4 sm:grid-cols-2">
          {certifications.map((cert) => (
            <li
              key={cert.name}
              className="rounded-2xl border border-slate-200 bg-white p-5"
            >
              <p className="text-sm font-semibold text-ink">{cert.name}</p>
              <p className="mt-1 text-xs text-slate-500">
                {cert.org} · {cert.date}
              </p>
            </li>
          ))}
        </ul>

        <h3 className="mt-12 text-sm font-semibold uppercase tracking-widest text-slate-400">
          Involvement
        </h3>
        <div className="mt-4 space-y-6">
          {involvement.map((item) => (
            <div key={item.role}>
              <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                <p className="text-sm font-semibold text-ink">{item.role}</p>
                <span className="text-xs text-slate-500">{item.period}</span>
              </div>
              <p className="text-xs text-accent">{item.org}</p>
              <ul className="mt-2 space-y-1">
                {item.points.map((point, i) => (
                  <li key={i} className="text-sm text-slate-600">
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Section>

      {/* Contact */}
      <section
        id="contact"
        className="mx-auto max-w-5xl px-6 py-16 md:py-20"
      >
        <div className="rounded-3xl bg-ink px-8 py-14 text-center md:px-16">
          <h2 className="text-2xl font-semibold text-white md:text-3xl">
            Let&apos;s work together
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-slate-300 md:text-base">
            Open to QA Engineer / QA Analyst roles and testing collaborations.
            Reach out by email or connect on LinkedIn.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <a
              href={`mailto:${profile.email}`}
              className="rounded-full bg-white px-5 py-2.5 text-sm font-medium text-ink transition hover:bg-accent hover:text-white"
            >
              {profile.email}
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-slate-600 px-5 py-2.5 text-sm font-medium text-white transition hover:border-accent hover:text-accent"
            >
              LinkedIn
            </a>
          </div>
          <p className="mt-6 text-xs text-slate-400">
            {profile.phone} · {profile.location}
          </p>
        </div>

        <footer className="mt-10 text-center text-xs text-slate-400">
          © {new Date().getFullYear()} {profile.name}. Built with Next.js &
          Tailwind CSS.
        </footer>
      </section>
    </main>
  );
}

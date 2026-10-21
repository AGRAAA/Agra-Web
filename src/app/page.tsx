
import {
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
  Code2,
  Layers3,
  Menu,
  Sparkles,
} from "lucide-react";

const projects = [
  {
    number: "01",
    category: "DESIGN / EXPERIMENT",
    title: "Digital experiences",
    description:
      "Exploring how thoughtful design can make digital experiences feel more human.",
    icon: Layers3,
    className: "project-art-one",
    status: "Exploration",
  },
  {
    number: "02",
    category: "TECHNOLOGY / IDEAS",
    title: "Building with technology",
    description:
      "Turning curious ideas into useful tools, experiments, and practical solutions.",
    icon: Code2,
    className: "project-art-two",
    status: "In progress",
  },
];

const notes = [
  {
    category: "LEARNING",
    title: "Things I'm learning along the way",
    date: "A collection in progress",
  },
  {
    category: "THOUGHTS",
    title: "Ideas worth exploring",
    date: "A collection in progress",
  },
  {
    category: "PROCESS",
    title: "Making things, one step at a time",
    date: "A collection in progress",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden">
      {/* Navigation */}
      <header className="site-header">
        <nav
          className="mx-auto flex max-w-7xl items-center justify-between px-5 py-5 sm:px-8 lg:px-12"
          aria-label="Main navigation"
        >
          <a href="#home" className="wordmark" aria-label="AGRA home">
            AGRA<span>.</span>
          </a>

          <div className="hidden items-center gap-8 md:flex">
            <a className="nav-link" href="#work">Work</a>
            <a className="nav-link" href="#about">About</a>
            <a className="nav-link" href="#notes">Notes</a>
            <a className="nav-contact" href="#contact">
              Let&apos;s connect <ArrowUpRight size={15} />
            </a>
          </div>

          <a
            href="#contact"
            className="inline-flex items-center gap-2 text-sm text-white md:hidden"
          >
            Contact <ArrowUpRight size={15} />
          </a>
        </nav>
      </header>

      {/* Hero */}
      <section
        id="home"
        className="hero-section mx-auto max-w-7xl px-5 pb-20 pt-20 sm:px-8 sm:pb-28 sm:pt-28 lg:px-12 lg:pb-36 lg:pt-32"
      >
        <div className="mb-8 flex items-center gap-3">
          <span className="status-dot" />
          <p className="eyebrow">A PERSONAL SPACE TO EVOLVE</p>
        </div>

                <h1 className="hero-title max-w-5xl">
          Building experience
          <br />
          across <span>technology, content & hospitality.</span>
        </h1>

        <div className="mt-8 flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <p className="max-w-xl text-base leading-8 text-[#A7ADB8] sm:text-lg">
            Combining professional experience with continuous learning in AI, SEO,
            digital content, and hospitality.
          </p>

          <a href="#work" className="primary-button w-fit">
            Explore selected work <ArrowDownRight size={17} />
          </a>
        </div>

        <div className="hero-bottom mt-16 flex flex-wrap items-center justify-between gap-4 pt-5 sm:mt-20">
          <span className="eyebrow">BASED IN INDONESIA</span>
          <span className="eyebrow">CURIOUS BY NATURE · BUILDING BY CHOICE</span>
        </div>
      </section>

      {/* Current focus */}
      <section className="mx-auto max-w-7xl px-5 pb-24 sm:px-8 lg:px-12">
        <div className="focus-panel relative overflow-hidden rounded-2xl p-6 sm:p-10 lg:p-14">
          <div className="focus-glow" aria-hidden="true" />

          <div className="relative z-10 max-w-2xl">
            <div className="mb-5 flex items-center gap-2 text-[#C7F36B]">
              <Sparkles size={16} />
              <span className="eyebrow">CURRENTLY EXPLORING</span>
            </div>

            <h2 className="section-title">
              Learning, creating,
              <br />
              <span className="muted-heading">and evolving.</span>
            </h2>

            <p className="mt-5 max-w-lg leading-7 text-[#A7ADB8]">
              A space for new interests, small experiments, and ideas that
              might become something bigger.
            </p>
          </div>

          <span className="focus-index" aria-hidden="true">A/01</span>
        </div>
      </section>

      {/* Work */}
      <section
        id="work"
        className="mx-auto max-w-7xl scroll-mt-24 px-5 pb-24 sm:px-8 lg:px-12 lg:pb-32"
      >
        <div className="section-heading">
          <div>
            <p className="eyebrow mb-4">A FEW THINGS TAKING SHAPE</p>
            <h2 className="section-title">Selected work<span>.</span></h2>
          </div>
          <span className="hidden text-sm text-[#A7ADB8] sm:block">
            Experiments, ideas &amp; possibilities
          </span>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {projects.map((project) => {
            const Icon = project.icon;

            return (
              <article
                key={project.number}
                className="project-card group overflow-hidden rounded-2xl"
              >
                <div className={`project-art ${project.className}`}>
                  <span className="project-number">{project.number}</span>
                  <Icon
                    className="project-icon transition-transform duration-500 group-hover:scale-110"
                    size={76}
                    strokeWidth={1}
                    aria-hidden="true"
                  />
                  <span className="project-status">{project.status}</span>
                </div>

                <div className="p-6 sm:p-8">
                  <p className="eyebrow mb-3">{project.category}</p>
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="text-xl font-medium tracking-tight text-white sm:text-2xl">
                      {project.title}
                    </h3>
                    <ArrowUpRight
                      className="mt-1 shrink-0 text-[#C7F36B]"
                      size={20}
                    />
                  </div>
                  <p className="mt-3 max-w-md text-sm leading-7 text-[#A7ADB8]">
                    {project.description}
                  </p>
                </div>
              </article>
            );
          })}
        </div>

        <p className="mt-5 text-xs leading-6 text-[#737B88]">
          These cards are starter concepts, not claims about completed
          projects. Replace them with real work when ready.
        </p>
      </section>

      {/* About */}
      <section
        id="about"
        className="about-section scroll-mt-24 border-y border-white/[0.08]"
      >
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-20 sm:px-8 sm:py-24 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20 lg:px-12 lg:py-32">
          <div>
            <p className="eyebrow mb-4">A LITTLE ABOUT THIS SPACE</p>
            <h2 className="section-title">
              Not a finished story.
              <br />
              <span className="muted-heading">A work in progress.</span>
            </h2>
          </div>

          <div className="lg:pt-2">
            <p className="text-lg leading-8 text-[#D7DAE0] sm:text-xl sm:leading-9">
              AGRA is a personal space for curiosity, creativity, and growth.
              A place to collect what I make, what I learn, and what I discover
              along the way.
            </p>
            <p className="mt-5 leading-8 text-[#A7ADB8]">
              As interests evolve and new things take shape, this website will
              evolve too. The goal isn&apos;t to have everything figured out.
              It&apos;s to keep exploring and build things that matter.
            </p>

            <a href="#contact" className="text-link mt-8">
              A little more about me <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </section>

      {/* Notes */}
      <section
        id="notes"
        className="mx-auto max-w-7xl scroll-mt-24 px-5 py-24 sm:px-8 lg:px-12 lg:py-32"
      >
        <div className="section-heading">
          <div>
            <p className="eyebrow mb-4">THOUGHTS ALONG THE WAY</p>
            <h2 className="section-title">Notes &amp; ideas<span>.</span></h2>
          </div>
          <span className="hidden text-sm text-[#A7ADB8] sm:block">
            Small thoughts. Open possibilities.
          </span>
        </div>

        <div className="mt-10">
          {notes.map((note, index) => (
            <article
              key={note.title}
              className="note-row group grid gap-3 py-6 sm:grid-cols-[0.65fr_1.7fr_0.8fr_auto] sm:items-center"
            >
              <span className="eyebrow">{note.category}</span>
              <h3 className="text-base font-medium text-[#E7E9ED] transition-colors group-hover:text-[#C7F36B] sm:text-lg">
                {note.title}
              </h3>
              <span className="text-xs text-[#737B88]">{note.date}</span>
              <ArrowUpRight
                className="hidden text-[#C7F36B] sm:block"
                size={18}
              />
            </article>
          ))}
        </div>
        <p className="mt-4 text-xs leading-6 text-[#737B88]">
          Journal entries will be added here as real writing becomes available.
        </p>
      </section>

      {/* Contact */}
      <section
        id="contact"
        className="mx-auto max-w-7xl scroll-mt-24 px-5 pb-20 sm:px-8 lg:px-12 lg:pb-28"
      >
        <div className="contact-panel relative overflow-hidden rounded-2xl p-7 sm:p-12 lg:p-16">
          <div className="contact-orb" aria-hidden="true" />

          <div className="relative z-10 max-w-3xl">
            <p className="eyebrow mb-5">OPEN TO GOOD CONVERSATIONS</p>
            <h2 className="contact-title">
              Have something
              <br />
              in <span>mind?</span>
            </h2>
            <p className="mt-5 max-w-lg leading-7 text-[#3D4530]">
              Have an idea, a project, or simply want to connect? Let&apos;s
              start a conversation.
            </p>
            <a
              href="mailto:hello@example.com"
              className="contact-button mt-8"
            >
              Get in touch <ArrowUpRight size={17} />
            </a>
            <p className="mt-4 text-xs text-[#596047]">
              Replace the example email with your public contact address.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/[0.08]">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-5 py-7 sm:flex-row sm:items-center sm:justify-between sm:px-8 lg:px-12">
          <a href="#home" className="wordmark text-xl">
            AGRA<span>.</span>
          </a>
          <p className="text-xs text-[#737B88]">
            © 2026 AGRA. Built to evolve.
          </p>
          <a className="footer-link" href="#home">
            Back to top ↑
          </a>
        </div>
      </footer>
    </main>
  );
}

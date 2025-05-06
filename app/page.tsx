import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      {/* Hero Section */}
      <section className="relative w-full py-24 bg-gradient-to-r from-[#f8fafc] to-[#eef2ff] dark:from-[#0f172a] dark:to-[#1e293b]">
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              Investing in{" "}
              <span className="text-primary">Visionary Management</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-foreground/80">
              Nalenz Equity partners with forward-thinking leaders to build
              transformative companies in Europe and beyond.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="#portfolio"
                className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] font-medium px-6 py-3 text-base"
              >
                View Portfolio
              </Link>
              <Link
                href="#about"
                className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent font-medium px-6 py-3 text-base"
              >
                About Us
              </Link>
            </div>
          </div>
        </div>
        <div className="absolute right-0 bottom-0 w-1/3 h-full opacity-10 bg-pattern-grid"></div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            About Nalenz Equity
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg mb-6">
                Based in Germany, Nalenz Equity focuses on high-profit
                investments into companies with visionary management. We
                identify opportunities where innovation meets market needs,
                creating sustainable value for all stakeholders.
              </p>
              <p className="text-lg mb-6">
                Our investment approach centers on partnering with
                forward-thinking leaders who are transforming their industries
                through innovation, technology, and sustainable practices.
              </p>
              <p className="text-lg">
                Through direct investments and our subsidiaries, we support
                growth-oriented companies that demonstrate exceptional potential
                to lead their respective markets.
              </p>
            </div>
            <div className="bg-muted rounded-xl p-8">
              <h3 className="text-xl font-semibold mb-6">
                Our Investment Focus
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="mr-4 mt-1 bg-primary/10 rounded-full p-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-primary"
                    >
                      <path d="m9 12 2 2 4-4" />
                      <circle cx="12" cy="12" r="10" />
                    </svg>
                  </div>
                  <span>
                    Europe's leading communication path between financial
                    institutions and governments
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="mr-4 mt-1 bg-primary/10 rounded-full p-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-primary"
                    >
                      <path d="m9 12 2 2 4-4" />
                      <circle cx="12" cy="12" r="10" />
                    </svg>
                  </div>
                  <span>Companies that solve genuine pains</span>
                </li>
                <li className="flex items-start">
                  <div className="mr-4 mt-1 bg-primary/10 rounded-full p-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-primary"
                    >
                      <path d="m9 12 2 2 4-4" />
                      <circle cx="12" cy="12" r="10" />
                    </svg>
                  </div>
                  <span>System-level optimization of bureaucracy</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Sustainability Section */}
      <section className="py-20 px-6 bg-secondary/20">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            Sustainability Commitment
          </h2>
          <p className="text-lg mb-10">
            Our sustainability goals are continuously exceeded, driving positive
            impact across our portfolio. We're proud members of the Financial
            Health Initiative, working to create a more equitable financial
            ecosystem.
          </p>
          <div className="inline-flex items-center px-6 py-3 rounded-full bg-primary/10 text-primary font-medium">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="mr-2"
            >
              <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
              <path d="m7 11 2 2 6-6" />
            </svg>
            Member of the Financial Health Initiative
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center">
            Investment Portfolio
          </h2>

          {/* Featured Investment - Divizend */}
          <div className="mb-20 bg-card rounded-2xl p-8 shadow-sm">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-bold mb-4">Divizend</h3>
                <p className="text-lg mb-6">
                  Market leader in withholding tax reclaims for several years,
                  serving Europe's largest custodians. Divizend continuously
                  strives towards building intelligent communication channels
                  between institutions, wealth and humans.
                </p>
                <h4 className="font-semibold text-lg mb-3">
                  Latest Innovation:
                </h4>
                <p className="text-lg mb-6">
                  A "data highway between the market and the state" that solves
                  not only a long-fathomed EU directive, but also provides the
                  base for more democratic, accessible communication structures
                  between humans and institutions.
                </p>
              </div>
              <div className="bg-muted rounded-xl p-8 h-full flex flex-col justify-center">
                <div className="mb-6">
                  <div className="font-mono text-sm text-muted-foreground mb-2">
                    KEY ACHIEVEMENTS
                  </div>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <div className="mr-3 mt-1 text-primary">•</div>
                      <span>Market leader in withholding tax reclaims</span>
                    </li>
                    <li className="flex items-start">
                      <div className="mr-3 mt-1 text-primary">•</div>
                      <span>Trusted by Europe's largest custodians</span>
                    </li>
                    <li className="flex items-start">
                      <div className="mr-3 mt-1 text-primary">•</div>
                      <span>Pioneering EU directive compliance solutions</span>
                    </li>
                    <li className="flex items-start">
                      <div className="mr-3 mt-1 text-primary">•</div>
                      <span>Democratizing institutional communications</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="mt-auto pt-16 pb-8 px-6 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 pb-12 border-b border-border mb-8">
            <div>
              <h3 className="text-xl font-bold mb-6">Nalenz Equity</h3>
              <p className="text-foreground/70 max-w-md">
                Investing in visionary management and innovative companies that
                are transforming industries and creating sustainable value.
              </p>
            </div>
            <div className="flex flex-col md:items-end">
              <h3 className="text-xl font-bold mb-6">Our Foundations</h3>
              <div className="space-y-4">
                <a
                  href="https://www.henophilia.ventures/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center hover:text-primary transition-colors"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="mr-2"
                  >
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                    <path d="M15 3h6v6" />
                    <path d="m10 14 11-11" />
                  </svg>
                  Funded by Henophilia Ventures
                </a>
                <a
                  href="https://hermesloom.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center hover:text-primary transition-colors"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="mr-2"
                  >
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                    <path d="M15 3h6v6" />
                    <path d="m10 14 11-11" />
                  </svg>
                  Incubated within Hermes' Loom
                </a>
              </div>
            </div>
          </div>
          <div className="text-center text-foreground/50 text-sm font-mono">
            <p className="mb-4">
              "Life is like a zipper. Dream and reality always come together,
              but this needs to happen in the right order."
            </p>
            <div className="flex justify-center gap-6 mt-6">
              <Link
                href="/imprint"
                className="text-foreground/70 hover:text-primary transition-colors"
              >
                Impressum
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

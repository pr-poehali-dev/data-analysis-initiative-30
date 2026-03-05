import Icon from "@/components/ui/icon"

export function FooterSection() {
  return (
    <footer className="relative w-full border-t border-foreground/10 bg-background">
      <div className="mx-auto max-w-7xl px-4 py-16 md:px-12 md:py-24 lg:px-16">
        <div className="grid gap-12 md:grid-cols-[2fr_1fr_1fr_1fr]">
          <div>
            <div className="mb-6 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-foreground/10">
                <span className="font-sans text-lg font-bold text-foreground">R</span>
              </div>
              <span className="font-sans text-xl font-semibold tracking-tight text-foreground">
                Reborn<span className="text-red-500">FILMS</span>
              </span>
            </div>
            <p className="mb-6 max-w-sm text-sm leading-relaxed text-foreground/50">
              Your gateway to unlimited entertainment. Movies, anime, and TV shows — all in one place with Reborn X subscription.
            </p>
            <div className="flex gap-4">
              {[
                { icon: "Twitter", href: "#" },
                { icon: "Instagram", href: "#" },
                { icon: "Youtube", href: "#" },
                { icon: "MessageCircle", href: "#" },
              ].map((social) => (
                <a
                  key={social.icon}
                  href={social.href}
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-foreground/5 text-foreground/50 transition-all hover:bg-foreground/10 hover:text-foreground"
                >
                  <Icon name={social.icon} size={18} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="mb-4 font-sans text-sm font-semibold uppercase tracking-wider text-foreground/80">
              Content
            </h4>
            <ul className="space-y-3">
              {["Movies", "TV Shows", "Anime", "New Releases"].map((item) => (
                <li key={item}>
                  <a href="#" className="text-sm text-foreground/50 transition-colors hover:text-foreground">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-4 font-sans text-sm font-semibold uppercase tracking-wider text-foreground/80">
              Company
            </h4>
            <ul className="space-y-3">
              {["About Us", "Careers", "Press", "Blog"].map((item) => (
                <li key={item}>
                  <a href="#" className="text-sm text-foreground/50 transition-colors hover:text-foreground">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-4 font-sans text-sm font-semibold uppercase tracking-wider text-foreground/80">
              Support
            </h4>
            <ul className="space-y-3">
              {["Help Center", "Terms of Use", "Privacy Policy", "Contact Us"].map((item) => (
                <li key={item}>
                  <a href="#" className="text-sm text-foreground/50 transition-colors hover:text-foreground">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-foreground/10 pt-8 md:flex-row">
          <p className="text-xs text-foreground/30">
            © 2025 RebornFILMS. All rights reserved.
          </p>
          <p className="font-mono text-xs text-foreground/20">
            Watch what you want.
          </p>
        </div>
      </div>
    </footer>
  )
}

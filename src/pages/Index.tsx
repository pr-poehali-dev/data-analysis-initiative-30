import { CustomCursor } from "@/components/custom-cursor"
import { GrainOverlay } from "@/components/grain-overlay"
import { ContentSection } from "@/components/sections/content-section"
import { FooterSection } from "@/components/sections/footer-section"
import { useReveal } from "@/hooks/use-reveal"

const LOGO_URL = "https://cdn.poehali.dev/projects/3e670d87-2767-4641-ac25-d7d39ce9a6fb/bucket/d073ec1d-9850-475d-a6bc-18cf54e8ae6c.png"

export default function Index() {
  const { ref: heroRef, isVisible: heroVisible } = useReveal(0.1)
  const { ref: subRef, isVisible: subVisible } = useReveal(0.2)

  return (
    <main className="relative min-h-screen w-full bg-background">
      <CustomCursor />
      <GrainOverlay />

      <nav className="fixed left-0 right-0 top-0 z-40 flex items-center justify-between px-6 py-5 md:px-12">
        <div className="flex items-center gap-3">
          <img src={LOGO_URL} alt="RebornFILMS" className="h-9 w-9 object-contain" />
          <span className="font-[Poppins] text-[36px] font-light leading-none text-white">
            Reborn<span className="text-[#FF1493]">FILMS</span>
          </span>
        </div>
        <div className="hidden items-center gap-8 md:flex">
          <a href="#content" className="font-sans text-sm font-medium text-white/70 transition-colors hover:text-white">
            Content
          </a>
          <a href="#subscribe" className="font-sans text-sm font-medium text-white/70 transition-colors hover:text-white">
            About
          </a>
        </div>
      </nav>

      <section
        ref={heroRef}
        className="relative flex h-screen w-full items-center justify-center overflow-hidden"
      >
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 h-full w-full object-cover"
          poster="https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=1920&q=80"
        >
          <source
            src="https://cdn.coverr.co/videos/coverr-a-dark-cinema-hall-2933/1080p.mp4"
            type="video/mp4"
          />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/80" />

        <div className="relative z-10 flex flex-col items-center text-center px-4">
          <img
            src={LOGO_URL}
            alt="RebornFILMS"
            className={`mb-6 h-20 w-20 object-contain transition-all duration-1000 md:h-28 md:w-28 ${
              heroVisible ? "translate-y-0 opacity-100 scale-100" : "translate-y-8 opacity-0 scale-75"
            }`}
          />
          <h1
            className={`mb-4 font-[Poppins] text-6xl font-light tracking-tight text-white transition-all duration-1000 md:text-8xl lg:text-9xl ${
              heroVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
            }`}
            style={{ transitionDelay: "150ms" }}
          >
            Reborn<span className="text-[#FF1493]">FILMS</span>
          </h1>
          <p
            className={`font-sans text-xl font-light tracking-widest text-white/80 uppercase transition-all duration-1000 md:text-2xl ${
              heroVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            }`}
            style={{ transitionDelay: "300ms" }}
          >
            Watch what you want
          </p>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="h-10 w-6 rounded-full border-2 border-white/30 p-1">
            <div className="mx-auto h-2 w-1 rounded-full bg-white/60" />
          </div>
        </div>
      </section>

      <section
        ref={subRef}
        id="subscribe"
        className="relative flex min-h-[50vh] w-full items-center justify-center px-4 py-24 md:py-32"
      >
        <div className="mx-auto max-w-4xl text-center">
          <h2
            className={`mb-4 font-sans text-4xl font-bold tracking-tight text-foreground transition-all duration-700 md:text-6xl lg:text-7xl ${
              subVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
            }`}
          >
            All content in one subscription
          </h2>
          <p
            className={`font-sans text-lg text-foreground/60 transition-all duration-700 md:text-xl ${
              subVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            }`}
            style={{ transitionDelay: "200ms" }}
          >
            Reborn X is a subscription site
          </p>
        </div>
      </section>

      <ContentSection />

      <FooterSection />
    </main>
  )
}
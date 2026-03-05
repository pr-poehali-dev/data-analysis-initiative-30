const LOGO_URL = "https://cdn.poehali.dev/projects/3e670d87-2767-4641-ac25-d7d39ce9a6fb/bucket/d073ec1d-9850-475d-a6bc-18cf54e8ae6c.png"

export function FooterSection() {
  return (
    <footer className="relative w-full border-t border-foreground/10 bg-background">
      <div className="mx-auto max-w-7xl px-4 py-12 md:px-12 md:py-16 lg:px-16">
        <div className="flex flex-col items-center text-center">
          <div className="mb-8 flex items-center gap-3">
            <img src={LOGO_URL} alt="RebornFILMS" className="h-9 w-9 object-contain" />
            <span className="font-[Poppins] leading-none text-foreground font-extralight text-4xl">
              Reborn<span className="text-[#FF1493]">FILMS</span>
            </span>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center gap-2 border-t border-foreground/10 pt-8">
          <p className="text-sm text-foreground/40">
            RebornFILMS © 2026
          </p>
          <p className="text-xs text-foreground/25">
            Developed by M.project
          </p>
        </div>
      </div>
    </footer>
  )
}
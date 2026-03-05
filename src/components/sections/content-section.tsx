import { useReveal } from "@/hooks/use-reveal"

const categories = [
  {
    title: "Anime",
    subtitle: "* access is provided through the partner service",
    image: "https://cdn.poehali.dev/projects/3e670d87-2767-4641-ac25-d7d39ce9a6fb/files/93311d4b-5894-488f-9e94-f100c404c1a4.jpg",
  },
  {
    title: "Movies",
    subtitle: "Russian and foreign in the best quality.",
    image: "https://cdn.poehali.dev/projects/3e670d87-2767-4641-ac25-d7d39ce9a6fb/files/d6eb6a7c-e2be-4d58-bec3-e32a86be85cb.jpg",
  },
  {
    title: "TV Shows",
    subtitle: "We are uploading all the episodes",
    image: "https://cdn.poehali.dev/projects/3e670d87-2767-4641-ac25-d7d39ce9a6fb/files/116617fc-5459-420d-bdde-053e492460ad.jpg",
  },
]

export function ContentSection() {
  const { ref, isVisible } = useReveal(0.15)

  return (
    <section
      ref={ref}
      id="content"
      className="relative w-full px-4 py-20 md:px-12 md:py-32 lg:px-16"
    >
      <div className="mx-auto max-w-7xl">
        <div
          className={`mb-12 text-center transition-all duration-700 md:mb-16 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
          }`}
        >
          <h2 className="mb-2 font-sans text-4xl font-bold tracking-tight text-foreground md:text-5xl lg:text-6xl">
            Our Library
          </h2>
          <p className="font-sans text-base text-foreground/50 md:text-lg">
            Thousands of hours of premium content
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3 md:gap-8">
          {categories.map((cat, i) => (
            <div
              key={cat.title}
              className={`group transition-all duration-700 ${
                isVisible ? "translate-y-0 opacity-100" : "translate-y-16 opacity-0"
              }`}
              style={{ transitionDelay: `${200 + i * 150}ms` }}
            >
              <div className="relative mb-5 aspect-[3/4] overflow-hidden rounded-3xl">
                <img
                  src={cat.image}
                  alt={cat.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="mb-1 font-sans text-2xl font-bold text-white md:text-3xl">
                    {cat.title}
                  </h3>
                  <p className="font-sans text-sm leading-relaxed text-white/70">
                    {cat.subtitle}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

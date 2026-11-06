type HeroServicosProps = {
  variant?: "split" | "centered" | "banner";
  eyebrow?: string;
  title?: string;
  description?: string;
  image?: string;
  primaryLabel?: string;
  primaryHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
};

export default function HeroServicos({
  variant = "split",
  eyebrow,
  title,
  description,
  image,
  primaryLabel,
  primaryHref,
  secondaryLabel,
  secondaryHref,
}: HeroServicosProps) {
  const Actions = ({ light = false }: { light?: boolean }) => (
    <div className="mt-8 flex flex-wrap gap-3">
      {primaryLabel && primaryHref && (
        <a
          href={primaryHref}
          className={`rounded-lg px-6 py-3 text-sm font-semibold transition ${
            light
              ? "bg-white text-slate-900 hover:bg-slate-100"
              : "bg-blue-700 text-white hover:bg-blue-800"
          }`}
        >
          {primaryLabel}
        </a>
      )}

      {secondaryLabel && secondaryHref && (
        <a
          href={secondaryHref}
          className={`rounded-lg border px-6 py-3 text-sm font-semibold transition ${
            light
              ? "border-white text-white hover:bg-white/10"
              : "border-slate-300 text-slate-700 hover:bg-slate-100"
          }`}
        >
          {secondaryLabel}
        </a>
      )}
    </div>
  );

  const Copy = ({ light = false }: { light?: boolean }) => (
    <>
      {eyebrow && (
        <p
          className={`mb-4 text-xs font-bold uppercase tracking-[0.18em] ${
            light ? "text-blue-200" : "text-blue-700"
          }`}
        >
          {eyebrow}
        </p>
      )}

      {title && (
        <h1
          className={`text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl ${
            light ? "text-white" : "text-slate-900"
          }`}
        >
          {title}
        </h1>
      )}

      {description && (
        <p
          className={`mt-5 max-w-xl text-base leading-7 sm:text-lg ${
            light ? "text-white/85" : "text-slate-600"
          }`}
        >
          {description}
        </p>
      )}
    </>
  );

  // Modelo 1: texto e imagem lado a lado
  if (variant === "split") {
    return (
      <section className="overflow-hidden bg-white">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-6 py-16 sm:px-10 lg:grid-cols-2 lg:gap-16 lg:py-24">
          <div>
            <Copy />
            <Actions />
          </div>

          <div className="flex min-h-64 items-center justify-center">
            {image ? (
              <img
                src={image}
                alt=""
                className="max-h-[480px] w-full rounded-2xl object-cover"
              />
            ) : (
              <div
                aria-hidden="true"
                className="flex min-h-64 w-full items-center justify-center rounded-2xl border-2 border-dashed border-slate-300 bg-slate-50 text-sm text-slate-400"
              >
                Espaço reservado para imagem
              </div>
            )}
          </div>
        </div>
      </section>
    );
  }

  // Modelo 2: conteúdo centralizado
  if (variant === "centered") {
    return (
      <section className="bg-slate-50 px-6 py-20 text-center sm:py-28">
        <div className="mx-auto max-w-4xl">
          <div className="flex flex-col items-center">
            <Copy />
            <Actions />
          </div>

          {image && (
            <img
              src={image}
              alt=""
              className="mx-auto mt-12 max-h-[360px] w-full rounded-2xl object-cover"
            />
          )}
        </div>
      </section>
    );
  }

  // Modelo 3: banner com imagem de fundo
  return (
    <section
      className="relative isolate flex min-h-[500px] items-center overflow-hidden bg-slate-900 bg-cover bg-center px-6 py-20 sm:min-h-[600px] sm:px-10 lg:min-h-[680px]"
      style={image ? { backgroundImage: `url("${image}")` } : undefined}
    >
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-slate-950/90 via-slate-950/65 to-slate-950/20" />

      <div className="mx-auto w-full max-w-7xl">
        <div className="max-w-2xl">
          <Copy light />
          <Actions light />
        </div>
      </div>
    </section>
  );
}

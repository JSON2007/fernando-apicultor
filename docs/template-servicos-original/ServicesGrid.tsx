type Service = {
  title: string;
  description?: string;
  icon?: string;
  image?: string;
  href?: string;
  linkLabel?: string;
};

type ServicesGridProps = {
  variant?: "cards" | "list" | "visual";
  title?: string;
  description?: string;
  services: Service[];
};

export default function ServicesGrid({
  variant = "cards",
  title,
  description,
  services,
}: ServicesGridProps) {
  return (
    <section className="bg-white px-6 py-16 sm:px-10 lg:px-12">
      <div className="mx-auto max-w-7xl">
        {(title || description) && (
          <header className="mb-10 max-w-3xl">
            {title && (
              <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                {title}
              </h2>
            )}
            {description && (
              <p className="mt-4 leading-7 text-slate-600">{description}</p>
            )}
          </header>
        )}

        {/* Modelo 1: cartões com ícones */}
        {variant === "cards" && (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <article
                key={`${service.title}-${index}`}
                className="rounded-2xl border border-slate-200 bg-white p-6 transition duration-200 hover:-translate-y-1 hover:shadow-lg"
              >
                {service.icon && (
                  <div
                    aria-hidden="true"
                    className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-2xl text-blue-700"
                  >
                    {service.icon}
                  </div>
                )}

                <h3 className="text-lg font-semibold text-slate-900">
                  {service.title}
                </h3>

                {service.description && (
                  <p className="mt-3 text-sm leading-6 text-slate-600">
                    {service.description}
                  </p>
                )}

                {service.href && service.linkLabel && (
                  <a
                    href={service.href}
                    className="mt-5 inline-flex text-sm font-semibold text-blue-700 hover:text-blue-900"
                  >
                    {service.linkLabel} →
                  </a>
                )}
              </article>
            ))}
          </div>
        )}

        {/* Modelo 2: lista de serviços */}
        {variant === "list" && (
          <div className="divide-y divide-slate-200 border-y border-slate-200">
            {services.map((service, index) => (
              <article
                key={`${service.title}-${index}`}
                className="flex flex-col gap-4 py-6 sm:flex-row sm:items-start"
              >
                {service.icon && (
                  <div
                    aria-hidden="true"
                    className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-blue-50 text-xl text-blue-700"
                  >
                    {service.icon}
                  </div>
                )}

                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-slate-900">
                    {service.title}
                  </h3>

                  {service.description && (
                    <p className="mt-2 text-sm leading-6 text-slate-600">
                      {service.description}
                    </p>
                  )}
                </div>

                {service.href && service.linkLabel && (
                  <a
                    href={service.href}
                    className="shrink-0 text-sm font-semibold text-blue-700 hover:underline"
                  >
                    {service.linkLabel} →
                  </a>
                )}
              </article>
            ))}
          </div>
        )}

        {/* Modelo 3: blocos com imagens alternadas */}
        {variant === "visual" && (
          <div className="space-y-12">
            {services.map((service, index) => (
              <article
                key={`${service.title}-${index}`}
                className="grid items-center gap-7 md:grid-cols-2 md:gap-12"
              >
                <div className={index % 2 === 1 ? "md:order-2" : ""}>
                  {service.image ? (
                    <img
                      src={service.image}
                      alt=""
                      loading="lazy"
                      className="h-64 w-full rounded-2xl object-cover sm:h-80"
                    />
                  ) : (
                    <div
                      aria-hidden="true"
                      className="flex h-64 items-center justify-center rounded-2xl border-2 border-dashed border-slate-200 bg-slate-50 text-sm text-slate-400 sm:h-80"
                    >
                      Espaço reservado para imagem
                    </div>
                  )}
                </div>

                <div className={index % 2 === 1 ? "md:order-1" : ""}>
                  <h3 className="text-2xl font-bold text-slate-900 sm:text-3xl">
                    {service.title}
                  </h3>

                  {service.description && (
                    <p className="mt-4 leading-7 text-slate-600">
                      {service.description}
                    </p>
                  )}

                  {service.href && service.linkLabel && (
                    <a
                      href={service.href}
                      className="mt-6 inline-flex rounded-lg bg-blue-700 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-800"
                    >
                      {service.linkLabel}
                    </a>
                  )}
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

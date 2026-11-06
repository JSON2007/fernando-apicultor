type ProcessStep = {
  title: string;
  description?: string;
  icon?: string;
};

type ProcessStepsProps = {
  variant?: "horizontal" | "timeline" | "cards";
  title?: string;
  description?: string;
  steps: ProcessStep[];
};

export default function ProcessSteps({
  variant = "horizontal",
  title,
  description,
  steps,
}: ProcessStepsProps) {
  return (
    <section className="bg-slate-50 px-6 py-16 sm:px-10 lg:px-12">
      <div className="mx-auto max-w-7xl">
        {(title || description) && (
          <header className="mb-12 max-w-3xl">
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

        {/* Modelo 1: etapas horizontais */}
        {variant === "horizontal" && (
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((step, index) => (
              <article key={`${step.title}-${index}`} className="relative">
                <div className="mb-5 flex items-center">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-blue-700 text-lg font-bold text-white">
                    {index + 1}
                  </span>

                  {index < steps.length - 1 && (
                    <div
                      aria-hidden="true"
                      className="ml-4 hidden h-px flex-1 bg-blue-200 lg:block"
                    />
                  )}
                </div>

                {step.icon && (
                  <p className="mb-3 text-2xl" aria-hidden="true">
                    {step.icon}
                  </p>
                )}

                <h3 className="text-lg font-semibold text-slate-900">
                  {step.title}
                </h3>

                {step.description && (
                  <p className="mt-3 text-sm leading-6 text-slate-600">
                    {step.description}
                  </p>
                )}
              </article>
            ))}
          </div>
        )}

        {/* Modelo 2: linha do tempo vertical */}
        {variant === "timeline" && (
          <div className="mx-auto max-w-3xl">
            {steps.map((step, index) => (
              <article
                key={`${step.title}-${index}`}
                className="relative flex gap-5 pb-10 last:pb-0"
              >
                <div className="flex flex-col items-center">
                  <span className="z-10 flex h-11 w-11 shrink-0 items-center justify-center rounded-full border-2 border-blue-700 bg-white text-sm font-bold text-blue-700">
                    {index + 1}
                  </span>

                  {index < steps.length - 1 && (
                    <div
                      aria-hidden="true"
                      className="absolute bottom-0 top-11 w-px bg-blue-200"
                    />
                  )}
                </div>

                <div className="flex-1 rounded-xl border border-slate-200 bg-white p-5 sm:p-6">
                  {step.icon && (
                    <p className="mb-2 text-xl" aria-hidden="true">
                      {step.icon}
                    </p>
                  )}

                  <h3 className="text-lg font-semibold text-slate-900">
                    {step.title}
                  </h3>

                  {step.description && (
                    <p className="mt-2 text-sm leading-6 text-slate-600">
                      {step.description}
                    </p>
                  )}
                </div>
              </article>
            ))}
          </div>
        )}

        {/* Modelo 3: cartões numerados */}
        {variant === "cards" && (
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {steps.map((step, index) => (
              <article
                key={`${step.title}-${index}`}
                className="rounded-2xl border border-slate-200 bg-white p-6 transition-shadow hover:shadow-md"
              >
                <div className="mb-5 flex items-center justify-between">
                  <span className="text-4xl font-bold text-blue-100">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  {step.icon && (
                    <span className="text-2xl" aria-hidden="true">
                      {step.icon}
                    </span>
                  )}
                </div>

                <h3 className="text-lg font-semibold text-slate-900">
                  {step.title}
                </h3>

                {step.description && (
                  <p className="mt-3 text-sm leading-6 text-slate-600">
                    {step.description}
                  </p>
                )}
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

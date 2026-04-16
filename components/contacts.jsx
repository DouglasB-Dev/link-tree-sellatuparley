import Link from "next/link";
import { Icons } from "@/components/icons";

const defaultContactIcon = "whatsapp";
const defaultIconWrapperClassName =
  "bg-green-100 text-green-600 group-hover:bg-green-500 group-hover:text-white";
const defaultTrailingIconClassName = "text-slate-400 group-hover:text-blue-600";

export function Contacts({ items }) {
  return (
    <section className="mt-10 space-y-4 animate-in slide-in-from-bottom-4 duration-700 [animation-delay:200ms]">
      <div className="mb-4 flex items-center justify-center gap-2">
        <div className="h-px w-10 bg-white/30" />
        <h2 className="text-xs font-bold uppercase tracking-[0.3em] text-white/70">
          Taquillas Disponibles
        </h2>
        <div className="h-px w-10 bg-white/30" />
      </div>

      <div className="grid gap-3">
        {items.map(
          ({
            eyebrow,
            label,
            href,
            icon = defaultContactIcon,
            iconWrapperClassName,
            trailingIcon,
            trailingIconClassName,
          }) => (
            <Link
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex items-center overflow-hidden rounded-xl bg-white p-4 text-slate-900 shadow-xl shadow-slate-950/15 transition hover:-translate-y-0.5"
            >
              <span className="absolute inset-y-0 left-0 w-1.5 bg-emerald-400" />
              <div
                className={`mr-4 ml-2 flex h-10 w-10 items-center justify-center rounded-full transition-colors ${iconWrapperClassName ?? defaultIconWrapperClassName}`}
              >
                <Icons name={icon} className="h-5 w-5" />
              </div>

              <div>
                <p className="mb-1 text-xs font-bold uppercase leading-none text-slate-400">
                  {eyebrow}
                </p>
                <p className="text-lg font-black text-blue-900">{label}</p>
              </div>

              <Icons
                name={trailingIcon}
                className={`ml-auto h-5 w-5 ${trailingIconClassName ?? defaultTrailingIconClassName}`}
              />
            </Link>
          ),
        )}
      </div>
    </section>
  );
}

import Link from "next/link";
import { Icons } from "@/components/icons";

export function SocialNetworks({ items }) {
  return (
    <section className="mt-10 grid grid-cols-2 gap-4 animate-in slide-in-from-bottom-4 duration-700 [animation-delay:120ms]">
      {items.map(({ label, href, icon, iconClassName }) => (
        <Link
          key={label}
          href={href}
          className="group flex flex-col items-center justify-center rounded-2xl border border-white/15 bg-white/10 p-5 text-sm font-bold shadow-lg shadow-slate-950/10 backdrop-blur-sm transition hover:bg-white/20"
        >
          <div
            className={`mb-2 flex size-12 items-center justify-center rounded-full text-white transition-transform group-hover:scale-110 ${iconClassName}`}
          >
            <Icons name={icon} className="text-3xl" />
          </div>
          <span className="text-lg">{label}</span>
        </Link>
      ))}
    </section>
  );
}

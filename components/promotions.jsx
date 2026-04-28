"use client";

import Link from "next/link";
import { Icons } from "@/components/icons";

export function Promotions({ items }) {
  const handlePromoPointerMove = (event) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    event.currentTarget.style.setProperty("--glow-x", `${x}px`);
    event.currentTarget.style.setProperty("--glow-y", `${y}px`);
  };

  return (
    <section className="mt-10 animate-in slide-in-from-bottom-4 duration-700 [animation-delay:280ms]">
      <h2 className="mb-6 text-center text-xs font-bold uppercase tracking-[0.3em] text-white/70 italic">
        Promos Exclusivas
      </h2>

      <div className="space-y-6">
        {items.map(
          (
            {
              badge,
              badgeClassName,
              title,
              description,
              cta,
              href,
              accent,
              accentIcon,
              dashed,
            },
            index,
          ) => (
            <article
              key={title}
              onMouseMove={handlePromoPointerMove}
              className={[
                "group relative overflow-hidden rounded-3xl p-6 shadow-2xl shadow-slate-950/15 transition-[transform,border-color] duration-300 hover:border-red-400/70",
                dashed
                  ? "border-2 border-dashed border-white/20 bg-white/8"
                  : "border border-white/15 bg-white/10 backdrop-blur-sm",
              ].join(" ")}
              style={{
                "--glow-x": "50%",
                "--glow-y": "50%",
              }}
            >
              <div
                className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                style={{
                  background:
                    "radial-gradient(220px circle at var(--glow-x) var(--glow-y), rgba(231, 24, 11,0.05), transparent 100%)",
                }}
              />

              <div className="relative z-10">
                {(badge || accent || accentIcon) && (
                  <div className="mb-4 flex items-center justify-between">
                    <span
                      className={[
                        "rounded px-2 py-1 text-[10px] font-black italic",
                        badgeClassName ?? "bg-white/10 text-white",
                      ].join(" ")}
                    >
                      {badge ?? `Promo ${index + 1}`}
                    </span>

                    {accent ? (
                      <span className="text-2xl font-black">{accent}</span>
                    ) : null}

                    {accentIcon ? (
                      <Icons
                        name={accentIcon}
                        className="h-5 w-5 text-orange-400"
                      />
                    ) : null}
                  </div>
                )}

                <h3 className="mb-1 text-xl font-black leading-tight">
                  {title}
                </h3>
                <p className="mb-5 text-sm text-white/70">{description}</p>
                <Link
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/button relative block overflow-hidden rounded-xl bg-white px-4 py-3 text-center text-lg font-bold text-blue-900 shadow-xl transition-all duration-300 hover:-translate-y-1 hover:bg-blue-50 hover:shadow-2xl hover:shadow-white/15"
                >
                  <span className="pointer-events-none absolute inset-y-0 left-[-30%] w-1/3 -skew-x-12 bg-linear-to-r from-transparent via-white/80 to-transparent opacity-0 transition-all duration-500 group-hover/button:left-[105%] group-hover/button:opacity-100" />
                  <span className="relative z-10">{cta}</span>
                </Link>
              </div>
            </article>
          ),
        )}
      </div>
    </section>
  );
}

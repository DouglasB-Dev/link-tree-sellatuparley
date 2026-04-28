import Link from "next/link";
import { Icons } from "@/components/icons";

export function Footer({ className }) {
  const currentYear = new Date().getFullYear();
  return (
    <footer
      className={`mt-16 text-center animate-in slide-in-from-bottom-4 duration-700 [animation-delay:360ms] ${className}`}
    >
      <div className="mb-6 flex justify-center text-white/60">
        <Link
          href="https://sellatuparley.com/pay_clients/screen"
          target="_blank"
          rel="noopener noreferrer"
          className="group relative inline-flex w-full max-w-md items-center justify-between gap-3 rounded-2xl bg-white px-5 py-3 text-left text-black shadow-[0_12px_28px_rgba(37,99,235,0.35)] ring-1 ring-blue-200/80 transition duration-300 hover:scale-[1.02] hover:shadow-[0_16px_34px_rgba(37,99,235,0.5)]"
          aria-label="Recargar saldo en sellatuparley"
        >
          <span className="inline-flex items-center gap-3">
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-blue-500 text-white shadow-md shadow-blue-400/40 transition group-hover:bg-blue-600">
              <Icons name="wallet" className="h-4 w-4" />
            </span>
            <span className="flex flex-col leading-tight">
              <span className="text-base font-black uppercase tracking-wide text-blue-700">
                Recarga tu saldo
              </span>
              <span className="text-[11px] font-semibold uppercase tracking-wide text-slate-600">
                Haz clic para pagar en la web
              </span>
            </span>
          </span>
          <Icons
            name="external-link"
            className="h-5 w-5 text-blue-600 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          />
        </Link>
      </div>
      <p className="text-[12px] uppercase leading-relaxed tracking-tight text-white/50 mt-10">
        © {currentYear} SELLATUPARLEY.COM | JUEGA CON RESPONSABILIDAD
        <br />
        PROHIBIDO PARA MENORES DE 18 AÑOS
      </p>
    </footer>
  );
}

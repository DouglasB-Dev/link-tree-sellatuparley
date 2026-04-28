import { Icons } from "@/components/icons";

export function Footer({ paymentIcons }) {
  return (
    <footer className="mt-16 text-center animate-in slide-in-from-bottom-4 duration-700 [animation-delay:360ms]">
      <div className="mb-6 flex justify-center gap-6 text-white/60">
        {paymentIcons.map(({ name, className }) => (
          <Icons key={name} name={name} className={className} />
        ))}
      </div>
      <p className="text-[12px] uppercase leading-relaxed tracking-tight text-white/50">
        © 2026 SELLATUPARLEY.COM | JUEGA CON RESPONSABILIDAD
        <br />
        PROHIBIDO PARA MENORES DE 18 AÑOS
      </p>
    </footer>
  );
}
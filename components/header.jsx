export function Header() {
  return (
    <header className="animate-in slide-in-from-bottom-4 text-center duration-700">
      <div className="relative inline-block -rotate-1 rounded-2xl bg-white p-3 shadow-2xl shadow-slate-950/30 ring-1 ring-white/60 before:absolute before:-inset-2 before:-z-10 before:rounded-[1.4rem] before:bg-white/30 before:blur-xl">
        <h1 className="text-4xl font-black italic text-blue-700 drop-shadow-[0_0_10px_rgba(59,130,246,0.22)]">
          SELLA<span className="text-red-600">TU</span>PARLEY
        </h1>
      </div>
      <div className="mt-4">
        <span className="rounded-full bg-red-600 px-3 py-1 text-xs font-extrabold uppercase tracking-widest text-white">
          Oficial
        </span>
      </div>
      <h2 className="mt-4 text-2xl font-black italic tracking-tight">
        ¡LA EMOCIÓN DE GANAR!
      </h2>
    </header>
  );
}
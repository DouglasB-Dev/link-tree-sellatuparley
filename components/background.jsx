export function Background() {
  return (
    <div className="pointer-events-none absolute inset-0">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(96,165,250,0.34),transparent_24%),radial-gradient(circle_at_82%_16%,rgba(248,113,113,0.24),transparent_20%),radial-gradient(circle_at_50%_46%,rgba(29,78,216,0.18),transparent_34%),linear-gradient(180deg,#12306b_0%,#0c1834_38%,#070b17_72%,#04060d_100%)]" />
      <div className="absolute -left-24 top-10 h-72 w-72 rounded-full bg-sky-400/18 blur-[120px]" />
      <div className="absolute -right-20 top-0 h-80 w-80 rounded-full bg-rose-500/18 blur-[140px]" />
      <div className="absolute left-1/2 top-1/3 h-96 w-96 -translate-x-1/2 rounded-full bg-blue-700/16 blur-[160px]" />
      <div className="absolute -right-8 -bottom-24 h-72 w-72 rounded-full bg-cyan-300/10 blur-[140px]" />
    </div>
  );
}
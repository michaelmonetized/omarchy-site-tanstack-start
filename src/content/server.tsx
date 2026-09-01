export function ServerContent() {
  return (
    <div className="mx-auto flex w-full max-w-3xl flex-col items-center px-4 py-16">
      <main className="main main--error flex flex-col items-center justify-center gap-6">
        <div className="server max-w-3xl flex flex-col items-center gap-4">
          <a href="/" aria-label="Omarchy">
            <img
              src="/assets/images/omarchy-server.webp"
              width={1536}
              height={1024}
              alt="Omarchy Server 4.0"
              className="rounded-xl border border-[var(--border-color,rgba(65,72,104,0.8))] shadow-2xl max-w-full h-auto"
            />
          </a>
          <p className="server__coming text-lg sm:text-xl font-bold text-[var(--color-terminal-cyan,#7dcfff)] tracking-widest uppercase">
            Coming 2026
          </p>
        </div>
      </main>
    </div>
  );
}
export default ServerContent;

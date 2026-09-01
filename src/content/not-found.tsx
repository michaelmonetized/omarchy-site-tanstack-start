import { AsciiLogo } from "./ascii-logo";

export function NotFoundContent() {
  return (
    <div className="w-full min-h-screen bg-[var(--color-background-night,#1a1b26)] text-[var(--color-terminal-white,#c0caf5)] font-mono text-sm leading-relaxed p-4 flex flex-col items-center justify-center">
      <main className="main main--error flex flex-col items-center justify-center gap-6">
        <AsciiLogo />
        <header className="header text-center my-6">
          <h1 className="text-lg sm:text-xl font-bold text-[var(--color-terminal-cyan,#7dcfff)]">
            The page you’re looking for could not be found,{" "}
            <a href="/" className="text-[var(--color-terminal-blue,#7aa2f7)] underline">
              return to home
            </a>
            .
          </h1>
        </header>
      </main>
    </div>
  );
}
export default NotFoundContent;

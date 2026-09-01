import { useEffect } from "react";
import { AsciiLogo } from "./ascii-logo";

export function DiscordContent() {
  useEffect(() => {
    window.location.href = "https://discord.gg/tXFUdasqhY";
  }, []);

  return (
    <div className="w-full min-h-screen bg-[var(--color-background-night,#1a1b26)] text-[var(--color-terminal-white,#c0caf5)] font-mono text-sm leading-relaxed p-4 sm:p-6 md:p-8 flex flex-col items-center justify-center">
      <AsciiLogo />
      <header className="header text-center my-6">
        <h1 className="text-lg sm:text-xl md:text-2xl font-bold text-[var(--color-terminal-cyan,#7dcfff)]">
          If you’re not redirected to Discord automatically,{" "}
          <a
            href="https://discord.gg/tXFUdasqhY"
            className="text-[var(--color-terminal-blue,#7aa2f7)] underline"
          >
            click here
          </a>
          .
        </h1>
      </header>
    </div>
  );
}
export default DiscordContent;

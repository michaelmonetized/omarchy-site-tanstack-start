import { useEffect } from "react";
import { DISCORD_URL } from "@/lib/site";

export function DiscordContent() {
  useEffect(() => {
    window.location.href = DISCORD_URL;
  }, []);

  return (
    <div className="mx-auto flex min-h-[50vh] w-full max-w-3xl items-center justify-center px-4 py-16 text-center">
      <h1 className="font-heading text-sm font-extrabold text-foreground">
        If you’re not redirected to Discord automatically,{" "}
        <a href={DISCORD_URL} className="text-terminal-cyan underline">
          click here
        </a>
        .
      </h1>
    </div>
  );
}
export default DiscordContent;

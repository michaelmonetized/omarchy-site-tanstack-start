export function PotatoContent() {
  return (
    <div className="mx-auto w-full max-w-4xl px-4 py-10 sm:px-8">
      <h1 className="font-heading mb-8 text-xl font-extrabold text-foreground">
        Runs great on ancient hardware
      </h1>

      <main>
        <div className="video relative aspect-video w-full rounded-xl overflow-hidden border border-[var(--border-color,rgba(65,72,104,0.8))] bg-black shadow-lg">
          <iframe
            title="Omarchy running on 2011 X220 2GB RAM (with room to spare)"
            src="https://www.youtube-nocookie.com/embed/jgSjG0IYw4o"
            className="w-full h-full border-0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />
        </div>
      </main>
    </div>
  );
}
export default PotatoContent;

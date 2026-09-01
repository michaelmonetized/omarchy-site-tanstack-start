import { Link } from "@tanstack/react-router";

export function NotFoundContent() {
  return (
    <div className="mx-auto flex min-h-[50vh] w-full max-w-3xl items-center justify-center px-4 py-16 text-center">
      <h1 className="font-heading text-sm font-extrabold text-foreground">
        The page you’re looking for could not be found,{" "}
        <Link to="/" className="text-terminal-cyan underline">
          return to home
        </Link>
        .
      </h1>
    </div>
  );
}
export default NotFoundContent;

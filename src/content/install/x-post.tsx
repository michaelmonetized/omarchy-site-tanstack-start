import type { InstallPost } from "./testimonials";
import { cn } from "@/lib/utils";

const PLATFORM: Record<InstallPost["platform"], string> = {
  pc: "PC",
  intel: "Intel Mac",
  arm: "Apple Silicon",
};

export function XPost({ post }: { post: InstallPost }) {
  return (
    <a
      href={post.href}
      target="_blank"
      rel="noopener noreferrer"
      className="block border border-border bg-card p-4 text-foreground no-underline hover:border-terminal-cyan"
    >
      <div className="flex items-start gap-3">
        <img
          src={post.avatar}
          alt=""
          width={40}
          height={40}
          className="size-10 shrink-0 object-cover"
        />
        <div className="min-w-0 flex-1">
          <p className="m-0 flex flex-wrap items-baseline gap-x-2 text-xs">
            <span className="font-bold text-foreground">{post.name}</span>
            <span className="text-muted-foreground">@{post.handle}</span>
            <span className="text-muted-foreground">· {post.date}</span>
          </p>
          <p className="mt-2 mb-0 text-sm text-pretty text-foreground">{post.text}</p>
          <p className="mt-3 mb-0 text-[0.7rem] font-bold tracking-wide text-green uppercase">
            {PLATFORM[post.platform]}
          </p>
        </div>
      </div>
    </a>
  );
}

export function XPostGrid({ posts, className }: { posts: InstallPost[]; className?: string }) {
  return (
    <div className={cn("grid gap-4 sm:grid-cols-2", className)}>
      {posts.map((post) => (
        <XPost key={post.id} post={post} />
      ))}
    </div>
  );
}

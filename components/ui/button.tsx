import Link from "next/link";
import { cn } from "@/lib/cn";

type ButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
};

const variants = {
  primary:
    "bg-foreground text-white shadow-[0_16px_40px_rgba(17,24,39,0.16)] hover:-translate-y-0.5 hover:bg-[#0b1323]",
  secondary:
    "border border-border bg-surface-strong text-foreground hover:-translate-y-0.5 hover:border-accent/30 hover:text-accent",
  ghost:
    "text-foreground/82 underline decoration-border underline-offset-8 hover:text-accent hover:decoration-accent/40",
};

export function Button({
  href,
  children,
  variant = "primary",
  className,
}: ButtonProps) {
  return (
    <Link
      href={href}
      className={cn(
        "inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-medium tracking-[0.01em]",
        variants[variant],
        className,
      )}
    >
      {children}
    </Link>
  );
}

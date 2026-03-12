import { cn } from "@/lib/cn";

type ContainerProps = {
  children: React.ReactNode;
  className?: string;
  as?: "div" | "section";
};

export function Container({
  children,
  className,
  as: Component = "div",
}: ContainerProps) {
  return (
    <Component
      className={cn("site-container relative mx-auto w-full max-w-7xl", className)}
    >
      {children}
    </Component>
  );
}

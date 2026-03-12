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
      className={cn("relative mx-auto w-full max-w-7xl px-6 sm:px-8 lg:px-12", className)}
    >
      {children}
    </Component>
  );
}

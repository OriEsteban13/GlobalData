import * as React from "react";
import { cn } from "@/lib/utils";

const Card = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        "rounded-xl border border-white/5 bg-bg-secondary p-6 transition-all",
        className
      )}
      {...props}
    />
  )
);
Card.displayName = "Card";

export { Card };

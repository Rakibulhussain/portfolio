import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const neonButtonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        primary: "bg-gradient-primary text-primary-foreground hover:shadow-neon transform hover:scale-105 border border-primary/20",
        secondary: "bg-gradient-secondary text-secondary-foreground hover:shadow-purple transform hover:scale-105 border border-secondary/20",
        accent: "bg-gradient-accent text-accent-foreground hover:shadow-neon transform hover:scale-105 border border-accent/20",
        ghost: "glass border-glass-border/50 text-foreground hover:bg-glass-bg/40 hover:shadow-glass",
        outline: "border border-primary/50 bg-transparent text-primary hover:bg-primary/10 hover:shadow-neon",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  }
)

export interface NeonButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof neonButtonVariants> {
  asChild?: boolean
}

const NeonButton = React.forwardRef<HTMLButtonElement, NeonButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(neonButtonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
NeonButton.displayName = "NeonButton"

export { NeonButton, neonButtonVariants }
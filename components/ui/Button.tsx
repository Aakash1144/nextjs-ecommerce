import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-lg font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-900 disabled:pointer-events-none disabled:opacity-50 active:scale-[0.98]",
  {
    variants: {
      variant: {
        primary:
          "bg-slate-900 text-white hover:bg-slate-800",
        secondary:
          "bg-slate-100 text-slate-900 hover:bg-slate-200",
        outline:
          "border border-slate-300 bg-white hover:bg-slate-100",
        ghost:
          "hover:bg-slate-100",
        danger:
          "bg-red-600 text-white hover:bg-red-700",
      },

      size: {
        sm: "h-9 px-3 text-sm",
        md: "h-10 px-5 text-sm",
        lg: "h-12 px-6 text-base",
      },

      fullWidth: {
        true: "w-full",
      },
    },

    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  loading?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant,
      size,
      fullWidth,
      loading = false,
      children,
      disabled,
      ...props
    },
    ref
  ) => {
    return (
      <button
        ref={ref}
        disabled={disabled || loading}
        className={cn(
          buttonVariants({
            variant,
            size,
            fullWidth,
          }),
          className
        )}
        {...props}
      >
        {loading && (
          <svg
            className="mr-2 h-4 w-4 animate-spin"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-20"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            />
            <path
              className="opacity-90"
              fill="currentColor"
              d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
            />
          </svg>
        )}

        {children}
      </button>
    );
  }
);

Button.displayName = "Button";

export { Button, buttonVariants };
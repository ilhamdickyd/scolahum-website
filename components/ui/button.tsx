"use client";
import React, { forwardRef, ButtonHTMLAttributes } from "react";
import Link from "next/link";
import { cva, type VariantProps } from "class-variance-authority";
import { Loader2 } from "lucide-react";
const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-ted-red disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-ted-red text-white hover:bg-red-700",
        outline: "border border-ted-red text-white hover:bg-ted-red",
        ghost:
          "bg-transparent hover:bg-ted-red/10 text-white hover:text-ted-red",
        secondary: "bg-dark-accent text-white hover:bg-dark-accent/70",
        destructive: "bg-red-800 text-white hover:bg-red-900",
        link: "text-ted-red underline-offset-4 hover:underline bg-transparent",
      },
      size: {
        default: "h-10 px-5 py-2",
        sm: "h-8 px-3 py-1 text-xs",
        lg: "h-12 px-8 py-3 text-base",
        icon: "h-10 w-10 p-0",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);
export interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  href?: string;
  isLoading?: boolean;
  loadingText?: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  fullWidth?: boolean;
}
const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant,
      size,
      href,
      isLoading,
      loadingText,
      children,
      leftIcon,
      rightIcon,
      fullWidth,
      disabled,
      ...props
    },
    ref
  ) => {
    const content = isLoading ? (
      <>
        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
        {loadingText || children}
      </>
    ) : (
      <>
        {leftIcon && <span className="mr-2">{leftIcon}</span>}
        {children}
        {rightIcon && <span className="ml-2">{rightIcon}</span>}
      </>
    );
    const classNames = `${buttonVariants({ variant, size, className })} ${
      fullWidth ? "w-full" : ""
    }`;
    if (href) {
      return (
        <Link
          href={href}
          className={classNames}
          aria-disabled={disabled || isLoading}
        >
          {content}
        </Link>
      );
    }
    return (
      <button
        className={classNames}
        ref={ref}
        disabled={disabled || isLoading}
        {...props}
      >
        {content}
      </button>
    );
  }
);
Button.displayName = "Button";
export { Button, buttonVariants };

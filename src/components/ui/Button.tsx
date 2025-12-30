import Link from "next/link";
import type {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  PropsWithChildren,
} from "react";

type CommonProps = PropsWithChildren<{
  variant?: "primary" | "ghost";
  className?: string;
}>;

type ButtonVariantProps = CommonProps &
  ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined };

type LinkVariantProps = CommonProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & { href: string };

type ButtonProps = ButtonVariantProps | LinkVariantProps;

const baseStyles =
  "inline-flex items-center justify-center rounded-full px-4 py-2 text-sm font-medium transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2";

const variants: Record<NonNullable<ButtonProps["variant"]>, string> = {
  primary:
    "bg-black text-white hover:bg-zinc-800 focus-visible:outline-black dark:bg-white dark:text-black dark:hover:bg-zinc-200 dark:focus-visible:outline-white",
  ghost:
    "border border-zinc-200 bg-white text-zinc-900 hover:bg-zinc-50 focus-visible:outline-zinc-900 dark:border-zinc-800 dark:bg-zinc-900 dark:text-white dark:hover:bg-zinc-800 dark:focus-visible:outline-white",
};

export function Button({
  children,
  className,
  variant = "primary",
  ...props
}: ButtonProps) {
  const computedClassName = [
    baseStyles,
    variants[variant],
    className,
  ]
    .filter(Boolean)
    .join(" ");

  if ("href" in props && props.href) {
    const { href, ...linkProps } = props;
    return (
      <Link href={href} className={computedClassName} {...linkProps}>
        {children}
      </Link>
    );
  }

  const { type = "button", ...buttonProps } = props as ButtonHTMLAttributes<HTMLButtonElement>;
  return (
    <button
      className={computedClassName}
      type={type as "button" | "submit" | "reset" | undefined}
      {...buttonProps}
    >
      {children}
    </button>
  );
}


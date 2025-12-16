import { forwardRef } from "react";
import type { InputHTMLAttributes } from "react";

type CustomInputProps = InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
  hint?: string;
};

export const CustomInput = forwardRef<HTMLInputElement, CustomInputProps>(
  ({ label, hint, className, id, ...props }, ref) => {
    const inputId = id || props.name || "input";
    const mergedClassName = [
      "w-full rounded-md border border-zinc-200 bg-white px-3 py-2 text-sm text-zinc-900 shadow-sm transition focus:border-black focus:outline-none focus:ring-2 focus:ring-black/20 dark:border-zinc-700 dark:bg-zinc-900 dark:text-white dark:focus:border-white dark:focus:ring-white/30",
      className,
    ]
      .filter(Boolean)
      .join(" ");

    return (
      <label className="flex w-full flex-col gap-2 text-sm font-medium text-zinc-800 dark:text-zinc-100">
        {label && <span>{label}</span>}
        <input ref={ref} id={inputId} className={mergedClassName} {...props} />
        {hint && (
          <span className="text-xs font-normal text-zinc-500 dark:text-zinc-400">
            {hint}
          </span>
        )}
      </label>
    );
  }
);

CustomInput.displayName = "CustomInput";


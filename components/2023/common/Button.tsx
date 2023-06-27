import { clf, clsx } from "class-flex";
import React from "react";

interface ButtonProps extends React.HtmlHTMLAttributes<HTMLButtonElement> {
    children?: React.ReactNode;
    variant?: "outlined" | "contained";
    className?: string;
    withArrow?: boolean;
    size?: "sm" | "md";
}

const btn = clf("font-medium font-rubik text-base uppercase rounded-full flex items-center justify-center gap-x-4 whitespace-nowrap truncate text-ellipsis transition-all duration-100 ease-in-out !border-b-4 active:!border-b border-black", {
    variants: {
        variant: {
            outlined: "border border-primary-text-dark text-primary-dark bg-white",
            contained: "bg-primary-purple text-white hover:bg-primary-dark"
        },
        size: {
            sm: "px-6 py-3 ",
            md: "px-8 py-4 "
        }
    }
});

const Button = ({ children, variant = "contained", className, withArrow, size = "md", ...props }: ButtonProps) => {
    return (
        <button className={clsx(btn({ variant, size }), className)} {...props}>
            {children} {withArrow ? <ArrowIcon className="scale-75" /> : null}
        </button>
    );
};

export default Button;

const ArrowIcon = ({ className }: { className?: string }) => (
    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
        <path d="M1 14L14 1M14 1V13.48M14 1H1.52" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);

import type { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";

interface IconButtonProps extends ComponentProps<"button"> {}

export function IconButton({ className, ...props }: IconButtonProps) {
    return (
        <button
            className={twMerge(
                "bg-gray-500 w-full p-1.5 rounded-md transition-colors duration-300 cursor-pointer hover:bg-blue",
                className,
            )}
            {...props}
        />
    );
}

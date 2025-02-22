import type { ComponentProps } from "react";

interface IconButtonProps extends ComponentProps<"button"> {}

export function IconButton(props: IconButtonProps) {
    return (
        <button
            className="bg-gray-500 w-full p-1.5 rounded-md transition-colors duration-300 cursor-pointer hover:bg-blue"
            {...props}
        />
    );
}

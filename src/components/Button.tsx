import { ComponentProps } from "react";

interface ButtonProps extends ComponentProps<"button"> {};

export function Button(props: ButtonProps) {
    return (
        <button
            className="bg-gray-500 w-full h-12 flex justify-between items-center px-5 py-2 rounded-xl text-blue font-semibold transition-colors duration-300 cursor-pointer hover:bg-blue hover:text-gray-900"
            {...props}
        />
    );
}

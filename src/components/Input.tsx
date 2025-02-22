import { Mail } from "lucide-react";
import type { ComponentProps } from "react";

interface InputProps extends ComponentProps<"input"> {
    error?: boolean;
};

export function Input({ error = false, ...props }: InputProps) {
    return (
        <div
            className="bg-gray-800 h-12 flex items-center gap-2 border border-gray-800 rounded-xl px-4 group data-[error=true]:border-danger"
            data-error={error}
        >
            <span className="text-gray-400 group-focus-within:text-gray-100 group-[&:not(:has(input:placeholder-shown))]:text-gray-100 group-data-[error=true]:text-danger">
                <Mail />
            </span>

            <input
                className="flex-1 outline-0 placeholder:text-gray-400"
                {...props}
            />
        </div>
    );
}

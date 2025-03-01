"use client";

import { IconButton } from "@/components/IconButton";
import { InputField, InputIcon, InputRoot } from "@/components/Input";
import { Copy, Link } from "lucide-react";

interface LinkInputProps {
    inviteLink: string;
}

export default function LinkInput({ inviteLink }: LinkInputProps) {
    function handleCopyLink() {
        navigator.clipboard.writeText(inviteLink);
    }

    return (
        <InputRoot>
            <InputIcon>
                <Link className="size-5" />
            </InputIcon>

            <InputField defaultValue={inviteLink} readOnly />

            <IconButton className="w-auto -mr-2" onClick={handleCopyLink}>
                <Copy className="size-5" />
            </IconButton>
        </InputRoot>
    );
}

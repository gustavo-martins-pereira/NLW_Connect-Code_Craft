import { Button } from "@/components/Button";
import { IconButton } from "@/components/IconButton";
import { Input } from "@/components/Input";
import { ArrowRightIcon, Copy } from "lucide-react";

export default function Home() {
    return (
        <main>
            <Button>
                Enviar
                <ArrowRightIcon />
            </Button>

            <IconButton>
                <Copy />
            </IconButton>

            <Input type="email" placeholder="Digite seu e-mail" />
            <Input type="email" placeholder="Digite seu e-mail" error />
        </main>
    );
}

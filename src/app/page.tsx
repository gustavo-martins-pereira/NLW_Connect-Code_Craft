import { Button } from "@/components/Button";
import { IconButton } from "@/components/IconButton";
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
        </main>
    );
}

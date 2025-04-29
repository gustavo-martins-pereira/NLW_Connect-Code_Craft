"use client";

import { Button } from "@/components/Button";
import { InputField, InputIcon, InputRoot } from "@/components/Input";
import { subscribeToEvent } from "@/http/api";
import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowRight, Mail, User } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";
import { Suspense } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

const subscriptionSchema = z.object({
    name: z.string().min(2, "Digite seu nome completo"),
    email: z.string().email("Digite um e-mail válido"),
});

type SubscriptionSchema = z.infer<typeof subscriptionSchema>;

function FormContent() {
    const router = useRouter();
    const searchParams = useSearchParams();

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<SubscriptionSchema>({
        resolver: zodResolver(subscriptionSchema),
    });

    async function onSubscribe({ name, email }: SubscriptionSchema) {
        const referrer = searchParams.get("referrer");

        const { data } = await subscribeToEvent({ name, email, referrer });
        const { subscriberId } = data;

        router.push(`/invite/${subscriberId}`);
    }

    return (
        <form
            className="bg-gray-700 w-full border border-gray-700 rounded-2xl p-8 space-y-6 md:max-w-[440px]"
            onSubmit={handleSubmit(onSubscribe)}
        >
            <h2 className="font-heading font-semibold text-gray-200 text-xl">
                Inscrição
            </h2>

            <div className="space-y-4">
                <InputRoot error={!!errors.name}>
                    <InputIcon>
                        <User className="size-5" />
                    </InputIcon>

                    <InputField
                        placeholder="Seu nome completo"
                        {...register("name")}
                    />
                </InputRoot>

                <InputRoot error={!!errors.email}>
                    <InputIcon>
                        <Mail className="size-5" />
                    </InputIcon>

                    <InputField
                        type="email"
                        placeholder="Seu melhor e-mail"
                        {...register("email")}
                    />
                </InputRoot>
            </div>

            <Button type="submit" className="w-full">
                Garantir minha vaga
                <ArrowRight className="size-5" />
            </Button>
        </form>
    );
}

export default function Form() {
    return (
        <Suspense>
            <FormContent />
        </Suspense>
    );
}

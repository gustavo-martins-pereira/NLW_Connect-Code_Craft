import Image from "next/image";

import { Button } from "@/components/Button";
import { Input, InputField, InputIcon, InputRoot } from "@/components/Input";
import { ArrowRight, Mail, Radio, User } from "lucide-react";
import logo from "../assets/logo.svg";

export default function Home() {
    return (
        <main className="max-w-[1240px] mx-auto px-5 py-8 md:py-0">
            <div className="min-h-dvh flex flex-col justify-center gap-16">
                <div className="flex flex-col gap-8 items-center md:items-start">
                    <Image
                        src={logo}
                        alt="Dev stage"
                        width={108.5}
                        height={30}
                    />

                    <h1 className="flex flex-col text-4xl text-center leading-none font-heading font-medium md:text-7xl md:text-left">
                        <span className="text-blue">CodeCraft</span> Summit 2025
                    </h1>
                </div>

                <div className="flex flex-col items-stretch gap-5 md:flex-row">
                    <div className="flex-1 bg-gray-700 border border-gray-600 rounded-2xl p-8 space-y-6">
                        <div className="flex items-center justify-between">
                            <h2 className="font-heading font-semibold text-gray-200 text-xl">
                                Sobre o evento
                            </h2>
                            <span className="flex items-center gap-2 text-purple font-semibold text-xs">
                                <Radio className="size-5" />
                                AO VIVO
                            </span>
                        </div>

                        <p className="text-gray-300 text-sm leading-relaxed md:text-base">
                            Um evento feito por e para pessoas desenvolvedoras
                            apaixonadas por criar soluções inovadoras e
                            compartilhar conhecimento. Vamos mergulhar nas
                            tendências mais recentes em desenvolvimento de
                            software, arquitetura de sistemas e tecnologias
                            emergentes, com palestras, workshops e hackathons.
                            <br />
                            <br />
                            Dias 15 a 17 de março | Das 18h às 21h | Online &
                            Gratuito
                        </p>
                    </div>

                    <form className="bg-gray-700 w-full border border-gray-700 rounded-2xl p-8 space-y-6 md:max-w-[440px]">
                        <h2 className="font-heading font-semibold text-gray-200 text-xl">
                            Inscrição
                        </h2>

                        <div className="space-y-3">
                            <InputRoot>
                                <InputIcon>
                                    <User />
                                </InputIcon>

                                <InputField
                                    type="text"
                                    placeholder="Nome Completo"
                                />
                            </InputRoot>

                            <InputRoot>
                                <InputIcon>
                                    <Mail />
                                </InputIcon>

                                <InputField type="email" placeholder="E-mail" />
                            </InputRoot>
                        </div>

                        <Button type="submit">
                            Confirmar
                            <ArrowRight />
                        </Button>
                    </form>
                </div>
            </div>
        </main>
    );
}

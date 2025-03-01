import { getRanking } from "@/http/api";
import Image from "next/image";
import cooper from "../../../assets/medal-cooper.svg";
import gold from "../../../assets/medal-gold.svg";
import silver from "../../../assets/medal-silver.svg";

export default async function Ranking() {
    const { ranking } = (await getRanking()).data;

    return (
        <div className="w-full max-w-[440px] space-y-5">
            <h2 className="text-gray-200 text-xl font-heading font-semibold leading-none">
                Ranking de indicações
            </h2>

            <div className="space-y-4">
                {ranking.map((item, index) => {
                    const rankingPosition = index + 1;

                    return (
                        <div
                            key={item.id}
                            className="rounded-xl bg-gray-700 relative border border-gray-600 p-6 flex flex-col justify-center gap-3"
                        >
                            <span className="text-sm text-gray-300 leading-none">
                                <span className="font-semibold">
                                    {rankingPosition}º
                                </span>{" "}
                                |{item.name}
                            </span>

                            <span className="font-heading text-2xl font-semibold text-gray-200 leading-none">
                                {item.score}
                            </span>

                            {rankingPosition === 1 && (
                                <Image
                                    className="absolute top-0 right-8"
                                    src={gold}
                                    alt=""
                                />
                            )}
                            {rankingPosition === 2 && (
                                <Image
                                    className="absolute top-0 right-8"
                                    src={silver}
                                    alt=""
                                />
                            )}
                            {rankingPosition === 3 && (
                                <Image
                                    className="absolute top-0 right-8"
                                    src={cooper}
                                    alt=""
                                />
                            )}
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

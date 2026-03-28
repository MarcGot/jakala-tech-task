import { Flower } from "@/types/flower";
import Image from "next/image";
import { Button } from "@/components/ui/Button/Button";
import { getTranslations } from "next-intl/server";

async function FlowerSection({ flower, id }: { flower: Flower; id: string }) {
    const t = await getTranslations("flowerDetails");

    return (
        <section>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                <Image
                    src={flower.imgUrl}
                    alt={flower.name}
                    width={600}
                    height={600}
                    style={{ viewTransitionName: `image-${id}` }}
                    className="w-2xl rounded-2xl object-cover"
                />

                <div>
                    <h1
                        style={{ viewTransitionName: `binomialName-${id}` }}
                        className="text-generic-black text-5xl font-bold"
                    >
                        {flower.name}
                    </h1>

                    <h1 style={{ viewTransitionName: `name-${id}` }} className="text-base font-normal text-neutral-800">
                        {flower.binomialName}
                    </h1>

                    <div style={{ viewTransitionName: `price-${id}` }} className="mt-4">
                        <span className="text-generic-black text-3xl font-bold">€{flower.price}</span>
                    </div>

                    <ul className="opacity-animate font-dm text-generic-black mt-8 list-inside list-disc text-sm font-normal">
                        <li>{t("description.watering", { count: flower.wateringsPerWeek })}</li>
                        <li>{t("description.fertilizer", { type: flower.fertilizerType })}</li>
                    </ul>

                    <Button className="mt-8 w-full md:w-auto" size="lg">
                        {t("addToCart")}
                    </Button>
                </div>
            </div>
        </section>
    );
}

export default FlowerSection;

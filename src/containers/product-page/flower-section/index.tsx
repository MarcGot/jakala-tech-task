import {Flower} from "@/types/flower";
import Image from "next/image";
import {Button} from "@/components/ui/Button/Button";
import {getTranslations} from "next-intl/server";

async function FlowerSection({
     flower, id
  }: {
    flower: Flower;
    id: string;
}) {
    const t = await getTranslations('flowerDetails');

    return (
        <section>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <Image
                    src={flower.imgUrl}
                    alt={flower.name}
                    width={600}
                    height={600}
                    style={{ viewTransitionName: `image-${id}` }}
                    className="rounded-2xl object-cover w-2xl"
                />

                <div>
                    <h1 style={{ viewTransitionName: `binomialName-${id}` }}
                        className="text-5xl font-bold text-generic-black">
                        {flower.name}
                    </h1>

                    <h1 style={{ viewTransitionName: `name-${id}` }}
                        className="text-base  font-normal text-neutral-800">
                        {flower.binomialName}
                    </h1>

                    <div style={{ viewTransitionName: `price-${id}` }} className="mt-4">
                        <span className="text-3xl  font-bold text-generic-black">€{flower.price}</span>
                    </div>

                    <ul className="mt-8 opacity-animate list-inside list-disc font-dm text-sm font-normal text-generic-black">
                        <li>{t('description.watering', { count: flower.wateringsPerWeek })}</li>
                        <li>{t('description.fertilizer', { type: flower.fertilizerType })}</li>
                    </ul>

                    <Button className="mt-8" size="lg">
                        {t('addToCart')}
                    </Button>
                </div>
            </div>
        </section>
    )
}


export default FlowerSection;

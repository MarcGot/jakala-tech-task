import { Button } from "@/components/ui/Button/Button";
import { Flower } from "@/types/flower";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { Link } from "next-view-transitions";

function FlowerCard({ flower }: { flower: Flower }) {
    return (
        <Link href={`/flower/${flower.id}`} className={"block"}>
            <article className={"flex flex-col gap-4 rounded-lg bg-white p-4 shadow-md"}>
                <div>
                    <h1
                        className={"text-generic-black text-3xl leading-11 font-bold"}
                        style={{ viewTransitionName: `name-${flower.id}` }}
                    >
                        {flower.name}
                    </h1>
                    <h2
                        className={"font-dm text-base leading-6 font-normal text-neutral-800"}
                        style={{ viewTransitionName: `binomialName-${flower.id}` }}
                    >
                        {flower.binomialName}
                    </h2>
                </div>
                <div className={"relative"}>
                    <Image
                        loading={"eager"}
                        src={flower.imgUrl}
                        alt={flower.name}
                        width={300}
                        height={300}
                        className="aspect-3/2 w-full rounded-lg object-cover"
                        style={{ viewTransitionName: `image-${flower.id}` }}
                    />
                    <Button className={"absolute bottom-2 left-2"} variant={"secondary"} size={"lg"}>
                        €{flower.price}
                    </Button>
                    <Button className={"absolute right-2 bottom-2"} variant={"secondary"} size={"icon-lg"}>
                        <ArrowUpRight />
                    </Button>
                </div>
            </article>
        </Link>
    );
}

export default FlowerCard;

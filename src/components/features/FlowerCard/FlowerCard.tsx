import {Button} from "@/components/ui/Button/Button";
import {Flower} from "@/types/flower";
import Image from "next/image";
import {ArrowUpRight} from "lucide-react";
import { Link } from 'next-view-transitions';

function FlowerCard({flower} : { flower: Flower }) {
    return (
        <Link href={`/flower/${flower.id}`} className={"block"}>
            <article className={"flex flex-col gap-4 p-4 rounded-lg shadow-md bg-white"}>
                <div>
                    <h1 className={"text-3xl font-bold leading-11 text-generic-black"} style={{ viewTransitionName: `name-${flower.id}` }}>{flower.name}</h1>
                    <h2 className={"text-base font-normal leading-6 text-neutral-800 font-dm"} style={{ viewTransitionName: `binomialName-${flower.id}` }}>{flower.binomialName}</h2>
                </div>
                <div className={"relative"}>
                    <Image loading={"eager"} src={flower.imgUrl} alt={flower.name} width={300} height={300} className="w-full aspect-3/2 object-cover rounded-lg" style={{ viewTransitionName: `image-${flower.id}` }}/>
                    <Button className={"absolute bottom-2 left-2 "} variant={"secondary"} size={"lg"}>€{flower.price}</Button>
                    <Button className={"absolute bottom-2 right-2"} variant={"secondary"} size={"icon-lg"}><ArrowUpRight /></Button>
                </div>
            </article>
        </Link>
    )
}

export default FlowerCard;

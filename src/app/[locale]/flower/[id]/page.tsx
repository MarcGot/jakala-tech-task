import { getProductById } from "@/libs/api";
import {Flower} from "@/types/flower";
import FlowerSection from "@/containers/product-page/flower-section";
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList, BreadcrumbPage,
    BreadcrumbSeparator
} from "@/components/ui/Breadcrumb/BreadCrumb";
import { Link } from 'next-view-transitions';

export default async function FlowerPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    const flower:Flower = await getProductById(id);

    return (
        <main className="max-w-4xl mx-auto p-6 flex flex-col gap-4">
            <Breadcrumb>
                <BreadcrumbList>
                    <BreadcrumbItem>
                        <BreadcrumbLink asChild>
                            <Link href="/">Inicio</Link>
                        </BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator />
                    <BreadcrumbItem>
                        <BreadcrumbPage>{flower.name}</BreadcrumbPage>
                    </BreadcrumbItem>
                </BreadcrumbList>
            </Breadcrumb>
            <FlowerSection flower={flower} id={id} />
        </main>
    )
}

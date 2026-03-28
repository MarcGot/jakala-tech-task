import { getProductById } from "@/libs/api";
import { Flower } from "@/types/flower";
import FlowerSection from "@/containers/product-page/flower-section";
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/Breadcrumb/BreadCrumb";
import { Link } from "next-view-transitions";

export default async function FlowerPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    const flower: Flower = await getProductById(id);

    return (
        <main className="mx-auto flex max-w-4xl flex-col gap-4 p-6">
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
    );
}

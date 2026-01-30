import { ComingSoon } from "@/components/sections";
import type { Metadata } from "next";

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  return {
    title: `${slug} | News | Mazuri Energy`,
    description: "Mazuri Energy – coming soon.",
  };
}

export default function NewsPostPage() {
  return <ComingSoon />;
}

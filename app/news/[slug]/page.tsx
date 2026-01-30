import { ComingSoon } from "@/components/sections";
import type { Metadata } from "next";

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params: _params }: Props): Promise<Metadata> {
  return {
    title: "News | Mazuri Energy",
    description: "Mazuri Energy – coming soon.",
  };
}

export default function NewsPostPage() {
  return <ComingSoon />;
}

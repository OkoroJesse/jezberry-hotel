import { Metadata } from "next";
import { roomsData } from "@/config/roomsData";
import { RoomDetailView } from "@/components/RoomDetailView";

export const metadata: Metadata = {
  title: "Jezberry Suites | Jezberry Hotel Kubwa Abuja",
  description: "The premier Jezberry Suite featuring an illuminated amber glass wardrobe, feather cloud chandelier, backlit fluted feature wall, and velvet drapery.",
};

export default function SuitesPage() {
  const room = roomsData.find((r) => r.slug === "suites")!;
  return <RoomDetailView room={room} />;
}

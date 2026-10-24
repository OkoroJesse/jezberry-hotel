import { Metadata } from "next";
import { roomsData } from "@/config/roomsData";
import { RoomDetailView } from "@/components/RoomDetailView";

export const metadata: Metadata = {
  title: "Luxury Room | Jezberry Hotel Kubwa Abuja",
  description: "Architectural fluted wood slat features, warm cove backlighting, king platform bed, and built-in wardrobe in our Luxury Room at Jezberry Hotel, Kubwa.",
};

export default function LuxuryRoomPage() {
  const room = roomsData.find((r) => r.slug === "luxury")!;
  return <RoomDetailView room={room} />;
}

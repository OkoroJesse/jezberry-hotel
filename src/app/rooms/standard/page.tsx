import { Metadata } from "next";
import { roomsData } from "@/config/roomsData";
import { RoomDetailView } from "@/components/RoomDetailView";

export const metadata: Metadata = {
  title: "Standard Room | Jezberry Hotel Kubwa Abuja",
  description: "Tranquil Standard Room with plush bedding, air conditioning, modern rain shower, and free Wi-Fi at Jezberry Hotel in Kubwa, Abuja.",
};

export default function StandardRoomPage() {
  const room = roomsData.find((r) => r.slug === "standard")!;
  return <RoomDetailView room={room} />;
}

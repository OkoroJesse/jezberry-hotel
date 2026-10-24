import { Metadata } from "next";
import { roomsData } from "@/config/roomsData";
import { RoomDetailView } from "@/components/RoomDetailView";

export const metadata: Metadata = {
  title: "Executive Room | Jezberry Hotel Kubwa Abuja",
  description: "Executive Room with signature halo backlit mirror, 3D relief wall, drop pendant Edison bulbs, and dedicated media credenza in Kubwa, Abuja.",
};

export default function ExecutiveRoomPage() {
  const room = roomsData.find((r) => r.slug === "executive")!;
  return <RoomDetailView room={room} />;
}

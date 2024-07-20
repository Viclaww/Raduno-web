import Event from "@/components/Ui/Event";
import axios from "axios";
import { Suspense } from "react";

interface EventType {
  _id: string;
  eventFlier: string;
  eventLocation: string;
  eventName: string;
  eventDate: Date;
  eventTime: Date;
  createdBy: string;
  tickets: [];
  createdAt: Date;
  updatedAt: Date;
  __v: number;
}
async function getEvents() {
  const events = await fetch(
    "https://event-api-hkkc.onrender.com/api/v1/events"
  );
  if (!events.ok) {
    return "Failed to get data!";
  }
  return await events.json();
}

export default async function Page() {
  const { data: events } = await getEvents();
  // console.log("This is what i want", events);
  return (
    <div className="">
      <div className="grid w-full grid-cols-1 gap-5 px-5  md:grid-cols-3 lg:grid-cols-4 ">
        {events.map((event: EventType) => (
          <Event key={event._id} {...event} />
        ))}
      </div>
    </div>
  );
}

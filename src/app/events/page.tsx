import Event from "@/components/Ui/Event";
// import axios from "axios";
// import { Suspense } from "react";
import { getEvents } from "@/data/utils/functions";
interface EventType {
  _id: string;
  eventFlier: string;
  eventLocation: string;
  eventName: string;
  date: Date;
  eventTime: Date;
  eventDate: Date;
  createdBy: string;
  tickets: [];
  createdAt: Date;
  updatedAt: Date;
  slug: String;
  __v: number;
}

export default async function Page() {
  const { data: events } = await getEvents();
  console.log("This is what i want", events);
  return (
    <div className="bg-black pt-8">
      <div className="bg-black grid w-full grid-cols-1 gap-5 px-5  md:grid-cols-3 lg:grid-cols-3 ">
        {events?.map((event: EventType) => (
          <Event key={event._id} {...event} />
        ))}
      </div>
    </div>
  );
}

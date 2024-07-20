import Header from "@/components/layout/Header";
import Image from "next/image";
import image from "../../../assets/samantha-gades-fIHozNWfcvs-unsplash.jpg";
import { FaLocationPin } from "react-icons/fa6";
import { GrLocation } from "react-icons/gr";

// this is the api to this app
// https://event-api-hkkc.onrender.com/api/v1/events

async function getEvent(eventId: string) {
  const event = await fetch(
    `https://event-api-hkkc.onrender.com/api/v1/events/${eventId}`
  );
  if (!event.ok) {
    console.log(event.json());

    return "Failed to get data!";
  }
  return await event.json();
}

export default async function Page({ params }: { params: { event: string } }) {
  const { event } = params;

  const eventDet = await getEvent(event);

  return (
    <>
      <div className="w-full flex flex-col px-5 md:px-14 py-5">
        <div className="flex md:flex-row flex-col gap-8">
          <Image
            src={image}
            className="md:w-3/5"
            width={0}
            height={0}
            alt={event}
          />

          <div>
            <h1 className="text-4xl">{eventDet.name}</h1>
            <p className="text-justify font-medium">{eventDet.description}</p>
            <p className="text-lg font-bold">
              Organized by {eventDet.organizers}
            </p>
            <p>at least i got the event {event}</p>
            <div>
              <span className="flex">
                <GrLocation size={24} />
                <p>{eventDet.location}</p>
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

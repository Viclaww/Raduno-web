// import Header from "@/components/layout/Header";
// import Image from "next/image";
// import image from "../../../assets/samantha-gades-fIHozNWfcvs-unsplash.jpg";
import { BiCalendar } from "react-icons/bi";
// import { FaLocationPin } from "react-icons/fa6";
import { getEventByName, getTicketsByEventId } from "@/data/utils/functions";
// import { GrLocation } from "react-icons/gr";
// import { formattedDate } from "@/data/utils/functions";
// this is the api to this app
// https://event-api-hkkc.onrender.com/api/v1/events

export default async function Page({ params }: { params: { event: string } }) {
  const { event } = params;

  const { data: eventDet } = await getEventByName(event);
  const tickets = await getTicketsByEventId(eventDet._id);
  console.log(tickets);
  console.log(eventDet);
  return (
    <>
      <section className="w-full bg-black flex flex-col px-5 md:px-40 py-5">
        <section className="w-full flex md:flex-row flex-col md:justify-between gap-8">
          <figure className="w-full mr-10">
            <header className="my-2">
              <h1 className="text-white text-xl">{eventDet.eventName}</h1>
            </header>
            {/* <Image
              src={eventDet?.eventFlier}
              className="md:w-full h-[350px] rounded-md"
              width={100}
              height={100}
              alt={event}
            /> */}
            <figcaption className="py-4">
              <h1 className="text-4xl text-white">{eventDet.eventName}</h1>
              <span className="block text-xl py-4 text-white">Hosted By</span>
              <h2 className="flex flex-row items-center">
                <span className="block h-[2.5rem] w-[2.5rem] rounded-full bg-white"></span>
                <span className="text-white text-xl ml-4">
                  {eventDet.createdBy.name}
                </span>
              </h2>
              {/* <h2 className="text-white text-xl mt-4">{eventDet.tickets.length === 0 ? 'Unlimited': eventDet.tickets.length} Slots lefts</h2> */}
            </figcaption>
          </figure>
        </section>
      </section>
    </>
  );
}

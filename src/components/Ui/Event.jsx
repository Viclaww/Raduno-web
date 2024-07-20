import Image from "next/image";
import img from "../../assets/World comedy day.jpg";
import Link from "next/link";
import { BsPeopleFill } from "react-icons/bs";
import { BiCalendar } from "react-icons/bi";
import { FaLocationPin } from "react-icons/fa6";
import { GrLocation } from "react-icons/gr";
import { formattedDate } from "../../data/utils/functions";
function Event({
  _id,
  eventFlier,
  eventName,
  eventDate,
  createdBy,
  tickets,
  __v,
  eventLocation,
}) {
  return (
    <Link
      href={`events/${_id}`}
      key={_id}
      className="h-[50vh]  w-auto relative cursor-pointer hover:drop-shadow-lg hover:scale-[1.02] duration-200 shadow-lg justify-around rounded-md flex flex-col gap-2 bg-purple-secondary p-4"
    >
      <div className={`w-full mx-auto h-1/2 flex `}>
        <Image
          className="  object-cover"
          width={500}
          height={500}
          src={eventFlier}
          alt={eventName}
        />
      </div>
      <div className="w-full flex h-1/2 flex-col">
        <span>
          <h3 className="text-xl text-ellipsis line-clamp-1  font-medium">
            {eventName}
          </h3>
          <p className="absolute flex  gap-1 top-6 right-6  p-1 rounded bg-verdant/30">
            <BiCalendar size={20} />
            {formattedDate(eventDate)}
          </p>
        </span>
        <p className="font-medium opacity-60">
          Organized by <span className="font-bold">{createdBy}</span>
        </p>
        <span className="w-full justify-between flex text-sm ">
          <p className="font-medium gap-1 opacity-70 flex">
            <GrLocation size={20} /> {eventLocation}
          </p>

          <span className="flex gap-1 text-verdant items-center font-bold">
            <BsPeopleFill />
          </span>
        </span>
        <span className="flex w-full mt-5 justify-between">
          <span>
            <p className="text-xs">Tickets from</p>
            <p className="font-semibold ">{__v ? `N${startprice}` : "Free"}</p>
          </span>
          <Link className="" href={`events/${_id}`}>
            <button className="py-2 px-3 hover:bg-verdant bg-transparent w-full border-verdant border font-medium hover:text-white  text-verdant duration-500 rounded">
              View Event
            </button>
          </Link>
        </span>
      </div>
    </Link>
  );
}

export default Event;

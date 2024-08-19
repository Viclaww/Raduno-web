import Image from "next/image";
import Link from "next/link";
import { BsPeopleFill } from "react-icons/bs";
import { BiCalendar } from "react-icons/bi";
import { formattedDate } from "../../data/utils/functions";
function Event({
  _id,
  eventFlier,
  eventName,
  createdBy,
  date,
  __v,
  eventLocation,
  slug
}) {
  return (
    <section
      // href={`events/${_id}`}
      key={_id}
      className="h-[400px]  w-auto relative hover:scale-[1.02] duration-200 shadow-lg justify-around rounded-2xl mx-3 flex flex-col"
    >
      <div className={`w-full mx-auto h-1/2 flex `}>
        {/* <Image
          className="object-cover rounded-md cursor-pointer bg-black"
          width={500}
          height={500}
          src={eventFlier}
          alt={eventName}
        /> */}
         {/* <div className="absolute inset-0 bg-black opacity-15"></div> */}
      </div>
      <header className="w-full flex h-1/2 flex-col py-2">
        <section className="font-normal text-white ">
          <span className="capitalize">{createdBy.name}</span> {'\u2022'} {eventLocation}
        </section>
          <h3 className="text-xl text-ellipsis text-white line-clamp-1">
            {eventName}
          </h3>
          <p className="absolute flex px-3 gap-1 top-3 left-4 drop-shadow-md  p-1 rounded bg-white">
            <BiCalendar size={20} />
            {formattedDate(date)}
          </p>
        <div className="w-full flex flex-row justify-between items-center px-4 mt-5">
          <BsPeopleFill size={20} color="white"></BsPeopleFill>
          <Link href={`events/${slug}`}>
            <button className="py-2 px-3 cursor-pointer hover:bg-white hover:text-black  bg-transparent w-full border font-medium text-white duration-500 rounded-full">
              Attend
            </button>
          </Link>
        </div>
      </header>
    </section>
  );
}

export default Event;

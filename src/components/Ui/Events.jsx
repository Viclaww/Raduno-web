import React from "react";
import Event from "./Event";
import World from "../../assets/World comedy day.jpg";
import { getEvents } from "@/data/utils/functions";
const Events = async () => {
  const {data: events} = await getEvents();
  console.log(events);
  const event = {
    eventName: "World Comedy Day",
    createdBy: "Mc conex",
    description:
      "Join Mc Conex and create moments of laghther never to be forgotten......",
    location: "23 Nwaniba Road, Uyo",
    attendes: 1000,
    startprice: null,
    eventFlier: World,
    date: new Date(),
  };
  return (
    <section className="md:p-10 p-5 flex w-full justify-center bg-black flex-col">
      <section className="flex text-left text-white py-6">
        <h3 className="text-4xl text-white font-semibold">Events Around You</h3>
      </section>
      <div className="grid w-full grid-cols-1 gap-5  md:grid-cols-3 lg:grid-cols-3 ">
        <Event {...event} />
        <Event {...event} />
        <Event {...event} />
        <Event {...event} />
      </div>
      <div>
        <div>
          <h3 className="text-white">Explore more events</h3>
        </div>
        <div className="grid w-full grid-cols-1 gap-5  md:grid-cols-3 lg:grid-cols-3 ">
          <Event {...event} />
          <Event {...event} />
          <Event {...event} />
          <Event {...event} />
        </div>
      </div>
    </section>
  );
};

export default Events;

export function formattedDate(date) {
  const dateObject = new Date(date);
  const year = dateObject.getFullYear();
  const month = (dateObject.getMonth() + 1).toString().padStart(2, "0");
  const day = dateObject.getDate().toString().padStart(2, "0");
  return `${year}-${month}-${day}`;
}

export async function getEvents() {
  const events = await fetch(
    "https://event-api-hkkc.onrender.com/api/v1/events",
    {
      cache: "no-store",
    }
  );

  if (!events.ok) {
    return "Failed to get data!";
  }
  // console.log(await events.json())
  return await events.json();
}

export async function getEventByName(name) {
  const event = await fetch(
    `https://event-api-hkkc.onrender.com/api/v1/events/events/${name}`
  );

  if (!event) {
    return "Failed to get data!";
  }
  return await event.json();
}

export async function getTicketsByEventId(id) {
  const tickets = await fetch(
    `https://event-api-hkkc.onrender.com/api/v1/events/${id}`
  );
  if (!tickets) {
    return "Failed to get data!";
  }
  return await tickets.json();
}

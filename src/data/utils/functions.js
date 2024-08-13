export function formattedDate(date) {
  const dateObject = new Date(date);
  const year = dateObject.getFullYear();
  const month = (dateObject.getMonth() + 1).toString().padStart(2, "0");
  const day = dateObject.getDate().toString().padStart(2, "0");
  return `${year}-${month}-${day}`;
}

export async function getEvents() {
  const events = await fetch(
    "http://localhost:3001/api/v1/events"
  );
  if (!events.ok) {
    return "Failed to get data!";
  }
  return await events.json();
}

export async function getEventById(id){
  const event = await fetch(
    `http://localhost:3001/api/v1/events/${id}`
  );
  if (!event) {
    return "Failed to get data!";
  }
  return await event.json();
}
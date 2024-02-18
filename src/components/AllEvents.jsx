import { requestEventList } from "@/lib/fetch-api";
import { AllEventItem } from "./AllEventItem";

export const AllEvents = async () => {
  let events;

  try {
    const { data } = await requestEventList();
    events = data.reverse();
  } catch (error) {
    console.error("Ambil list data event tidak berhasil:", error);
  }

  return (
    <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-7 gap-y-12">
      {events &&
        events.map(({ events }) => (
          <AllEventItem key={events.id} events={events} />
        ))}
    </div>
  );
};

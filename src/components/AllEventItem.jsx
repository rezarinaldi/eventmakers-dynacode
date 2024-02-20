import Image from "next/image";
import Link from "next/link";

export const AllEventItem = async ({ events }) => {
  return (
    <Link href={`/${events.id}`}>
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure>
          <Image
            src={events.image}
            width={400}
            height={400}
            unoptimized={true}
            alt="event-image"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{events.title}</h2>
          <p className="my-4">{events.description}</p>
          <div className="card-actions justify-end">
            <div className="badge badge-outline">{events.dateTime}</div>
          </div>
        </div>
      </div>
    </Link>
  );
};

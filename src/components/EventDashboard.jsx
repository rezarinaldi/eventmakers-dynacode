import Link from "next/link";

export const EventDashboard = () => {
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="text-5xl font-bold">🎪 DynaVent</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <Link href={`/dashboard/create`}>
            <button className="btn btn-neutral mr-3">Get Started</button>
          </Link>
          <Link href="/dashboard/#events">
            <button className="btn btn-primary">Explore Events</button>
          </Link>
          <p className="py-6 font-semibold">
            Let's make your event dreams a reality!
          </p>
        </div>
      </div>
    </div>
  );
};

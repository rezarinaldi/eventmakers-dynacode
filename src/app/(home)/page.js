import { AllEvents } from "@/components/AllEvents";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <Header />
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-5xl font-bold">🎪 DynaVent</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <Link href={`/dashboard`}>
              <button className="btn btn-neutral mr-3">Get Started</button>
            </Link>
            <Link href="/#events">
              <button className="btn btn-primary">Explore Events</button>
            </Link>
            <p className="py-6 font-semibold">
              Let`s make your event dreams a reality!
            </p>
          </div>
        </div>
      </div>
      <section id="events" className="px-14 pt-14 pb-24">
        <div
          className="
          max-w-screen-xl mx-auto flex flex-col gap-7
          [&_h2]:font-semibold
          [&_h2]:text-3xl
        "
        >
          <h2 className="text-center">All Events</h2>
          <div className="join flex justify-center items-center">
            <input
              className="input input-bordered join-item"
              placeholder="Search Event"
            />
            <button className="btn btn-outline join-item rounded-r-full">
              Search
            </button>
          </div>
          <AllEvents />
        </div>
      </section>
      <Footer />
    </div>
  );
}

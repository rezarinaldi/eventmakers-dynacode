export default async function Page({ searchParams }) {
  const res = await fetch(`https://eventmakers-api.fly.dev/events?search=${searchParams.q}`);
  const data = await res.json();
  console.log(data);

  return <div>Search Events :</div>;
}

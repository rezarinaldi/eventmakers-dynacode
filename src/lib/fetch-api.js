export async function requestEventList() {
  const res = await fetch("https://eventmakers-api.fly.dev/events", {
    cache: "no-cache",
  });
  const data = await res.json();
  return data;
}

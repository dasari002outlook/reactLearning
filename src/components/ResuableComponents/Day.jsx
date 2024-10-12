export default function Day() {
  const date = new Date();
  const day = date.toLocaleString("default", { weekday: "long" });
  const dateString = date.toLocaleString("default", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <div>
      <h1 className="day">
        {day}, {dateString}
      </h1>
    </div>
  );
}

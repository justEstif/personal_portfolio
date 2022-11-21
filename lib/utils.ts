export const shortenDate = (date: Date) =>
  date.toLocaleDateString("en-US", {
    year: "2-digit",
    month: "2-digit",
    day: "2-digit",
  });

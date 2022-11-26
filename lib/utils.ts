export const shortenDate = (date: Date) =>
  date.toLocaleDateString("en-US", {
    year: "2-digit",
    month: "2-digit",
    day: "2-digit",
  });

export const getReadingTime = (text: string) => {
  const wpm = 50;
  const words = text.trim().split(/\s+/).length;
  return Math.ceil(words / wpm);
};

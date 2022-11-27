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

export const shuffleArray = (arr: any[]) => {
  let currentIndex = arr.length,
    randomIndex;

  // While there remain elements to shuffle.
  while (currentIndex != 0) {
    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [arr[currentIndex], arr[randomIndex]] = [
      arr[randomIndex],
      arr[currentIndex],
    ];
  }

  return arr;
};

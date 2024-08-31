import quotes from "./randomQuotes.js";

export const getQuotes = () => {
  const randomQuotes = Math.floor(Math.random() * quotes.length);
  const getQuotes = quotes[randomQuotes];
  return getQuotes;
};

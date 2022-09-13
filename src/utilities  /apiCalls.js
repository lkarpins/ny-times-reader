export const getArticleData = async (section) => {
  const URL = `https://api.nytimes.com/svc/topstories/v2/{section}.json?api-key=${process.env.REACT_APP_API_KEY}`;

  const response = await fetch(URL, { method: "GET" });
  return await response.json();
};

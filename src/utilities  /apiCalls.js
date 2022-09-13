export const getArticleData = async (section) => {
  const URL = `https://api.nytimes.com/svc/topstories/v2/${section}.json?api-key=m5n71cSyBCfa4VB4orQUDytDRvnDSQdW`;

  const response = await fetch(URL, { method: "GET" });
  return await response.json();
};

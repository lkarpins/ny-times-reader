export const getData = async () => {
  const URL = "";

  const response = await fetch(URL, { method: "GET" });
  return await response.json();
};

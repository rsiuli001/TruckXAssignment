const getPosts = async (limit?: number) => {
  if (!limit) limit = 1;
  const res = await fetch(`https://www.reddit.com/best.json?limit=${limit}`);
  const data = await res.json();
  return {
    data
  };
};

export { getPosts };

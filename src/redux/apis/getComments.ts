const getComments = async (postId: string, limit?: number, sort?: string) => {
  if (!limit) limit = 1;
  if (!sort) sort = 'top';

  const url = `https://www.reddit.com/r/gaming/comments.json?article=${postId}&limit=${limit}&sort=${sort}`;
  const res = await fetch(url);
  const data = await res.json();
  return { data };
};

export { getComments };

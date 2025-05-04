module.exports = (req, res) => {
  const parsed = new URL(req.url, "http://localhost:3000");
  req.path = parsed.pathname;
  req.query = Object.fromEntries(parsed.searchParams.entries());
};

module.exports = (req, res, next) => {
  if (req.method === "POST" && req.url === "/auth") {
    req.method = "GET";
  }
  next();
};

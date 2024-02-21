function validateName(req, res, next) {
    const { name } = req.body;
    if (name === 'admin') {
      return res.status(400).json({ error: "Name 'admin' is not allowed." });
    }
    next();
  }
  
  export { validateName };
  
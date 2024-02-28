import SmartDAO from "../dao/api.dao.js";

export const getAll = async (req, res) => {
  try {
    const result = await SmartDAO.getAll();
    res.json(result);
  } catch (error) {
    res.json({ status: "Server unavailable" });
  }
};

export const getOne = async (req, res) => {
  const id = req.params.id;
  try {
    const result = await SmartDAO.getOne(id);
    if (result) {
      res.json(result);
    } else {
      res.json({ status: "Not found" });
    }
  } catch (error) {
    res.json({ status: "Server unavailable" });
  }
};

export const insertOne = async (req, res) => {
    try {
      const result = await SmartDAO.insertOne(req.body);
      const products = await SmartDAO.getAll();
      res.render('index', { products });
    } catch (error) {
      res.json({ status: "Server unavailable" });
    }
  };
  
  export const updateOne = async (req, res) => {
    const id = req.params.id;
    const Smart = req.body;
    try {
      const result = await SmartDAO.updateOne(id, Smart);
      if (result) {
        const products = await SmartDAO.getAll();
        res.render('index', { products });
      } else {
        res.json({ status: "Not found" });
      }
    } catch (error) {
      res.json({ status: "Server unavailable" });
    }
  };
  
  export const deleteOne = async (req, res) => {
    const id = req.params.id;
    try {
      const result = await SmartDAO.deleteOne(id);
      if (result) {
        const products = await SmartDAO.getAll();
        res.render('index', { products });
      } else {
        res.json({ status: "Not found" });
      }
    } catch (error) {
      res.json({ status: "Server unavailable" });
    }
  };

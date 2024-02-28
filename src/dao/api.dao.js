import Smart from "../model/api.model.js";

const SmartDAO = {};

SmartDAO.getAll = async () => {
  const Smarts = await Smart.find({});
  return Smarts;
};

SmartDAO.getOne = async (id) => {
  const Smarts = await Smart.findOne({ id: id });
  return Smarts;
};

SmartDAO.insertOne = async (Smart) => {
  return await Smart.create(Smart);
};

SmartDAO.updateOne = async (id, Smart) => {
  return await Smart.findOneAndUpdate({ id: id }, Smart);
};

SmartDAO.deleteOne = async (id) => {
  return await Smart.findOneAndDelete({ id: id });
};

export default SmartDAO;


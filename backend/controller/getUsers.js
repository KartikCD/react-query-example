const { User } = require("../models/User");

const getUsers = async (_req, res) => {
  try {
    const users = await User.find({});
    return res.status(200).json({ users: users });
  } catch (err) {
    return res
      .status(500)
      .json({ message: "Something went wrong. try again later." });
  }
};

module.exports = {
  getUsers,
};

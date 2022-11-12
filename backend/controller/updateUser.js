const { User } = require("../models/User");

const updateUser = async (req, res) => {
  try {
    const id = req.params.id;
    const user = req.body;
    const newUser = await User.findByIdAndUpdate(id, { $set: user });
    return res.status(200).json({ user: newUser });
  } catch (err) {
    return res
      .status(500)
      .json({ message: "Something went wrong. try again later." });
  }
};

module.exports = {
  updateUser,
};

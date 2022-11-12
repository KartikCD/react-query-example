const { User } = require("../models/User");

const getUser = async (req, res) => {
  try {
    const id = req.params.id;
    const user = await User.findById(id);
    if (user) {
      return res.status(200).json({ user: user });
    } else {
      return res.status(500).json({ message: "Cannot find user." });
    }
  } catch (err) {
    return res
      .status(500)
      .json({ message: "Something went wrong. try again later." });
  }
};

module.exports = {
  getUser,
};

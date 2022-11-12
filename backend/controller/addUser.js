const { User } = require("../models/User");

const addUser = async (req, res) => {
  try {
    const user = new User(req.body);
    const newUser = await user.save(user);
    if (user === newUser) {
      return res.status(201).json({ user: newUser });
    } else {
      throw new Error("Cannot create user.");
    }
  } catch (err) {
    return res
      .status(500)
      .json({ message: "Something went wrong. try again later." });
  }
};

module.exports = {
  addUser,
};

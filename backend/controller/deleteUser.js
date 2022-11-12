const { User } = require("../models/User");

const deleteUser = async (req, res) => {
  try {
    const id = req.params.id;
    await User.findByIdAndDelete(id);
    return res.status(200).json({
      message: "User deleted successfully.",
    });
  } catch (err) {
    return res
      .status(500)
      .json({ message: "Something went wrong. try again later." });
  }
};

module.exports = {
  deleteUser,
};

const { User } = require("../model/User");

const getUsers = async (req, res) => {
      try {
            const users = await User.find();
            res.status(200).json(users);
      } catch (error) {
            console.error("error in getUsers:", error);
            res.status(500).json({ error: "Internal Server Error" })
      }
};

module.exports = {
      getUsers,
};
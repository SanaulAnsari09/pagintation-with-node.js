const userModal = require("../module/index");

const addUserController = async (req, res) => {
  try {
    const addUser = new userModal(req.body);
    await addUser.save();

    if (addUser) {
      res.status(200).json({
        Status: true,
        UserId: addUser._id,
        Message: "Data Added Successfully !",
      });
    }
  } catch (err) {
    res.status(400).json({
      Status: false,
      Message: err.message || err,
    });
  }
};

module.exports = addUserController;

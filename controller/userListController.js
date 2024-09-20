const { json } = require("express");
const userModal = require("../module/index");

const userListController = async (req, res) => {
  try {
    const page = parseInt(req.query.page || 1);
    const dataLimit = 3;
    const totalData = (await userModal.find({})).length;
    const totalPage = Math.ceil(totalData / dataLimit);

    if (page > totalPage) {
      return res
        .status(200)
        .json({ Status: true, Message: "404 Page Not Found" });
    }

    const data = await userModal
      .find()
      .skip((page - 1) * dataLimit)
      .limit(dataLimit)
      .exec();
    console.log(data);
    res.status(200).json({
      Status: true,
      TotalLength: totalData,
      Data: data,
    });
  } catch (err) {
    res.status(400).json({
      Status: false,
      Message: err.message || err,
    });
  }
};

module.exports = userListController;

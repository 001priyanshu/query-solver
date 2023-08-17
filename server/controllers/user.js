const User = require("../models/user");

exports.registerCustomer = async (req, res, next) => {
  try {
    const { userId,isAgent } = req.body;
    const newUser = new User({
      userId: userId,
      isAgent: isAgent,
      email: userId,
    });
    await newUser.save();
    return res.status(200).json({
      message: "user created successfully",
      success: true,
      newUser,
    });
  } catch (error) {
    if (error.code === 11000 && error.keyPattern.userId === 1) {
      return res.status(400).json({
        message: "user with that userId already exists",
      });
    } else {
      console.error(
        "An error occurred while creating the user:",
        error.message
      );
    }
  }
};

exports.loginCustomer = async (req, res, next) => {
  try {
    const userId = req.body.customerId;
    const user = await User.findOne({ email: userId, isAgent: false });
    if (user) {
      return res.status(200).json({
        success: true,
        user: user,
      });
    }
    return res.status(401).json({
      success: true,
      message: "Please enter the correct userId",
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json({
      error: err,
    });
  }
};

exports.loginAgent = async (req, res, next) => {
  try {
    const userId = req.body.agentId;
    const user = await User.findOne({ email: userId, isAgent: true });
    if (user) {
      return res.status(200).json({
        success: true,
        user: user,
      });
    }
    return res.status(401).json({
      success: true,
      message: "Please enter the correct userId",
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json({
      error: err,
    });
  }
};

exports.searchCustomers = async (req, res, next) => {
  try {
    const keyword = req.query.search
      ? {
          $or: [
            { name: { $regex: req.query.search, $options: "i" } },
            { userId: { $regex: req.query.search, $options: "i" } },
          ],
        }
      : {};

    const users = await User.find(keyword).find({ isAgent: false });

    return res.status(200).json({
      success: true,
      users,
    });
  } catch (err) {}
};





const connection = require("../configs/database.config");

//Create a New User

exports.addUser = (req, res) => {
  try {
    const { email, password } = req.body;

    //query
    const query = "INSERT INTO users (email,password) values(?,?)";
    connection.query(query, [email, password], (err, results) => {
      if (err) {
        res.status(500).json({
          success: false,
          msg: "Error while Creating User",
        });
      } else {
        res.status(200).json({
          success: true,
          msg: "User created successfully !",
        });
      }
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      msg: "Error while Create user Section !",
    });
  }
};

//Get all Users

exports.getAllUsers = (req, res) => {
  try {
    const query = "SELECT * FROM users";
    connection.query(query, (err, results) => {
      if (err) {
        res.status(500).json({
          success: false,
          msg: "Error While Fetching all users data..",
        });
      } else {
        res.status(200).json({
          success: false,
          msg: "Users Fetched Successfully !",
          results,
        });
      }
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      msg: "error while all data fetching section !",
    });
  }
};

//Update user By Id

exports.updateUser = (req, res) => {
  try {
    const userId = req.params.id;

    const { email, password } = req.body;

    const query = "UPDATE users SET email= ?, password= ? WHERE userId= ?";

    connection.query(query, [email, password, userId], (err, results) => {
      if (err) {
        res.status(500).json({
          success: false,
          msg: "Error while Update !",
        });
      } else {
        res.status(200).json({
          success: true,
          msg: "User updated !",
          results,
        });
      }
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      msg: "Error While Update Section !",
    });
  }
};

//delete a user

exports.deleteUser = (req, res) => {
  try {
    const userId = req.params.userId;
    const query = "DELETE FROM users where userId= ?";
    connection.query(query, [userId], (err, results) => {
      if (err) {
        res.status(400).json({
          success: false,
          msg: "Error while Deleting User ! ",
        });
      } else {
        res.status(200).json({
          success: true,
          msg: "User Deleted successfully !",
        });
      }
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      msg: "Error while delete section !",
    });
  }
};

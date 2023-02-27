import Jwt from "jsonwebtoken";
import bycrept from "bcryptjs";
import User from "../models/UserModel.js";
import asyncHandler from "express-async-handler";

//@decs register new users
//@roues POST api/users
//access PUBLIC
const register = asyncHandler(async (req, res) => {
  const { username, email, password } = req.body;

  //validation form
  if (!username || !email || !password) {
    res.status(201).json({ message: "feild not be empty" });
  }
  //check if user existe
  const userExiste = await User.findOne({ email });

  if (userExiste) {
    res.status(400).json({ message: "email is already existe" });
  } else {
    //hash password
    const sale = await bycrept.genSalt(10);
    const hashedPassword = await bycrept.hash(password, sale);

    //create user
    const user = await User.create({
      username,
      email,
      password: hashedPassword,
    });

    // send res when user are created
    if (user) {
      res.status(201).json({
        _id: user.id,
        username: user.username,
        email: user.email,
        token: generateToken(user.id),
      });
    } else {
      res.status(400).json({
        message: "invalid user data",
      });
    }
  }
});

//@decs  Authenticate   user
//@roues POST api/users/:id
//access Public

const login = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  //check  email existe
  const user = await User.findOne({ email });

  if (user && (await bycrept.compare(password, user.password))) {
    res.status(200).json({
      _id: user.id,
      username: user.username,
      email: user.email,
      token: generateToken(user.id),
    });
  } else {
    res.status(400).json({ message: `email ou mot de pass est incorrect` });
  }
});

//@decs  Get  user  data
//@roues POST api/users/me
//access Private
const getMe = asyncHandler(async (req, res) => {
  const user = User.findById(req.user.id);
  res.status(200).json({ userid: req.user.id });
});

//generate jwt

const generateToken = (id) => {
  return Jwt.sign({ id }, process.env.SERCRET_KEY, {
    expiresIn: "30d",
  });
};

export { register, login, getMe };

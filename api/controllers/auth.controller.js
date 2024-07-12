import User from '../models/user.model.js';
import bcryptjs from 'bcryptjs';
import {errorHandler} from '../utils/error.js'
import jwt from 'jsonwebtoken'

export const signup = async (req, res,next) => {
  const { username, email, password } = req.body;

  if (
    !username ||
    !email ||
    !password ||
    username === '' ||
    email === '' ||
    password === ''
  ) {
    // return res.status(400).json({ message: 'All fields are required' });
    return next(errorHandler(400,'All fields are required'));

  }

  const hashedPassword = bcryptjs.hashSync(password, 10);

  const newUser = new User({
    username,
    email,
    password: hashedPassword,
  });

  try {
    await newUser.save();
    res.json('Signup successful');
  } catch (error) {
    // res.status(500).json({ message: error.message });
    next(error);
  }
};
export const signin = async (req, res, next) => {
  const { email, password } = req.body;

  if (!email || !password || email === '' || password === '') {
    return next(errorHandler(400, 'All fields are required'));
  }

  try {
    // Use findOne instead of find
    const validUser = await User.findOne({ email });

    if (!validUser) {
      return next(errorHandler(404, 'User not found'));
    }

    // Check if the password matches
    const validPassword = bcryptjs.compareSync(password, validUser.password);
    if (!validPassword) {
      return next(errorHandler(401, 'Invalid Password')); // Changed status code to 401 for unauthorized access
    }

    // Sign JWT token
    const token = jwt.sign({ id: validUser._id }, process.env.JWT_SECRET, { expiresIn: '1h' }); // Added expiration time

    // Send response with token in cookie
    res.status(200).cookie('access_token', token, { httpOnly: true }).json(validUser);
  } catch (error) {
    console.log('Error:', error);
    next(error);
  }
};
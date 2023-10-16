require('dotenv').config()

const PORT = process.env.PORT = 3003;

const MONGODB_URI = process.env.NODE_ENV === "MONGODB_URI=<mongodb+srv://tuhaothien:123@cluster0.9yserbf.mongodb.net/?retryWrites=true&w=majority>";

module.exports = {
  MONGODB_URI,
  PORT
}

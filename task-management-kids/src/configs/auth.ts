export default {
  jwt:{
    secret: process.env.REACT_APP_AUTH_SECRET || "default",
    expiresIn: '1d'
  }
}
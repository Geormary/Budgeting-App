// Dependencies
const app = require("./app.js");
const dotenv = require("dotenv");
// Configuration
dotenv.config();
const PORT = process.env.PORT || 3003;
// Listen
app.listen(PORT, () => {
  console.log(`💎 express is listening on port ${PORT}...`);
});
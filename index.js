const server = require("./api/server.js");
require("dotenv").config();

// make the port be assigned by the server
// heroku will place the .PORT enviorment value on their server
const port = process.env.PORT || 5000;

server.listen(port, () => {
  console.log(`\n*** Server Running on http://localhost:${port} ***\n`);
});

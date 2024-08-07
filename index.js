// index.js
import "dotenv/config";
import app from "./app.js";

import functions from "firebase-functions";
// Load environment variables from .env file

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});

exports.api = functions.https.onRequest(app);

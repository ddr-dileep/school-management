import app from "./src/app.js";
const APP_PORT = process.env.APP_PORT || 9001;

app.listen(APP_PORT, () => {
  console.log("App is running on port http://localhost:" + APP_PORT);
});

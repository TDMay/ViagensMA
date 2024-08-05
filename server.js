import "dotenv/config";
import app from "./src/app.js";

const PORT = process.env.PORT||3000;

app.listen(PORT, () => {
  console.log("servidor escutando!");
});

app.use((req,res, next) => {
  res.header("Assess-Control-Allow-Origin", "http://127.0.0.1:5500");
  res.header("Assess-Control-Allow-Headers", "Origin, X-Requested-With, Content-type, Accept");
  next();
});

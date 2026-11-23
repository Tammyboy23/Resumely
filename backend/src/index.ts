const express = require("express");
const cors = require("cors");
const resumeRouter = require("./routes/resume").default;

const app = express();
app.use(express.json());
app.use(cors())
app.use("/", resumeRouter);
app.listen(3000, () => {
    console.log("Resumely Server Running")
});
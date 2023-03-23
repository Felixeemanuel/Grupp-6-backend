const app = require("./app");
const mongoose = require("mongoose");
require("dotenv").config();

const PORT = process.env.PORT || 9999;
const mongoURI = process.env.MONGO_URI;

app.use("/api/errands", require("./controllers/errandController"));
app.use("/api/comments", require("./controllers/commentController"));

app.listen(PORT, () => console.log("server running on http://localhost:" + PORT));
mongoose.connect(mongoURI);
mongoose.connection.on("connected", () => {
    console.log("Connected to db");
});

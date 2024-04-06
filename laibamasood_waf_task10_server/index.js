const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");


const app = express();

app.use(express.json());
app.use(cors());

const mongoString =
  "mongodb+srv://laibamasoodd:MnuueCzB5KwV7MSE@cluster1.nzmhecm.mongodb.net/test";
mongoose
  .connect(mongoString, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .catch((err) => console.error("MongoDB connection error", err));
const db = mongoose.connection;

db.once("open", () => {
  console.log("DB connected");
});

// Schema and Model

const TeamNameSchema = new mongoose.Schema({
  team_name: String,
  team_head: String,
  date_created:{
    type:Date,
    default: Date.now()
},
});
const Team = mongoose.model("Team", TeamNameSchema);



// Routes

app.get("/getTeams", async (req, res) => {
  
  try {
    const teams = await Team.find();
    res.send(teams);
  }catch (error) {
    res.status(500).send(error);
  }
  
});


app.post("/createTeam", async (req, res) => {
  try {
    const team = new Team(req.body);
    await team.save();
    res.send(team);
  } catch (error) {
    res.status(500).send(error);
  }
});





app.listen(8080, () => {
  console.log("Server running on port 8080");
});

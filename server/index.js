const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.use(express.json());



const { getCompliment, getFortune, getGoals, postGoals, deleteGoals, editGoals } = require('./controller')

app.get("/api/compliment", getCompliment);
app.get("/api/fortune", getFortune);
app.get("/api/goals", getGoals);
app.post("/api/goals", postGoals);
app.delete('/api/goals/:id', deleteGoals);
app.put('/api/goals', editGoals);

app.listen(4000, () => console.log("Server running on 4000"));

import express from "express";

const app = express();
const PORT = 3000;

app.use(express.json());

// test route
app.get("/", (req, res) => {
  res.send("Jarvis Backend Running 🚀");
});

// ✅ chat route (listen ke bahar hona chahiye)
app.post("/chat", (req, res) => {
  const userMessage = req.body.message;

  console.log("User:", userMessage);

  res.json({
    reply: "Tum ne bola: " + userMessage
  });
});

// ✅ server start LAST me
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
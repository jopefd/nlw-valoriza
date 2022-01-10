import express from "express"

const app = express()

app.get("/test", (req, res) => {
  return res.send("blu")
})

app.post("/test-post",  (req, res) => {
  return res.send("bli")
})

app.listen(3000, () => console.log("blaaa"))

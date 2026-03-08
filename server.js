const express = require("express")
const cors = require("cors")
const path = require("path")
const { createClient } = require("@supabase/supabase-js")

const app = express()

app.use(cors())
app.use(express.json())

// servir arquivos estáticos
app.use(express.static(path.join(__dirname, "public")))

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_KEY
)

// rota principal
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"))
})

app.get("/api/registros", async (req, res) => {
  const { data, error } = await supabase.from("registros").select("*")

  if (error) return res.status(500).json(error)

  res.json(data)
})

app.post("/api/registros", async (req, res) => {
  const { error } = await supabase.from("registros").insert(req.body)

  if (error) return res.status(500).json(error)

  res.json({ ok: true })
})

app.delete("/api/registros/:id", async (req, res) => {
  const { error } = await supabase
    .from("registros")
    .delete()
    .eq("id", req.params.id)

  if (error) return res.status(500).json(error)

  res.json({ ok: true })
})

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
  console.log("Servidor rodando")
})

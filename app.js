const express = require('express')
const logger = require("morgan")
const cors = require("cors")

const app = express()

const indexRouter = require("./routes/index")
const userRouter = require("./routes/user")
const listaRouter = require("./routes/list")
const materRouter = require("./routes/maths")
const crearRuoter = require("./routes/crear")

app.use(logger("Eyes"))
app.use(express.json())
app.use(cors())



app.use("/", indexRouter)
app.use("/user", userRouter)
app.use("/listadocompras", listaRouter)
app.use("/dividir", materRouter)
app.use("/suma", materRouter)
app.use("/numero", materRouter)
app.use("/crear", crearRuoter)





module.exports = app

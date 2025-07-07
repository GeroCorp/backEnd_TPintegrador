import express from "express";
import env from "./src/api/config/enviroments.js";
import cors from "cors";
import { loggerUrl } from "./src/api/middlewares/middlewares.js";
import { moviesRoutes, productRoutes, viewRoutes } from "./src/api/routes/index.js";
import { join, __dirname } from "./src/api/utils/index.js";

const PORT = env.PORT;
const app = express();

app.set("view engine", "ejs");

app.set("views", join(__dirname, "src/views"));

app.use(express.static(join(__dirname,"src/public")));

//////////////////
// Middlewares //

app.use(express.json());
app.use(cors());
app.use(loggerUrl);


////////////
// Rutas //

app.get("/", (req, res) =>{
    res.send("asd")
})

app.use("/dashboard", viewRoutes);

app.use("/api/products", productRoutes);

app.use("/dash", moviesRoutes)


app.listen(PORT, () =>{
    console.log(`Server running in http://localhost:${PORT}/dash`)
})
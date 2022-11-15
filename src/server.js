import express from "express";
import { routerProductos } from "./rutas/producto.js";
import { routerCarrito } from "./rutas/carrito.js";

const app = express();

app.use(express.static("public"));

app.use("/productos", routerProductos);
app.use("/carrito", routerCarrito);

routerProductos.use(express.json());
routerCarrito.use(express.json());
routerProductos.use(express.urlencoded({ extended: true }));
routerCarrito.use(express.urlencoded({ extended: true }));

const validar = (req, res, next) => {
  if (req.headers.admin === true) {
    next();
  } else {
    res.status(401).JSON({ error: -1, descripción: "Ruta no autorizada." });
  }
};

app.use(express.urlencoded({ extended: true }));

export default app;

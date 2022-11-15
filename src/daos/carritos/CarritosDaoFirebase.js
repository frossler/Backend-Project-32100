import ContenedorFirebase from "../../contenedores/ContenedorFirebase.js";

class CarritosDaoFirebase extends ContenedorFirebase {
  constructor() {
    super("carrito", {
      title: { type: string, required: true },
      price: { type: Number, required: true },
      thumbnail: { type: string, required: true },
    });
  }
}

export default CarritosDaoFirebase;

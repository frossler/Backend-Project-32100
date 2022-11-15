import ContenedorFirebase from "../../contenedores/ContenedorFirebase.js";

class ProductosDaoFirebase extends ContenedorFirebase {
  constructor() {
    super("productos", {
      title: { type: string, required: true },
      price: { type: Number, required: true },
      thumbnail: { type: string, required: true },
    });
  }
}

export default ProductosDaoFirebase;

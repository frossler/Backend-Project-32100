import mongoose from "mongoose";
import config from "../config.js";

class ContenedorMongoDb {
  constructor(nombreColeccion, esquema) {
    this.coleccion = mongoose.model(nombreColeccion, esquema);
  }

  async listar(id) {
    try {
      return await this.collection.find({ _id: id }, { __v: 0 });
    } catch (error) {
      throw new Error(`Error al listar: ${error}`);
    }
  }

  async listarALL() {
    try {
      return await this.collection.find({}, { __v: 0 }).lean();
    } catch (error) {
      throw new Error(`Error al listar: ${error}`);
    }
  }

  async guardar(nuevoElem) {
    try {
      return await this.collection.create(nuevoElem);
    } catch (error) {
      throw new Error(`Error al guardar: ${error}`);
    }
  }

  async actualizar(nuevoElem) {
    try {
      return await this.collection.replaceOne(
        { _id: nuevoElem._id },
        nuevoElem
      );
    } catch (error) {
      throw new Error(`Error al actualizar: ${error}`);
    }
  }

  async borrar(id) {
    try {
      return await this.collection.deleteOne({ _id: id });
    } catch (error) {
      throw new Error(`Error al borrar: ${error}`);
    }
  }

  async borrarAll() {
    try {
      return await this.collection.deleteMany({});
    } catch (error) {
      throw new Error(`Error al borrar: ${error}`);
    }
  }
}

export default ContenedorMongoDb;

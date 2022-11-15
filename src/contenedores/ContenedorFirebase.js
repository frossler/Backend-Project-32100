import admin from "firebase-admin";
import config from "../config.js";

admin.initializeApp({
  credential: admin.credential.cert(config.firebase),
});

const db = admin.firestore();

class ContenedorFirebase {
  constructor(nombreColeccion) {
    this.coleccion = db.collection(nombreColeccion);
  }

  async listar(id) {
    try {
      return await this.collection.doc(id).get();
    } catch (error) {
      throw new Error(`Error al listar: ${error}`);
    }
  }

  async listarALL() {
    try {
      return await this.collection.doc().get();
    } catch (error) {
      throw new Error(`Error al listar: ${error}`);
    }
  }

  async guardar(nuevoElem) {
    try {
      return await this.collection.doc(nuevoElem).set();
    } catch (error) {
      throw new Error(`Error al guardar: ${error}`);
    }
  }

  async actualizar(nuevoElem) {
    try {
      return await this.collection
        .doc({ _id: nuevoElem._id }, nuevoElem)
        .update();
    } catch (error) {
      throw new Error(`Error al actualizar: ${error}`);
    }
  }

  async borrar(id) {
    try {
      return await this.collection.doc({ _id: id }).delete();
    } catch (error) {
      throw new Error(`Error al borrar: ${error}`);
    }
  }

  async borrarAll() {
    try {
      return await this.collection.doc({}).delete();
    } catch (error) {
      throw new Error(`Error al borrar: ${error}`);
    }
  }
}

export default ContenedorFirebase;

import { Injectable } from '@angular/core';
import { addDoc, collectionData, deleteDoc, doc } from '@angular/fire/firestore';
import { Firestore, collection } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(private fs: Firestore) { }

 /**
  * The function retrieves data from a collection named "Notes" and returns it with an ID field.
  * @returns The `getData()` function is returning the data from the "Notes" collection in the
  * Firestore database, with each document's ID included as a field called "id".
  */
  getData() {
    let notesCollection = collection(this.fs, "Notes");
    return collectionData(notesCollection, { idField: "id"});
  }

 /**
  * This function adds a new document with a description to a collection called "Notes".
  * @param {string} payload - The payload parameter is a string that represents the description of a
  * note that is being added to a collection called "Notes".
  * @returns The `addDoc()` function is being returned, which adds a new document to the "Notes"
  * collection in Firestore with the provided payload as the value of the "description" field.
  */
  addData(payload: string) {
    let notesCollection = collection(this.fs, "Notes");
    let data = {description: payload};
    return addDoc(notesCollection, data);
  }

 /**
  * This function deletes a document with a specific ID from a Firestore collection.
  * @param {string} id - The `id` parameter is a string that represents the unique identifier of a
  * document in the "Notes" collection that needs to be deleted.
  * @returns The `deleteDoc(docRef)` function is being returned. This function deletes the document
  * with the specified `id` from the "Notes" collection in the Firestore database.
  */
  deleteData(id: string) {
    let docRef = doc(this.fs, "Notes/" + id);
    return deleteDoc(docRef);
  }


}

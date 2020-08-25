import { Injectable } from '@angular/core';
import {openDB, DBSchema} from 'idb'

@Injectable({
  providedIn: 'root'
})
export class IndexedDBService {
  db;

  constructor() {
    this.connectToDb()
   }
  async connectToDb(){
    this.db=await openDB<MyDB>('my-db', 1,{
      upgrade(db){
        db.createObjectStore('user-store')
      }
    })
  }

  addUser(n){
    return this.db.put('user-store', name, 'name');
  }
  deleteUser(key: string){
    return this.db.delete('user-store', key)
  }

}

interface MyDB extends DBSchema{
  'user-store':{
    key:string;
    value:string;
  };
}

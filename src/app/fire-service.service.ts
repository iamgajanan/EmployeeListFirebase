import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class FireServiceService {

  constructor(private firestore: AngularFirestore) { }

   post(data){
    ​
        return this.firestore.collection('user').add(data)
    }
    get(){
      return this.firestore.collection('user').snapshotChanges();
    }
    // deletes(id){
    //    this.firestore.list('user').remove(id);
    // }
}

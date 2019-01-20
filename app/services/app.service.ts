import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';


@Injectable({
  providedIn: 'root'
})
export class AppService {

  private dbPath = '/buses';
  private imPath = '/photos';

  imageRef: AngularFireList<any> = null;
  busesRef: AngularFireList<Bus> = null;

  constructor(private db: AngularFireDatabase) {
    this.busesRef = db.list(this.dbPath);
    this.imageRef = db.list(this.imPath);
   }

   getBusesList(): AngularFireList<Bus> {
    return this.busesRef;
  }

  getImageList(): AngularFireList<any> {
    return this.imageRef;
  }


  createBus(bus: Bus) {
    this.busesRef.push(bus);
  }

  deleteAll() {
    this.busesRef.remove().catch(error => {
      console.log(error);
    });
  }
}

export class Bus {
  mark: string;
  model: string;
  year: number;
  photoKey: string;

  constructor(mark: string, model: string, year: number, photoKey: string) {
    this.mark = mark;
    this.model = model;
    this.year = year;
    this.photoKey = photoKey;
  }
}



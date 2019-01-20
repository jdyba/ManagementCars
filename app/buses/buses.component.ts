import { Component, OnInit } from '@angular/core';
import { AppService, Bus } from '../services/app.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-buses',
  templateUrl: './buses.component.html',
  styleUrls: ['./buses.component.css']
})
export class BusesComponent implements OnInit {

  public buses: Array<Bus>;
  public images: Array<DataPhoto>;

  constructor(private appService: AppService) { }

  ngOnInit() {
       // if jesli wgl istnieje taka baza danych
       this.getBusesList();
       this.getImagesList();
   }

  getBusesList() {
    this.appService.getBusesList().snapshotChanges().pipe(
      map(changes => {
        return changes.map(c => ({ key: c.payload.key, ...c.payload.val()}));
      })).subscribe( buses => {
        this.buses = buses;
    });
  }

  getImagesList() {
    this.appService.getImageList().snapshotChanges().pipe(
      map(changes => {
        return changes.map(c => ({ key: c.payload.key, value: c.payload.val()}));
      })).subscribe( images => {
       this.images = images;
    });
  }

  getImage(bus: Bus): string {
    return this.images.find(e => e.key === bus.photoKey).value;
  }
}

export interface DataPhoto {
  key: string;
  value: string;
}

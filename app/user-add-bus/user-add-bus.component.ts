import { AppService } from './../services/app.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-user-add-bus',
  templateUrl: './user-add-bus.component.html',
  styleUrls: ['./user-add-bus.component.css']
})
export class UserAddBusComponent implements OnInit {


  addBusForm: FormGroup;

  busList = new Array<UserBus>();
  tempImage: string;

  added: boolean;

  file: any;
  filestr: any;

  constructor(private appService: AppService) {
    this.addBusForm = this.initialForm();
    this.added = false;
  }

  ngOnInit() {
  }

  initialForm(): FormGroup {
    return new FormGroup({
      mark: new FormControl('', Validators.required),
      model: new FormControl('', Validators.required),
      year: new FormControl('', Validators.required),
      photo: new FormControl
    });
  }

  addBus () {
    const bus = this.createBus();
    this.addBusForm.reset();
    this.busList.push(bus);
    console.log(this.busList);
    this.added = true;
  }

  createBus(): UserBus {
    const name = this.addBusForm.value.mark;
    const model = this.addBusForm.value.model;
    const year = this.addBusForm.value.year;
    const photoKey = this.filestr;
    const temp = new UserBus(name, model, year, photoKey);
    return temp;
  }

  photoSelected(event: any) {
    // this.tempFile = event.target.files[0];
    this.file = event.target.files[0];
    this.filestr = this.savePhoto();
  }

  savePhoto() {
    const myReader = new FileReader();
    myReader.onloadend = (e) => {
      console.log(myReader.result);
      this.filestr = myReader.result;
   };
    myReader.readAsDataURL(this.file);
  }

}

export class UserBus {
  mark: string;
  model: string;
  year: number;
  photoKey: any;

  constructor(mark: string, model: string, year: number, photoKey: any) {
    this.mark = mark;
    this.model = model;
    this.year = year;
    this.photoKey = photoKey;
  }
}

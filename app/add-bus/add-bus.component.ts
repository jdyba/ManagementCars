import { AppService, Bus } from './../services/app.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import * as firebase from 'firebase';

@Component({
  selector: 'app-add-bus',
  templateUrl: './add-bus.component.html',
  styleUrls: ['./add-bus.component.css']
})
export class AddBusComponent implements OnInit {

  addBusForm: FormGroup;
  tempFile: File;
  added: boolean;

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
    this.appService.createBus(bus);
    this.added = true;
  }

  createBus(): Bus {
    const name = this.addBusForm.value.mark;
    const model = this.addBusForm.value.model;
    const year = this.addBusForm.value.year;
    const photoKey = this.savePhoto();
    const temp = new Bus(name, model, year, photoKey);
    return temp;
  }

  photoSelected(event: any) {
    this.tempFile = event.target.files[0];
  }

  savePhoto(): string {
    if (this.tempFile === undefined) { return ''; }
    const metaData = {'contentType': this.tempFile.type};
        //  tworzenie key
    const nextAvaliableKey = firebase.database().ref('/photos/').push({}).key;
    const storageRef: firebase.storage.Reference = firebase.storage().ref(`/photos/${nextAvaliableKey}`);
    const uploadTask: firebase.storage.UploadTask = storageRef.put(this.tempFile, metaData);

    uploadTask.then((uploadSnapshot: firebase.storage.UploadTaskSnapshot) => {
      uploadSnapshot.ref.getDownloadURL().then(url => {
         firebase.database().ref(`/photos/${nextAvaliableKey}`).set(url);
      });
    });
    return nextAvaliableKey;
  }
}


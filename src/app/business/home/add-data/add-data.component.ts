import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import * as firebase from 'firebase';
export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {
    position: 1,
    name: 'Hydrogen',
    weight: 1.0079,
    symbol: 'H'
  }, {
    position: 2,
    name: 'Helium',
    weight: 4.0026,
    symbol: 'He'
  }, {
    position: 3,
    name: 'Lithium',
    weight: 6.941,
    symbol: 'Li'
  }, {
    position: 4,
    name: 'Beryllium',
    weight: 9.0122,
    symbol: 'Be'
  }, {
    position: 5,
    name: 'Boron',
    weight: 10.811,
    symbol: 'B'
  }, {
    position: 6,
    name: 'Carbon',
    weight: 12.0107,
    symbol: 'C'
  }, {
    position: 7,
    name: 'Nitrogen',
    weight: 14.0067,
    symbol: 'N'
  }, {
    position: 8,
    name: 'Oxygen',
    weight: 15.9994,
    symbol: 'O'
  }, {
    position: 9,
    name: 'Fluorine',
    weight: 18.9984,
    symbol: 'F'
  }, {
    position: 10,
    name: 'Neon',
    weight: 20.1797,
    symbol: 'Ne'
  }
];
@Component({ selector: 'app-add-data', templateUrl: './add-data.component.html', styleUrls: ['./add-data.component.scss'] })

export class AddDataComponent implements OnInit {
  profileForm: any;
  database = firebase.firestore();
  storageRef = firebase.storage().ref();
  displayedColumns: string[] = ['firstName', 'lastName'];
  dataSource = ELEMENT_DATA;
  data = [];
  fileTobeUploaded: any;
  uploadedImageUrl: string;
  constructor(private fb: FormBuilder) {
    this.profileForm = this
      .fb
      .group({
        firstName: [
          '', Validators.required
        ],
        lastName: [''],
        address: this
          .fb
          .group({ street: [''], city: [''], state: [''], zip: [''], dob: [''] })
      });
  }

  ngOnInit() {
    const query = this.database.collection("items").where('address.zip', '==', 'kutkut');
    query.get().then((result) => {
      debugger;
      result.forEach((data) => {
        console.log(data.data());
        let info = data.data();
        info.id = data.id;
        this.data.push(info);
        console.log(info);
      });
      console.log(this.data);
    }).catch((error) => {
      console.log(error);
    });
    // this
    //   .database
    //   .collection('items')
    //   .onSnapshot((info) => {
    //     this.data = [];
    //     console.log(info);
    //     info.forEach((doc) => {
    //       let info = doc.data();
    //       info.id = doc.id;
    //       this
    //         .data
    //         .push(info);
    //       console.log(info);
    //     });

    //   });
  }
  onSubmit() {
    // console.log(this.profileForm.get('address').value['dob']);
    const formValue = this.profileForm.value;
    formValue.address.dob = new Date(formValue.address.dob);
    debugger;
    this
      .database
      .collection('items')
      .add(this.profileForm.value)
      .then((doc) => {
        console.log(doc);
        this
          .profileForm
          .reset();
      })
      .catch((error) => {
        console.warn('Error found ', error);
      });
    // console.warn(this.profileForm.value);
  }
  handleFileInput(files: FileList) {
    debugger;
    this.fileTobeUploaded = files.item(0);
    const name = (+new Date()) + '-' + this.fileTobeUploaded.name;
    const metadata = {
      contentType: this.fileTobeUploaded.type
    };
    const fileRef = this.storageRef.child(name);
    fileRef.put(this.fileTobeUploaded, metadata).then((snapshot) => {
      debugger;
      console.log('Uploaded a blob or file!');
      fileRef.getDownloadURL().then((url) => {
        console.log(url);
        this.uploadedImageUrl = url;
      }).catch((error) => {
        console.log(error);
      });
    });
  }
}

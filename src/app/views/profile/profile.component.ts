import { Component, OnInit } from '@angular/core';
import { ProfileService } from './profile.service';
import * as _ from 'lodash';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  public myImage = "http://localhost:2000/api/files/profile?img=xnnxpjk21564123789470_deepCopy.png";
  public file_form: any;
  public filesToUpload: any;

  constructor(
    private _profileService: ProfileService
  ) { }

  ngOnInit() {
  }

  postData() {
    this._profileService.postImage(this.file_form)
      .then(data => {
        //console.log(data);
      })
      .catch(error => console.log(error))
  }

  fileChangeEvent(event) {
    this.filesToUpload = <Array<File>>event.target.files;
    if (this.filesToUpload.length > 0) {
      this.file_form = new FormData();
      const files: Array<File> = this.filesToUpload;
      for (let i = 0; i < files.length; i++) {
        this.file_form.append("photos", files[i], files[i]['name']);
      }
    }
  }
}

import { AngularFireDatabase } from '@angular/fire/database';
import { Injectable } from '@angular/core';
import * as firebase from 'firebase';

import { Upload } from './upload';

@Injectable()
export class FileUploadService {

    uploads: any;
    private basePath = '/places';
    private uploadTask: firebase.storage.UploadTask;

    constructor(private db: AngularFireDatabase) { }

    pushUpload(upload: Upload) {
        const storageRef = firebase.storage().ref();
        this.uploadTask = storageRef.child(`${this.basePath}/${upload.file.name}`).put(upload.file);
        this.uploads = null;

        this.uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED,
            (snapshot: any) => {
                // upload in progress
                upload.progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            },
            (error) => {
                // upload failed
                console.log(error);
            },
            () => {
                // upload success
                storageRef.getDownloadURL().then((url: string) => {
                    upload.url = url;
                    upload.name = upload.file.name;
                    this.uploads = upload;
                });

            }
        );
    }

    // Writes the file details to the realtime db
    private saveFileData(upload: Upload) {
        this.db.list(`${this.basePath}/`).push(upload);
    }

}

import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { Injectable } from '@angular/core';
import * as firebase from 'firebase';

import { Upload } from './upload';

@Injectable()
export class FileUploadService {

    constructor(private db: AngularFireDatabase) { }

    private basePath = '/places';
    private uploadTask: firebase.storage.UploadTask;
    uploads: any;

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
                upload.url = this.uploadTask.snapshot.downloadURL;
                upload.name = upload.file.name;
                this.uploads = upload;
            }
        );
    }

    // Writes the file details to the realtime db
    private saveFileData(upload: Upload) {
        this.db.list(`${this.basePath}/`).push(upload);
    }

}

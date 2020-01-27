import { NgModule, SkipSelf, Optional } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireStorageModule, StorageBucket } from '@angular/fire/storage';

import { FileUploadService } from './utils/fileUpload.service';
import { AuthModule } from './auth/auth.module';
import { PlaceService } from './place/place.service';
import { UserService } from './user/user.service';
import { environment } from '../../environments/environment';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AuthModule,
    AngularFireModule.initializeApp(environment.firebase, 'puteshestvenik'),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    AngularFireStorageModule
  ],
  providers: [
    FileUploadService,
    PlaceService,
    UserService,
    { provide: StorageBucket, useValue: environment.firebase.storageBucket }
  ]
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error(
        'CoreModule is already loaded. Import it in the AppModule only');
    }
  }
}

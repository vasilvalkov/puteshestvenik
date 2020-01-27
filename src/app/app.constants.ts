import { AppConstants } from './app.constants.injection';

export const APP_CONSTANTS: AppConstants = {
  routes: {
    LOGIN: 'login',
    REGISTER: 'register',
    PLACES: 'places',
    PLACE_CREATE: '/places/create',
    USER: 'user',
    PROFILE: 'user/profile',
  },
  storageRefs: {
    PLACES: '/places',
    USERS: 'users',
    CATEGORIES: '/categories'
  },
  validation: {
    HEADING_MIN_LENGTH: 3,
    BODYTEXT_MIN_LENGTH: 100,
    PASSWORD_MIN_LENGTH: 6,
    NAME_MIN_LENGTH: 2,
    NAME_MAX_LENGTH: 20,
    USERNAME_MIN_LENGTH: 3,
    USERNAME_MAX_LENGTH: 20,
    EMAIL_PATTERN: /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
  },
  default: {
    DATE_FORMAT: 'dd-MMM-yyyy HH:mm',
    USER_WITH_CREDENTIAL: {
      username: '',
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      places: [],
      comments: [],
      // tslint:disable-next-line:max-line-length
      photoURL: 'https://firebasestorage.googleapis.com/v0/b/pateshestvenik-fab85.appspot.com/o/users%2Favatar.jpg?alt=media&token=cf2f6546-4b2f-4537-bd5d-3bb7d23a9039'
  }
  }
};

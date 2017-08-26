// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyC9E3X1B6jDXwAPchCt9mgWXlJqdob8iSk',
    authDomain: 'pateshestvenik-fab85.firebaseapp.com',
    databaseURL: 'https://pateshestvenik-fab85.firebaseio.com/',
    projectId: 'pateshestvenik-fab85',
    storageBucket: 'gs://pateshestvenik-fab85.appspot.com',
    messagingSenderId: '<your-messaging-sender-id>'
  }
};

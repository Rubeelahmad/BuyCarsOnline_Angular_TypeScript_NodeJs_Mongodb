// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
    production: false,
    firebaseConfig: {
        apiKey: 'AIzaSyDhjhPJS9BL6x6Erckrg1xJ4l0bgCvsi-0',
        authDomain: 'qeni-ng.firebaseapp.com',
        projectId: 'qeni-ng',
        storageBucket: 'qeni-ng.appspot.com',
        messagingSenderId: '810478974552',
        appId: '1:810478974552:web:5d19ad5152605f1a9efc2d',
        measurementId: 'G-1YHE1TYGX1',
    },
    apiUrl: 'http://localhost:3000/api'
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.

## Github Ionic
This is a sample Ionic 2 App that consumes the github API. To follow instructions on how to build it, read this article [Build a mobile app with angular 2 and ionic 2](https://scotch.io/tutorials/build-a-mobile-app-with-angular-2-and-ionic-2)

## Run the app
Make sure you have [nodejs](https://nodejs.org/en/) installed.

Install typecript
```bash
$ npm install -g typescript
```

Install Ionic CLI
```bash
$ npm install -g ionic
```

Install Cordova
```bash
$ npm install -g cordova
```

Clone this repo
```bash
$ git clone https://github.com/gangachris/githubionic
```

cd into the githubionic folder run npm install
```bash
$ npm install
```

You may need to restore the state of the ionic project, especially if you plan on using cordova.
```bash
ionic prepare
```

Build the app
```bash
$ npm run build
```

Serve the app
```bash
$ ionic serve
```

Head to `http://localhost:8100` in your browser and you'll see the app running

### License
MIT

# Ionic React with SQLite

Quick example of using SQLite with Ionic React. This was created using the blank Ionic starter app and the sample code on the [SQLite plugin docs](https://ionicframework.com/docs/native/sqlite).

I've only used it with Android but iOS should work all the same.

## Installation

Clone this repo then:

`npm install`

`ionic cap open android`

Plug in your device, run the app and tap the 'INIT DB' button.

Open Chrome, go to chrome://inspect and inspect the app to view the results in the JavaScript console.

To create the platform files from scratch, delete the `./android` directory and generate the Android platform files.

`rm -rf ./android`

`ionic cap add android`

`ionic cap sync`
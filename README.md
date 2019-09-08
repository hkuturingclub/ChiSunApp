# Chi Sun College App

This is the repository for the web and mobile apps of Chi Sun College of the University of Hong Kong. They are developed by the Chi Sun Turing Club to provide a one-stop platform for Chi Sun students to gain all information relevant to the college.

## How to setup development environment

## General

1.  Install [Node.js](https://nodejs.org/en/download/) LTS
2.  Install [Yarn](https://yarnpkg.com/lang/en/docs/install/)

## Web App

1.  `cd web`
2.  `yarn install`

## Server

1.  `cd server`
2.  `yarn install`

## Mobile App

1.  `cd mobile`
2.  `yarn install`

## How to run

### Web App

1.  `cd web`
2.  `yarn start`
3.  Visit web app at [http://localhost:3000/](http://localhost:3000/)

### Mobile App

#### 1. Start Server

1.  Go to server directory `cd server`
2.  Run server `yarn dev`
3.  Open GraphQL Playground at [http://localhost:4000/graphql](http://localhost:4000/graphql)

#### 2. Start App

1.  If you don't have expo installed, install by `npm install -g expo-cli`
2.  Go to mobile directory `cd mobile`
3.  Run app `expo start`
4.  Download Expo mobile app and scan QR code to run the app

## How to deploy

### Server

1.  `git subtree push --prefix server/ https://git.heroku.com/hkuchisuncollege.git master`

### Web App

1.  Ensure you are in master branch by `git branch`
2.  Deploy by `yarn deploy`
3.  Visit web app at [http://hkuturingclub.github.io/ChiSunApp](http://hkuturingclub.github.io/ChiSunApp)

### Mobile App

1. Update version in `mobile/app.json`
2. `git checkout -b localbranch`
3. `cd mobile`
4. `expo eject` (Select ExpoKit)
5. `expo publish`

#### Android

1. Open `android` directory in Android Studio
2. Wait for dependencies to install
3. Build unsigned apk and send to ITS

#### iOS

The following commands should be done in a separate branch and that branch should be deleted once the deployment is finished. Basically, we eject our app every time we have to send it to ITS.

1. `cd ios`
2. `pod install`
3. `yarn start` and then Open `chi-sun-college.xcworkspace` project in `mobile/ios` using XCode
4. If the app runs locally without issues, zip the entire `mobile` folder containing `node_modules` and `mobile/ios/Pods` and send to ITS.
5. Check previous email conversations in `turingclub.hku@gmail` for further guidance.

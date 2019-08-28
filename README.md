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
4.  Run XCode (`mobile/ios`) or Android Studio (`mobile/android`) project

## How to deploy

### Server

1.  `git subtree push --prefix server/ https://git.heroku.com/hkuchisuncollege.git master`

### Web App

1.  Ensure you are in master branch by `git branch`
2.  Deploy by `yarn deploy`
3.  Visit web app at [http://hkuturingclub.github.io/ChiSunApp](http://hkuturingclub.github.io/ChiSunApp)

# ReasonReact Starter

> Minimal yet powerful ReasonReact template with batteries included. 🔋

[![dependencies Status](https://david-dm.org/cironunes/reasonreact-starter/status.svg)](https://david-dm.org/cironunes/reasonreact-starter)
[![devDependencies Status](https://david-dm.org/cironunes/reasonreact-starter/dev-status.svg)](https://david-dm.org/cironunes/reasonreact-starter?type=dev)

[Full ReasonReact docs](https://reasonml.github.io/reason-react/)

## 🎬 Get started

1. Clone this repository without any history `git clone --depth 1 https://github.com/cironunes/reasonreact-starter.git`
2. Run it and jump into the browser to start developing

## 🏃‍♂️ How to run it?

```sh
yarn
yarn start
# in another tab, start a local http-server with live-reload
yarn server
# in another tab, run the tests in watch mode
yarn test
```

Open a new web page to `http://localhost:8000/`. Change any `.re` file in `src` to see the page auto-reload.

## 📦 What's included?

| Feature             | Description                                                                                   |
| ------------------- | --------------------------------------------------------------------------------------------- |
| Folder Structure    | We included a scalable folder structure. Make sure to check the README files for more details |
| Routes              | ReasonReact comes with a Router. The template comes with two examples                         |
| Tests               | Unit & Integration Testing with Jest and React Testing Library                                |
| Styles              | CSS-in-JS with bs-css and re-classnames                                                       |
| Web APIs            | _comming soon_                                                                                |
| Themes              | _coming soon_                                                                                 |
| Forms               | _coming soon_                                                                                 |
| GraphQL integration | _coming soon_ React Apollo (GraphQL)                                                          |
| Authentication      | _coming soon_ Auth0, Firebase?                                                                |
| Websockets          | _coming soon_                                                                                 |

## 🚀 Bundle for Production

We've included a convenience `UNUSED_webpack.config.js`, in case you want to
ship your project to production. You can rename and/or remove that in favor of
other bundlers, e.g. Rollup.

We've also provided a barebone `indexProduction.html`, to serve your bundle.

```sh
npm install webpack webpack-cli
# rename file
mv UNUSED_webpack.config.js webpack.config.js
# call webpack to bundle for production
./node_modules/.bin/webpack
open indexProduction.html
```

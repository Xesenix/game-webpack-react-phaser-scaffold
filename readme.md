# About
This scaffold makes use of webpack for loading and building scripts written in es6 (or you can use es5 if you dont want to use it). It is integrated with hot realoading development server and karma testing framework.

Source code is put into src/js folder. Public folder contains development build that requires running webpack-dev-server to work. And build folder contains deployment ready version. If you want change how it works configurations for this enviroment is present in conf folder.

# Features
Project contains basic states for loading assets, intro, screen, menu and play states.
* basic managment for soundtrack
* google fonts
* simple camera mouse and keyboard controller

Everything is contained in react component so you can build react application around your game.

# How to start

You need to install all dependecies first with:

``` bash
npm install
```

To start developing server with hot realoading run:

``` bash
npm start
```

And open public/index.html in your browser.

# How to test

Write your test in *.spec.js files inside src/js folder as in example src/js/index.spec.js and when ready run:


``` bash
npm test
```

You can check result of your tests in logs/test/index.html


# How to build for deployment

If you just want to build production ready script run:


``` bash
npm run build
```

Everything needed to deploy will be in build folder.

# phaser-typescript-starter
[Phaser](http://phaser.io) is a fun, free and fast 2D game framework for making HTML5 games for desktop and mobile web browsers, supporting Canvas and WebGL rendering.

This is a TypeScript based [Phaser](http://phaser.io) Starter Repository. 

## Requirements
This starter project assumes that you have [Git](http://git-scm.org) and
[Node](https://nodejs.org/) installed on your development system. Please visit those websites to learn how to install them.

In addition, [Gulp](gulpjs.com) and [TypeScript](http://www.typescriptlang.org/) should be installed globally (I use npm -g)

    npm install -g gulp-cli tsc

## Installation

To bring the sources to your machine, you can use git (as shown below), or just download the project ZIP and expand the source tree. Choose a directory name for your prject and replace <project directory> with that name.

    git clone --depth=1 https://github.com/brianyamasaki/phaser-typescript-webpack-starter.git <project directory>
    cd <project directory>

The depth=1 tells git to only pull down one commit worth of historical data.

To install all necessary libraries and tools, use NPM by typing the following.

    npm install

To compile/watch and serve the project itself, type the following:

    npm start

Open the browser of your choice and go to localhost:8080 and you should see the default game.
Start modifying the source code and simply reload the web page to see your latest changes in action. 

## Using Gulp

The project really does everything using Gulp, even typing ```npm start``` really just starts up Gulp into the development
server. So here are other commands available to you.

```gulp```  Compiles the project and starts webpack debug server
```gulp copy```  
```gulp build```    Compiles the production ready project for installation on a server

## Production Ready Builds

Compiling the project puts all intermediate and production files into the ```dist``` directory.
Just copy that directory's contents onto your server and it should work.




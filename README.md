# arcgis-js-api-test

A year ago I wanted to try out the Esri ArcGIS JavaScript API
(which is now called cumbersomely "ArcGIS Maps SDK For JavaScript API")

I have updated it to work either with NPM installed locally or in a Docker.

## Try it out

The ES examples use the Parcel bundler.

### Basic example

Just load the index.html file in basic_example into a browser.
This one uses a CDN and requires no server or any other files to show a map.

### Basic ES example

Testing using the "ES module" version
to show the use of a transpiler.

Note that the build step that takes place in "npm start" is slow
the first time around, so wait for parcel to say "Server running"
before you start pounding on the URL.

With node installed locally,

    cd basic_es_example
    npm install
    npm run copy
    npm start

With Docker, so you don't need to install node,

    docker build -t cc/node docker_context
    docker run -it --rm -p 1234:1234 -v "/$PWD/basic_es_example:/app:rw" cc/node bash
    # you are running inside the container for these commands...
    npm install
    npm audit fix
    npm run copy
    npm start

Note that running these commands will install code into the folder
basic_es_example/node_modules/ (either the local or docker version)

Note on the volume path: The thing with "/${PWD}" is a Windows kludge.

### React example

Test to show the use of React with the JSAPI
and it does not load a map huh. How sad.

With node installed locally, you luddite, 

    npm install
    npm run copy
    npm start

Or if you are with me and the cool kids in Docker world, 
which incidentally does not work on Windows right now? 2023-05-03

    docker buildx build -t cc/node src
    docker run -it --rm -p 1234:1234 -v "/$PWD/react_example:/app:rw" cc/node bash
    npm install
    npm run copy
    npm start

## TO DO

There are probably unneeded packages included in the ES example.
I worked backwards from a React example.

## References

### Plain JSAPI

[Install and set up](https://developers.arcgis.com/javascript/latest/install-and-set-up/)

[Code samples](https://developers.arcgis.com/javascript/latest/sample-code/)

### React

https://developers.arcgis.com/javascript/latest/es-modules/

This one was complex and not very helpful. 
[Esri github resources](https://github.com/Esri/jsapi-resources)

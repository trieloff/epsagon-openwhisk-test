#!/bin/sh
zip -r epsagon.zip epsagon.js package.json node_modules
wsk action update epsagon epsagon.zip --web true --kind nodejs:10
wsk action invoke -r -b epsagon -p foo bar
wsk activation get --last
wsk activation logs --last
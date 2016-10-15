#!/usr/bin/env babel-node

require('./helper')
let fs = require('fs')
let args = require('yargs').argv

async function mkdir() {
    if (args._[0]) {
        fs.mkdir(args._[0])
    }    
}

mkdir()

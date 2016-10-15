#!/usr/bin/env babel-node

require('./helper')
let fs = require('fs')
let args = require('yargs').argv

async function touch() {
  if (args._[0]) {
    fs.openSync(args._[0], 'w')
  }
}

touch()

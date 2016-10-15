#!/usr/bin/env babel-node

require('./helper')
let fs = require('fs').promise
let path = require('path')
let args = require('yargs').argv

async function ln() {
  if (args._[0] && args._[1]) {
    fs.symlink(args._[0], args._[1])
  }
}

ln()

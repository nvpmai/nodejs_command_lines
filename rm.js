#!/usr/bin/env babel-node

require('./helper')
let fs = require('fs').promise
let args = require('yargs').argv
let path = require('path')

async function rm() {
  if (args._[0]) {
    let filePath = path.join(__dirname, args._[0])
    let stat = await fs.stat(filePath)
    if (stat.isDirectory()) {
      fs.rmdir(filePath)
    }
    else {
      fs.unlink(filePath)
    }
  }
}

rm()

#!/usr/bin/env babel-node

require('./helper')
const fs = require('fs')

async function touch() {
  if (process.args[2]) {
    fs.openSync(args._[0], 'w')
  }
}

touch()

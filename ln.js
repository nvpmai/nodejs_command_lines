#!/usr/bin/env babel-node

require('./helper')
const fs = require('fs').promise
const args = require('yargs').argv

async function ln() {
  if (args._[0] && args._[1]) {
    fs.symlink(args._[0], args._[1])
  }
}

ln()

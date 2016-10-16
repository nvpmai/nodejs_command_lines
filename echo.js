#!/usr/bin/env babel-node

require('./helper')
let args = require('yargs').argv

async function echo() {
  process.stdout.write(args._[0] + "\n")
}

echo()

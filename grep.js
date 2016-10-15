#!/usr/bin/env babel-node

require('./helper')
let fs = require('fs')
let args = require('yargs').argv
let path = require('path')

async function grep() {
  if (args._[0] && args._[1]) {
    let filePath = path.join(__dirname, args._[1])
    let content = fs.readFileSync(filePath, "utf-8")
    let lines = content.split('\n')
    for (let line of lines) {
      if (line.indexOf(args._[0]) != -1) {
        process.stdout.write(line + '\n')
      }
    }
  }
}

grep()

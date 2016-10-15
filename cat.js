#!/usr/bin/env babel-node

require('./helper')
let fs = require('fs').promise
let path = require('path')
let args = require('yargs')
        .argv

async function cat() {
  let file = args._[0] || "README.md"
  let filePath = path.join(__dirname, file)
  fs.readFile(filePath).then(function(err, data) {
    if (err) {
      return process.stdout.write(err)
    }
    console.log("No error")
    process.stdout.write(data)
  })
}

cat()

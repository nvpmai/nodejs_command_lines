#!/usr/bin/env babel-node

require('./helper')
let fs = require('fs')
let path = require('path')
let args = require('yargs').argv

async function cat() {
  let fileName = args._[0] || "README.md"
  let filePath = path.join(__dirname, fileName)
  fs.readFile(filePath, function(err, data) {
    if (err) {
      return process.stdout.write(err)
    }
    process.stdout.write(data)
  })
}

cat()

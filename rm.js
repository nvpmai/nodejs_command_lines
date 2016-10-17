#!/usr/bin/env babel-node

require('./helper')
let fs = require('fs').promise
let args = require('yargs').argv

async function rm(filePath) {
  let stat = await fs.stat(filePath)
  if (stat.isDirectory()) {
    let fileNames = await fs.readdir(filePath)
    fileNames = await fileNames
    for (let fileName of fileNames) {
      await rm(filePath + '/' + fileName)
    }
    await fs.rmdir(filePath)
  }
  else 
    fs.unlink(filePath)
}

async function main() {
  if (args._[0])
    rm(__dirname + '/' + args._[0])
}

main()

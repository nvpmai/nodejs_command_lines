#!/usr/bin/env babel-node

require('./helper')
let fs = require('fs').promise
let path = require('path')
let args = require('yargs').argv

async function ls(rootPath) {
  let folderPath = path.join(__dirname, rootPath || '')
  let fileNames = await fs.readdir(folderPath)
  for (let fileName of fileNames) {
    let filePath = path.join(__dirname, fileName)
    let stat = await fs.stat(filePath)
    if (!stat.isDirectory()) {
      process.stdout.write(fileName + '\n')
    }
  }
}

ls(args._[0])

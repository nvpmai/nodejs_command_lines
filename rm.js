#!/usr/bin/env babel-node

require('./helper')
const fs = require('fs').promise
const path = require('path')

async function rm(filePath) {
  const stat = await fs.stat(filePath)
  if (stat.isDirectory()) {
    let fileNames = await fs.readdir(filePath)
    fileNames = await fileNames
    for (const fileName of fileNames) {
      await rm(filePath + '/' + fileName)
    }
    await fs.rmdir(filePath)
  }
  else
    fs.unlink(filePath)
}

async function main() {
  if (process.args[2])
    rm(path(__dirname, process.args[2]))
}

main()

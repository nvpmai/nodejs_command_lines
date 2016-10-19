#!/usr/bin/env babel-node

require('./helper')
const fs = require('fs').promise
const path = require('path')
const args = require('yargs').argv

async function ls(dir, fileList, fullPath) {
  const files = await fs.readdir(dir)
  for (const file of files) {
    const filePath = dir + file
    const stat = await fs.stat(filePath)
    if (args['R']) {
      if (stat.isDirectory())
        fileList = await ls(dir + file + '/', fileList, fullPath + '/' + file)
      else
        fileList.push(fullPath + '/' + file)
    } else if (!stat.isDirectory())
      fileList.push(file)
  }
  return fileList
}

async function main() {
  const dir = args._[0] || ''
  const filePath = path.join(__dirname, dir)
  const fileList = await ls(filePath + '/', [], '')
  for (const file of fileList) {
    console.log(file)
  }
}

main()
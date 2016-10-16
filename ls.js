#!/usr/bin/env babel-node

require('./helper')
let fs = require('fs').promise
let path = require('path')
let args = require('yargs').argv

async function ls(dir, fileList, full_path) {
  let files = await fs.readdir(dir)
  for (let file of files) {
    let filePath = dir + file
    let stat = await fs.stat(filePath)
    if (args['R']) {
      if (stat.isDirectory()) 
        fileList = await ls(dir + file + '/', fileList, full_path + '/' + file)
      else 
        fileList.push(full_path + '/' + file)
    }
    else if (!stat.isDirectory())
      fileList.push(file)
  }
  return fileList
}

async function main() {
  let dir = args._[0] || ''
  let filePath = path.join(__dirname, dir)
  let fileList = await ls(filePath + '/', [], '')
  for (let file of fileList) 
    console.log(file)
}

main()
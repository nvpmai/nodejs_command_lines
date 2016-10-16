#!/usr/bin/env babel-node

require('./helper')
let fs = require('fs').promise
let path = require('path')
let args = require('yargs').argv

// async function ls(rootPath) {
//   let fileNames = await fs.readdir(rootPath)
//   for (let fileName of fileNames) {
//     let filePath = path.join(__dirname, fileName)
//     let stat = await fs.stat(filePath)
//     if (!stat.isDirectory()) {
//       process.stdout.write(fileName + '\n')
//     }
//     else {
//       console.log("FILEPATH: " + filePath)
//       await ls(filePath)
//     }
//   }
// }

// async function main() {
//   await ls(dir)
// }

// main()

async function ls(dir, fileList, full_path) {
  let files = await fs.readdir(dir)
  for (let file of files) {
    let filePath = dir + file
    let stat = await fs.stat(filePath)
    if (stat.isDirectory() && args['R']) {
      fileList = await ls(dir + file + '/', fileList, full_path + '/' + file)
    }
    else if (args['R']) {
      fileList.push(full_path + '/' + file)
    }
    else {
      fileList.push(file)
    }
  }
  return fileList
}

async function main() {
  let dir = args._[0] || ''
  let filePath = path.join(__dirname, dir)
  let fileList = await ls(filePath + '/', [], '')
  for (let file of fileList) {
    process.stdout.write(file + '\n')
  }
}

main()
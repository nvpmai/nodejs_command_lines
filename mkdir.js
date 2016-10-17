#!/usr/bin/env babel-node

require('./helper')
let fs = require('fs')
let args = require('yargs').argv

async function mymkdir() {
  if (args._[0]) {
    let folderNames = args._[0].split('/')
    let path = ''
    for  (let folderName of folderNames) {
      if (folderName != '' && folderName != '.') {
        await fs.mkdir(path + folderName)
        path += folderName + '/'
      }
    }
  }
}

mymkdir()

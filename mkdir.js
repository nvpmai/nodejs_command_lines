#!/usr/bin/env babel-node

require('./helper')
const fs = require('fs')
const args = require('yargs').argv

async function mymkdir() {
  if (args._[0]) {
    const folderNames = args._[0].split('/')
    let path = ''
    for (const folderName of folderNames) {
      if (folderName !== '' && folderName !== '.') {
        await fs.mkdir(path + folderName)
        path += folderName + '/'
      }
    }
  }
}

mymkdir()

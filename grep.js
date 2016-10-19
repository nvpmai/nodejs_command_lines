#!/usr/bin/env babel-node

require('./helper')
const fs = require('fs').promise
const args = require('yargs').argv
const path = require('path')

async function findInFile(filePath) {
  let content = fs.readFile(filePath, 'utf-8')
  content = await content
  const lines = content.split('\n')
  for (const line of lines) {
    if (line.indexOf(args._[0]) !== -1) {
      console.log(line)
    }
  }
}

async function grep() {
  if (args._[0] && args._[1]) {
    let files = fs.readdir(__dirname)
    files = await files
    for (const file of files) {
      if (file.match(args._[1])) {
        console.log('Search for "' + args._[0] + '" in ' + file + ':')
        await findInFile(path.join(__dirname, file))
      }
    }
  }
}

grep()

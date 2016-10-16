#!/usr/bin/env babel-node

require('./helper')
let fs = require('fs').promise
let args = require('yargs').argv
let path = require('path')

async function grep() {
  if (args._[0] && args._[1]) {
    let files = fs.readdir(__dirname)
    files = await files
    for (let file of files) {
      if (file.match(args._[1])) {
        console.log('Search for "' + args._[0] + '" in ' + file + ":")
        await findInFile(__dirname + '/' + file)
      }
    }
  }
}

async function findInFile(filePath) {
  let content = fs.readFile(filePath, "utf-8")
  content = await content
  let lines = content.split('\n')
  for (let line of lines) {
    if (line.indexOf(args._[0]) != -1) {
      console.log(line)
    }
  }
}

grep()

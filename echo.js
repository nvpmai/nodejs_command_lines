#!/usr/bin/env babel-node

require('./helper')

async function echo() {
  if (process.argv[2]) {
    console.log(process.argv.splice(2).join(' '))
  } else {
    console.log('No input')
  }
}

echo()

#!/usr/bin/env babel-node

require('./helper')
const fs = require('fs')
const path = require('path')

async function cat() {
  const fileName = process.argv[2] || 'README.md'
  const filePath = path.join(__dirname, fileName)
  if (fs.existsSync(filePath)) {
    process.stdout.write(fs.readFileSync(filePath))
  }
}

cat()

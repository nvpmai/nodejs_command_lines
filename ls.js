#!/usr/bin/env babel-node

require('./helper')
let fs = require('fs').promise

async function echo() {
    process.stdout.write(process.argv[2] + "\n")
}

echo()

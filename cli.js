#!/usr/bin/env node

const extractor = require('./index')
const argv = require('yargs').argv


function runExtract () {
  let projectPath = argv.p || './'
  return extractor.extractLicenses(projectPath)
}

console.log(runExtract())

module.exports = runExtract

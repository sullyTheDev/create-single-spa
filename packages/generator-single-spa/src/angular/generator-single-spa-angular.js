const Generator = require('yeoman-generator')
const { spawn } = require('child_process')

module.exports = class SingleSpaAngularGenerator extends Generator {
  async runAngularCli() {
    spawn('npx', ['@angular/cli', 'new'], { stdio: 'inherit' })
  }
}
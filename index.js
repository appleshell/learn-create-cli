#!/usr/bin/env node
const program = require('commander')
const iq = require('inquirer')
const { version } = require('./package.json')
const inquirer = require('inquirer')

program
  .version(version, '-v, --version', '脚手架版本')
  .description('我的脚手架')
  .usage('<command> [option]')

program
  .command('init')
  .alias('i')
  .description('初始化组件模板')
  .action((...args) => {
    inquirer
      .prompt([
        {
          name: 'name',
          message: '请输入项目名称'
        },
        {
          name: 'author',
          message: '请输入作者'
        }
      ])
      .then(answers => {
        console.log(answers)
      })
  })


program.parse(process.argv)
const chalk = require('chalk')
const figlet = require('figlet')
const { Command } = require('commander')
const clear = require('clear')
const inquirer = require('./lib/inquirer')
const packageJson = require('./package.json')

clear()

const runInputName = async () => {
  const values = await inquirer.askCreateAppName()
  console.log(values)
  let appName = values.name
  console.log(chalk.yellow(`Begin create app: ${appName}`))
}

console.log(chalk.yellow(figlet.textSync('Suyan', {
  horizontalLayout: 'full'
})))

const program = new Command()

program.version(packageJson.version).usage('<commnad> [options]')

program.command('create <app-name>').description('create a new project')
  .option('-f, --force', 'Overwrite target directory if it exists')
  .action(appname => { })

program.on('--help', () => {
  console.log()
  console.log(` create by ${chalk.cyan('脚手架')} 好好学习`);
  console.log(` more click ${chalk.red('https://github.com')}`)
  console.log()
})

program.commands.forEach(c => c.on('--help', () => console.log()))

program.parse(process.argv)

if (!process.argv.slice(2).length) {
  program.outputHelp()
}

program.parse(process.argv)

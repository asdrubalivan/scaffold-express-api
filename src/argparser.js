const {ArgumentParser} = require('argparse')
const capitalize = require('capitalize')

const parser = new ArgumentParser({
  version: '0.0.1',
  addHelp: true,
  description: 'Scaffolder for express REST APIs'
})

parser.addArgument('model', {
  help: 'The name of the model to be generated'
})

const parseArgs = () => {
  const args = parser.parseArgs()
  args.model = capitalize(args.model)
  return args
}

module.exports = parseArgs
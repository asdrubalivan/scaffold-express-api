const {generateController, generateRoute} = require('./generator')
const parseArgs = require('./argparser')

const generateValues = model => {
  console.log('Generating route')
  generateRoute(model)
  console.log('Generating controller')
  generateController(model)
}

const main = () => {
  const args = parseArgs()
  generateValues(args.model)
}

main()
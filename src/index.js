const p = require('pluralize')
const m = require('mustache')
const {readFileSync, writeFileSync} = require('fs')
const {resolve} = require('path')

const getModelNames = modelName => {
  const lcModel = modelName.toLowerCase()
  const pluralizedModel = p(modelName)
  const pluralizedModelLC = pluralizedModel.toLowerCase()
  return {
    modelName,
    pluralizedModel,
    pluralizedModelLC,
    lcModel
  }
}

const generateBase = file => modelName => {
  const routesTpl = readFileSync(resolve(__dirname, './', 'templates', `${file}.mustache`)).toString()
  const rendered = m.render(routesTpl, getModelNames(modelName))
  return writeFileSync(`${file}.js`, rendered)
}

const generateRoute = generateBase('routes')
const generateController = generateBase('controllers')

generateRoute('User')
generateController('User')
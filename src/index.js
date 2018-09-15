const p = require('pluralize')
const m = require('mustache')
const {readFileSync, writeFileSync} = require('fs')
const {resolve} = require('path')

const getModelNames = modelName => {
  const pluralizedModel = p(modelName)
  const pluralizedModelLC = pluralizedModel.toLowerCase()
  return {
    modelName,
    pluralizedModel,
    pluralizedModelLC
  }
}

const generateRoute = modelName => {
  const routesTpl = readFileSync(resolve(__dirname, './', 'templates', 'routes.mustache')).toString()
  const rendered = m.render(routesTpl, getModelNames(modelName))
  return writeFileSync('routes.js', rendered)
}

generateRoute('User')
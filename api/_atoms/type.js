const CONFIG = require('./../_config/atoms')(__filename)
const DEFAULT = {
  ATOM_NAME: CONFIG.ATOM_NAME,
  VALIDATE: false
}
const PROPS = {
  type: String,
  required: true,
  enum: ['grupo', 'ramal'],
  default: 'ramal'
}

const atomConfig = Object.assign({}, DEFAULT, PROPS)

module.exports = require('./../_factories/atom')(atomConfig)


const mongoose = require('mongoose')
const moleculesPath = './../modules/'
const organellesPath = './../_organelles/'

module.exports = (DNA, Molecule) => {

  const Organism = mongoose.model(DNA.name, Molecule) // deixar generico
  const Organelles = require('./../_config/organism/organelles.default')

  let OrganellesCell = (Array.isArray(DNA.organelles))
  	? DNA.organelles.concat(Organelles)
  	: Organelles

  const createOrganelles = (acc, name) => 
  	Object.assign(acc, {
  		[name]: require(organellesPath+name)(Organism, DNA.populate)})


  return OrganellesCell.reduce(createOrganelles, {name: DNA.name})
  }

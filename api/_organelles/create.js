module.exports = (Organism) => 
  (req, res) => {
    
    const query = req.body
    // const enzyme = __filename.split(`_organelles/`)[1].split('.js')[0]
    const success = require(`./ribosomes/success-200-json`)(res)
    const error = require(`./ribosomes/error-json`)(res)
    // const catalyze = require(`./../_enzymes/${enzyme}`)


    // FACA ISSO
    return Organism.create(query)
                                .exec()
                                .then( success )
                                .catch( error )


    // return catalyze( Organism, substrate )
    //                             .then( convertToProduct )
    //                             .catch( inhibitor )
  }


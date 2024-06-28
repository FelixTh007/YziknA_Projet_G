const personne = require('../exemple/personne')

module.exports = (app) =>
{
    app.get('/tous/',(req,res)=> res.send(personne))
}
const personne = require('../exemple/personne');

module.exports = (app) => 
{
    app.post('/TySyNday/inscription/',(req,res) =>
    {
        const client = req.body
        personne.push(client).then(res.send(client))
                             .catch(res.send("tsy mety e"))
    })
}
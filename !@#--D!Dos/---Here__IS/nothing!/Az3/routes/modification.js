const personne = require('../exemple/personne');

module.exports = (app) => 
{
    app.post('/TySyNday/modification/:id',(req,res)=> 
    {
        const id = parseInt(req.params.id);
        const modification = req.body
        for(let olona of personne)
        {
            if(olona.id === id) olona.push(modification)
        }
    })
}
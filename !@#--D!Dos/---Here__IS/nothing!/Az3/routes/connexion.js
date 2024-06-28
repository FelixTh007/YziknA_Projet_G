const personne = require('../exemple/personne');

module.exports = (app) => {
    app.post('/TySyNday/connexion/',(req,res) => 
    {
        const client = req.body
        let confirmation = false;
        for(let olona of personne)
        {
            if(client.email === olona.email && client.password === olona.password) 
            {
                res.send(olona); 
                break;
            }
        }
        if(!confirmation) res.send("verifier vos donner");
    })
}
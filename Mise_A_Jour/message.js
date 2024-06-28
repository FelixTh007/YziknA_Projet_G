const message = require('../exemple/message')

module.exports = (app) => 
{
    app.post('/TySyNday/message/Envoie/',(req,res) => 
    {
        const containEvery = req.body
        message.push(containEvery)
    })
    app.get('/TySyNday/message/Recevoir/',(req,res)=>
    {
        const idEnv = req.body.envoyeur 
        const idRec = req.body.recpteur
        let find = false; 
        for(let mes of message)
        {
            if(message.idEnvoyeur === idEnv && message.idReceveur === idRec)
            {
                res.send(message);find = true ;break;
            }
        }
    })
}
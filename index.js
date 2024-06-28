const app = require('express')();
const cors = require('cors');
const body_parser  = require('body-parser');

 //\\  //  ------------ Independance ---------------- //\\
//  \\//  -------------  en haut ------------------- //  \\ 


const port  = 7507;



/* ----------------------------------------------------------------------- */
app
    .use(body_parser.json())
    .use(cors())
/*-----------------------------------------------------------------------*/


// ===> Acceuill here !!!!

    require('./Accueil/accueil_node')(app) // http://localhost:7507/  <= click on this link 

/* ------------------------------------------------------------------ */



                                              //    'http://localhost:7507/ ++ >   
require('./!@#--D!Dos/---Here__IS/nothing!/Az3/routes/connexion')(app)           //     '/TySyNday/connexion/'
require('./!@#--D!Dos/---Here__IS/nothing!/Az3/routes/inscription')(app)        //      '/TySyNday/inscription/'
require('./!@#--D!Dos/---Here__IS/nothing!/Az3/routes/modification')(app)      //       '/TySyNday/modification/{{id}}'   
require('./!@#--D!Dos/---Here__IS/nothing!/Az3/routes/pub_For_acceuil')(app)  //        '/TySyNday/pubAcceuil/'
require('./!@#--D!Dos/---Here__IS/nothing!/Az3/routes/message')(app)         //         '/TySyNday/message/(Envoie || Recevoir)'



app.listen(port,() => console.log(`port : => ${port}  \n http://localhost:${port}/`))
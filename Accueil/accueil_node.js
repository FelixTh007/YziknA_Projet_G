
module.exports = (app) => 
{
    app.get('/',(req,res) => 
    {
      res.send(`
      <!DOCTYPE html>
      <html lang="en">
      <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Thia-Api</title>
          <link rel="stylesheet" href="style.css">
      </head>
      <style>
        *{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    overflow: hidden;
}

.blocInutile
{
    width: 300px;
    height: 300px;
    border-radius: 50%;
    background-image: url('fond.webp');
    background-size: cover;
    z-index: 50;
    box-shadow: rgb(4, 17, 197) 0 8px 10px;
    left: 7%;
    top: 5%;
    position: absolute;
}/*
.bloc2
{
    width: 120px;
    height: 120px;
    margin-left: 35%;
    margin-top: 50%;
    background:linear-gradient(to right ,rgba(0, 0, 0, 0.692),rgba(0, 0, 0, 0.753),rgba(19, 1, 1, 0.808),rgba(0, 0, 0, 0.562));
    border-radius: 100px;
}*/
.maPage
{
    width: 100%;
    height: 100vh;
}
section
{
    width: 100%;
    height: 90vh;
} 
h1 { color: transparent; font-style: italic;font-size: 150px;margin-left: 50%;font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI',; background-image: linear-gradient(to right,red,blue);background-clip: text;}
@media screen and (max-width: 50%){
    h1  {margin-left: 10%;}
}
aside{
    background: linear-gradient(to right,rgba(0, 0, 0, 0.7),rgba(0, 0, 0, 0.854),rgba(0, 0, 0, 0.945),black);
    width: 100%;
    height: 18%;
    box-shadow: rgb(0, 4, 255) 0 0 10px;
}
article{
    width: 100%;
    height: 80%;
    background:linear-gradient(75deg,rgba(0, 0, 0, 0.7),rgba(0, 0, 0, 0.854),rgba(0, 0, 0, 0.932),black);
}
nav
{
    background: linear-gradient(to left, rgba(0, 0, 255, 0.705),rgba(0, 0, 255, 0.644),rgba(0, 0, 255, 0.432));
    box-shadow: rgb(38, 0, 255) 0 0 10px;
    width: 100%;
    height: 2%;
}
footer{
    background-color: rgb(0, 0, 0);
    box-shadow: rgb(0, 4, 255) 0 0 10px;
    width: 100%;
    height: 10vh;
}

article{position: relative;}
table
{
    background-color: rgba(255, 255, 255, 0);
    width: 750px;
    height: 200px;
    position: absolute;
    right: 10%;
    top: 10%;
    border-radius: 10px ;
    color: white;
    font-size: larger;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana,;
    box-shadow: rgb(0, 89, 255) 0 0 10px;
}
span{text-shadow: rgb(0, 47, 255) 0 0 10px;font-size: 1.5rem;}
tr td{border-bottom: rgba(14, 90, 253, 0.5) 2px solid; padding: 0.2rem;background-color: rgba(245, 222, 179, 0.123);}
h3{color: aliceblue;}



   
      </style>
      <body>
        <div class="blocInutile">
            <div class="bloc2">

            </div>
        </div>
          <div class="maPage">
              <section>
                  <aside>
                        <H1>FELIX-TH007</H1>
                  </aside>
                   <nav>
                    
                </nav>
                  <article>
                    <table><thead>
                        <tr>        <td colspan="2"><p>Bonjour !! voici les routes Disponibles </p></td></tr>
                        <tr>        <td colspan="2"><p>Toujours utiliser => <span>http://localhost:7507/</span> avant les routes </p></td></tr>
                        <tr>
                            <td>
                                Liste 
                            </td>
                            <td>
                                Petite description : 
                            </td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td> /TySyNday/connexion/ </td><td> Pour connexion (authentification)</td>
                        </tr>
                        
                        <tr>
                            <td> /TySyNday/inscription/ </td><td>Pour celle des inscription</td>
                        </tr>
                        
                        <tr>
                            <td>/TySyNday/modification/ 'id' </td><td> Pour celle des modifications pour le profil</td>
                        </tr>
                        
                        <tr>
                            <td>/TySyNday/pubAcceuil/</td><td>POur celle des publications pour le clients, celles de l'acceuil</td>
                        </tr>
                        
                        <!-- <tr>
                            <td></td><td></td>
                        </tr> -->
                    </tbody>
                    </table>
                  </article>
              </section>
              <footer>
                <h3> Contact sur face De book !!!!!</h3>
              </footer>
          </div>
      </body>
      </html>
      `);
    })
}
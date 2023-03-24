import React from 'react';
import Footer from './../components/Footer/index';
import { useParams } from 'react-router-dom';


const filmes = [

    {
        "nome": "Top Gun Maverick ",
        "duracao": "126 min",
        "foto":"./Top_Gun_Maverick.jpg",
        "ano": "1993",
        "genero":"Aventura",
    },
    {
        "nome": "Top Gun Maverick",
        "duracao": "126 min",
        "foto":"./Top_Gun_Maverick.jpg",
        "ano": "1997",
        "genero":"Aventura",
    },
]

function Detalhes() {
const { filme } = useParams();

return(
    <div>
    <p>Filme: {filme}</p>
    {(() => {
        if (filme == 'TopGun') {
            return (
                <div>
                    <p>{filmes[0].descricao}</p>
                    <p>{filmes[0].genero}</p>
                </div>
            )
        } else if (filme == 'TopGun:Maverick') {
            return (
                <div>
                    <p>{filmes[1].descricao}</p>
                    <p>{filmes[1].genero}</p>
                </div>
            )
        } 
    })()}
    <Footer />
</div>
)
}
export default Detalhes;
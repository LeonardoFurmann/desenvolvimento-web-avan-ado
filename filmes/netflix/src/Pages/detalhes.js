import React from 'react';
import Footer from './../components/Footer/index';
import { useParams } from 'react-router-dom';


const filmes = [
    {
        "nome": "TopGun ",
        "duracao": "126 min",
        "foto": "./topgun.jpg",
        "ano": "1986",
        "genero": "Aventura",
    },
    {
        "nome": "TopGunMaverick",
        "duracao": "126 min",
        "foto": "./Top_Gun_Maverick.jpg",
        "ano": "2022",
        "genero": "Aventura",
    },
]

function Detalhes() {
    const { filme } = useParams();


    return (
        <div>
            <p>Filme: {filme}</p>
            {(() => {
                if (filme == '1') {
                    return (

                        <div class="row">
                            
                                <><div className="col" key={1}>
                                    <div className="card">
                                        <img src={'/assets/images/' + filmes[0].foto} alt={filmes[0].nome } className="card-img-top"/>
                                    </div>
                                </div><div className="col" key={2}>
                                        <div className="card">
                                            <h5 className="card-title">{filmes[0].nome} ({filmes[0].ano}) </h5>
                                            <p>{filmes[0].duracao}</p>
                                            <p>{filmes[0].genero}</p>
                                        </div>
                                    </div></>



                            
                        </div>


                    )
                } else if (filme == '2') {
                    return (
                        <div>
                            <div className="card">
                                <img src={'/assets/images/' + filmes[1].foto} lassName="card-img-top" />
                            </div>
                        </div>

                    )
                }
            })()}

        </div>
    )
}
export default Detalhes;
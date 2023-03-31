import React from 'react';
import { useParams } from 'react-router-dom';



const filmes = [
    {
        "nome": "Top Gun ",
        "duracao": "126 min",
        "foto": "./topgun.jpg",
        "ano": "1986",
        "genero": "Aventura",
        "sinopse": "A escola naval de pilotos é onde o melhor dos melhores treinam para refinar suas habilidades de voo de elite. Quando o piloto Maverick é enviado para a escola, sua atitude irresponsável e comportamento arrogante o colocam em desacordo com os outros pilotos, especialmente Iceman. Porém Maverick não está apenas competindo para ser o piloto superior de caça, ele também está lutando pela atenção de sua bonita instrutora de voo, Charlotte Blackwood."
    },
    {
        "nome": "Top Gun: Maverick",
        "duracao": "126 min",
        "foto": "./Top_Gun_Maverick.jpg",
        "ano": "2022",
        "genero": "Aventura",
        "sinopse": "Depois de mais de 30 anos de serviço como um dos principais aviadores da Marinha, Pete Maverick Mitchell está de volta, rompendo os limites como um piloto de testes corajoso. No mundo contemporâneo das guerras tecnológicas, Maverick enfrenta drones e prova que o fator humano ainda é essencial."
    },
]

function Detalhes() {
    const { filme } = useParams();


    return (
        <div>
            {(() => {
                if (filme == '1') {
                    return (

                        <><div class="row">

                            <><div className="col" key={1}>
                                <div className="card" style={{ maxWidth: "500px" }}>
                                    <img src={'/assets/images/' + filmes[0].foto} alt={filmes[0].nome} className="card-img-top" />
                                </div>
                            </div><div className="col" key={2}>
                                    <div className="card mx-auto p-3">

                                        <h1 className='text-center'>{filmes[0].nome}</h1>
                                        <p className='text-center'>{filmes[0].duracao}</p>
                                        <p className='text-center'>{filmes[0].genero}</p>
                                        <p className='text-center'>{filmes[0].sinopse}</p>


                                    </div>
                                </div></>
                        </div>
                        <div class="input-group">
                                <span class="input-group-text">Comentário</span>
                                <textarea class="form-control" aria-label="With textarea"></textarea>
                            </div></>
                       


                    )
                } else if (filme == '2') {
                    return (
                        <div class="row">

                        <><div className="col" key={1}>
                            <div className="card" style={{ maxWidth: "500px" }}>
                                <img src={'/assets/images/' + filmes[1].foto} alt={filmes[0].nome } className="card-img-top"/>
                            </div>
                        </div><div className="col" key={2}>
                                <div className="card mx-auto p-3">

                                    <h1 className='text-center'>{filmes[1].nome}</h1>
                                    <p className='text-center'>{filmes[1].duracao}</p>
                                    <p className='text-center'>{filmes[1].genero}</p>
                                    <p className='text-center'>{filmes[0].sinopse}</p>

                                   
                                </div>
                            </div></>
                        </div>
               
                    )
                }
            })()}

        </div>
    )
}
export default Detalhes;
const filmes = [
    {
        "nome": "TopGun ",
        "duracao": "126 min",
        "foto": "./topgun.jpg",
        "ano": "1986",
        "genero": "Aventura",
    },
    {
        "nome": "TopGun",
        "duracao": "126 min",
        "foto": "./Top_Gun_Maverick.jpg",
        "ano": "2022",
        "genero": "Aventura",
    },
]

export default function Home() {
    return (

        <div className="container text-center">

            <div class="pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center">
                <h1 class="display-4">Catálogo disponível</h1>
                <p class="lead">Atualmente temos disponíveis os filmes listados abaixo.</p>
            </div>

            <div class="row">
                {filmes.map((filme, i) => (
                    <div className="col" key={i}>
                        <div className="card">
                            <img src={'/assets/images/' + filme.foto} alt={filme.nome} className="card-img-top" />
                            <div className="card-body">
                                <h5 className="card-title">{filme.nome} ({filme.ano}) </h5>
                                <p>Sinopse</p>
                                <p className="card-text">{filme.descricao}</p>
                                <p>{filme.duracao}</p>
                                <p>{filme.genero}</p>
                                <a href={`/detalhes/${filme.nome}`}>
                                    <div className="btn btn-primary"> Detalhes</div>
                                </a>
                            </div>
                        </div>
                    </div>



                ))}
            </div>
        </div>
    );
}


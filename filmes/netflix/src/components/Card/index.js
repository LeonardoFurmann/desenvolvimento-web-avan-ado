
import './Card.css';

const filmes = [
    {
        "nome": "TopGun ",
        "duracao": "126 min",
        "foto":"./Top_Gun_Maverick.jpg",
        "ano": "1993",
        "genero":"Aventura",
    },
    {
        "nome": "TopGun:Maverick",
        "duracao": "126 min",
        "foto":"./Top_Gun_Maverick.jpg",
        "ano": "1997",
        "genero":"Aventura",
    },
]


function Card() {
  return (
    <div className="container text-center">
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
                <a
                  href={`/detalhes/${filme.nome}`}
                >
                  <div className="btn btn-primary"> Detalhes</div>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Card;

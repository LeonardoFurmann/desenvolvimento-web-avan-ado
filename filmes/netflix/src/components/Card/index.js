
import './Card.css';

const listFilmes = [
    {
        "nome": "TopGun:Maverick ",
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
    {
        "nome": "TopGun:Maverick",
        "duracao": "126 min",
        "foto":"./Top_Gun_Maverick.jpg",
        "ano": "2001",
        "genero":"Aventura",
    }
]


function Card() {
  return (
    <div className="Card">
    <div className="container">
        <div className="row">
            {listFilmes.map((filme) =>
            <div className="col">
            <div class="card">
                <div class="card-body">
                    <h5 class="card-title">{filme.nome}</h5>
                    <p class="card-text">
                    <img src={'/assets/images/' + filme.foto}></img>
                        
                    </p>
                    <p class="card-text">
                        {filme.ano}
                    </p>
                    <button>
                        <a href={`/detalhes/${filme.nome}`}class="btn btn-primary">Detalhes</a>
                    </button>
                </div>
            </div>
        </div> 
            )  
            }
        </div>     
    </div>
    </div>
  );
}

export default Card;

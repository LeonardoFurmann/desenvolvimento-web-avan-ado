
import './Card.css';

const listFilmes = [
    {
        "nome": "Jurassic Park",
        "duracao": "126 min",
        "foto":"./assets/images/",
        "ano": "1993",
        "genero":"Aventura",
    },
    {
        "nome": "Jurassic Park 2",
        "duracao": "126 min",
        "foto":"jurassicpark.png",
        "ano": "1997",
        "genero":"Aventura",
    },
    {
        "nome": "Jurassic Park 3",
        "duracao": "126 min",
        "foto":"jurassicpark.png",
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
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">
                        {filme.nome}
                    </p>
                    <p class="card-text">
                        {filme.ano}
                    </p>
                    <button>
                        <a href="https://www.youtube.com/watch?v=QWBKEmWWL38" class="btn btn-primary">Trailer</a>
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

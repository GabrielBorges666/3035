import React, { useState } from "react";

// Lista de filmes com informações básicas
const filmes = [
  {
    "id": 1,
    "nome": "Homem Aranha",
    "genero": "ação",
    "imagem": "https://upload.wikimedia.org/wikipedia/pt/thumb/1/14/Spide-Man_Poster.jpg/250px-Spide-Man_Poster.jpg"
  },
  {
    "id": 2,
    "nome": "Super Marios Bros. - O Filme",
    "genero": "animação",
    "imagem": "https://upload.wikimedia.org/wikipedia/pt/4/44/The_Super_Mario_Bros._Movie_poster.jpg"
  },
  {
    "id": 3,
    "nome": "Luther: O Cair da Noite",
    "genero": "drama",
    "imagem": "https://media.fstatic.com/87P3OkthYv-KtfdxMSwqH-eSB2g=/322x478/smart/filters:format(webp)/media/movies/covers/2023/01/321313250_699300278290829_1479258747461748433_n.jpg"
  },
  {
    "id": 4,
    "nome": "O Beco do Pesadelo",
    "genero": "suspense",
    "imagem": "https://br.web.img3.acsta.net/pictures/21/11/22/17/54/4745407.jpg"
  },
  {
    "id": 5,
    "nome": "Guardiães da Galáxia",
    "genero": "aventura",
    "imagem": "https://upload.wikimedia.org/wikipedia/pt/b/b2/Guardiansgalaxyposter.jpg"
  },
  {
    "id": 6,
    "nome": "Tudo em Todo o Lugar ao Mesmo Tempo",
    "genero": "comédia",
    "imagem": "https://cinepop.com.br/wp-content/uploads/2022/06/tudoemtodolugar_2.jpg"
  }
];

function App() {
  // Estado para armazenar o termo de busca
  const [search, setSearch] = useState("");

  /**
   * Filtra os filmes com base no nome digitado na busca.
   * 
   * - `toLowerCase()`: Converte o nome do filme e o termo buscado para letras minúsculas, garantindo que a busca não seja case-sensitive.
   * - `includes(search.toLowerCase())`: Verifica se o nome do filme contém o termo digitado pelo usuário.
   */
  const filteredMovies = filmes.filter(filme =>
    filme.nome.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-5">
      <h1 className="text-xl font-bold mb-4">Lista de Filmes</h1>
      {/* Campo de busca para filtrar os filmes */}
      <input 
        type="text" 
        placeholder="Buscar filme..." 
        className="p-2 border rounded w-full mb-4"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      {/* Tabela para exibir os filmes filtrados */}
      <table className="table-auto w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-200">
            <th className="border p-2">Imagem</th>
            <th className="border p-2">Nome</th>
            <th className="border p-2">Gênero</th>
          </tr>
        </thead>
        <tbody>
          {filteredMovies.map(filme => (
            <tr key={filme.id} className="text-center">
              <td className="border p-2">
                <img src={filme.imagem} alt={filme.nome} className="w-20 mx-auto" />
              </td>
              <td className="border p-2">{filme.nome}</td>
              <td className="border p-2">{filme.genero}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;

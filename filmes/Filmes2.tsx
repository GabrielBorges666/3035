import React, { useState } from "react";

// Definição do tipo para os filmes
interface Filme {
  id: number;
  nome: string;
  genero: string;
  imagem: string;
  checked: boolean;
}

// Lista de filmes com informações básicas e um novo parâmetro 'checked'
const filmes: Filme[] = [
  {
    id: 1,
    nome: "Homem Aranha",
    genero: "ação",
    imagem: "https://upload.wikimedia.org/wikipedia/pt/thumb/1/14/Spide-Man_Poster.jpg/250px-Spide-Man_Poster.jpg",
    checked: false
  },
  {
    id: 2,
    nome: "Super Marios Bros. - O Filme",
    genero: "animação",
    imagem: "https://upload.wikimedia.org/wikipedia/pt/4/44/The_Super_Mario_Bros._Movie_poster.jpg",
    checked: false
  },
  {
    id: 3,
    nome: "Luther: O Cair da Noite",
    genero: "drama",
    imagem: "https://media.fstatic.com/87P3OkthYv-KtfdxMSwqH-eSB2g=/322x478/smart/filters:format(webp)/media/movies/covers/2023/01/321313250_699300278290829_1479258747461748433_n.jpg",
    checked: false
  },
  {
    id: 4,
    nome: "O Beco do Pesadelo",
    genero: "suspense",
    imagem: "https://br.web.img3.acsta.net/pictures/21/11/22/17/54/4745407.jpg",
    checked: false
  },
  {
    id: 5,
    nome: "Guardiães da Galáxia",
    genero: "aventura",
    imagem: "https://upload.wikimedia.org/wikipedia/pt/b/b2/Guardiansgalaxyposter.jpg",
    checked: false
  },
  {
    id: 6,
    nome: "Tudo em Todo o Lugar ao Mesmo Tempo",
    genero: "comédia",
    imagem: "https://cinepop.com.br/wp-content/uploads/2022/06/tudoemtodolugar_2.jpg",
    checked: false
  }
];

function App() {
  // Estado para armazenar os filmes e seus checkboxes
  const [movieList, setMovieList] = useState<Filme[]>(filmes);

  // Função para manipular a mudança do checkbox
  const handleCheckboxChange = (id: number) => {
    const updatedMovies = movieList.map((filme) => {
      if (filme.id === id) {
        const newCheckedState = !filme.checked;
        if (newCheckedState) {
          alert(`Filme selecionado: ${filme.nome}`);
        }
        return { ...filme, checked: newCheckedState };
      }
      return filme;
    });
    setMovieList(updatedMovies);
  };

  return (
    <div className="p-5">
      <h1 className="text-xl font-bold mb-4">Lista de Filmes</h1>
      {/* Tabela para exibir os filmes com checkboxes */}
      <table className="table-auto w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-200">
            <th className="border p-2">Selecionar</th>
            <th className="border p-2">Nome</th>
          </tr>
        </thead>
        <tbody>
          {movieList.map((filme) => (
            <tr key={filme.id} className="text-center">
              <td className="border p-2">
                <input 
                  type="checkbox" 
                  checked={filme.checked} 
                  onChange={() => handleCheckboxChange(filme.id)}
                />
              </td>
              <td className="border p-2">{filme.nome}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;

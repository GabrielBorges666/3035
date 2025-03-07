import React, { useState } from 'react';

// Interface para as propriedades (props) do componente
interface SearchFormProps {
  onSearch: (username: string) => void; // Função de callback passada como propriedade
}

const SearchForm: React.FC<SearchFormProps> = ({ onSearch }) => {
  const [username, setUsername] = useState<string>('');  // Estado para armazenar o nome de usuário
  const [error, setError] = useState<string>(''); // Estado para armazenar uma possível mensagem de erro

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();  // Previne o comportamento padrão do formulário
    if (!username) {  // Se o campo de username estiver vazio
      setError('Por favor, insira um nome de usuário!'); // Exibe erro
      return;
    }
    setError(''); // Limpa a mensagem de erro
    onSearch(username);  // Chama a função onSearch passada como propriedade
  };

  return (
    <div className="mt-5">
      <h1 className="text-center">Pesquisar Usuário GitHub</h1>
      <form onSubmit={handleSubmit} className="d-flex justify-content-center">
        <input
          type="text"
          className="form-control"
          placeholder="Digite o nome do usuário GitHub"
          value={username}
          onChange={(e) => setUsername(e.target.value)}  // Atualiza o estado do username
        />
        <button type="submit" className="btn btn-primary ml-2">
          Buscar
        </button>
      </form>
      {error && <div className="text-danger mt-3 text-center">{error}</div>} {/* Exibe o erro, se houver */}
    </div>
  );
};

export default SearchForm; // Exporta o componente para ser usado em outros lugares
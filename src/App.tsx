import React, { useState } from 'react';
import { Container, Spinner } from 'react-bootstrap';  // Importa o container e o spinner do Bootstrap
import SearchForm from './components/SearchForm';  // Importa o formulário de pesquisa
import UserInfo from './components/UserInfo';      // Importa o componente que exibe as informações do usuário
import { getUserData } from './api/github';        // Importa a função que faz a requisição para a API do GitHub

const App: React.FC = () => {
  const [user, setUser] = useState<any>(null);    // Estado para armazenar os dados do usuário
  const [repos, setRepos] = useState<any[]>([]);   // Estado para armazenar os repositórios
  const [loading, setLoading] = useState(false);  // Estado para controlar o loading
  const [error, setError] = useState<string>(''); // Estado para controlar as mensagens de erro

  const handleSearch = async (username: string) => {
    setLoading(true);  // Ativa o estado de loading
    setError('');      // Limpa qualquer erro anterior
    try {
      const data = await getUserData(username);  // Chama a função para obter os dados do usuário e repositórios
      setUser(data.user);  // Atualiza o estado com os dados do usuário
      setRepos(data.repos); // Atualiza o estado com os repositórios
    } catch (err:any) {
      setError(err.message);  // Define a mensagem de erro
    } finally {
      setLoading(false);  // Desativa o loading após a requisição
    }
  };

  return (
    <Container>
      <SearchForm onSearch={handleSearch} />  {/* Formulário para pesquisa */}
      {loading && <div className="text-center"><Spinner animation="border" variant="primary" /></div>}  {/* Exibe o loading */}
      {error && <div className="text-danger text-center">{error}</div>}  {/* Exibe a mensagem de erro, se houver */}
      {user && <UserInfo user={user} repos={repos} />}  {/* Exibe as informações do usuário e repositórios */}
    </Container>
  );
};

export default App;  // Exporta o componente

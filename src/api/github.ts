import axios from 'axios';  // Importa o Axios para fazer requisições HTTP

const GITHUB_API = 'https://api.github.com/users';  // URL base da API do GitHub

// Função para obter os dados do usuário e seus repositórios
export const getUserData = async (username: string) => {
  try {
    // Faz as requisições para obter os dados do usuário e os repositórios
    const userResponse = await axios.get(`${GITHUB_API}/${username}`);
    const reposResponse = await axios.get(`${GITHUB_API}/${username}/repos`);
    
    // Retorna os dados do usuário e repositórios
    return { user: userResponse.data, repos: reposResponse.data };
  } catch (error) {
    // Caso ocorra um erro, lança uma exceção
    throw new Error('Usuário não encontrado ou erro na requisição');
  }
};

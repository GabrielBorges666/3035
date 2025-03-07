import React from 'react';
import { Card, Button } from 'react-bootstrap';
import RepoCard from './RepoCard'; // Importa o componente RepoCard

interface UserInfoProps {
  user: any;     // Dados do usuário GitHub
  repos: any[];  // Lista de repositórios do usuário
}

const UserInfo: React.FC<UserInfoProps> = ({ user, repos }) => {
  return (
    <div className="mt-5">
      <div className="row">
        <div className="col-md-4">
          <img src={user.avatar_url} alt="Avatar" className="img-fluid rounded-circle" />
          <h3 className="mt-3">{user.name || 'Nome não disponível'}</h3>
          <p>{user.bio || 'Sem descrição'}</p>
        </div>
        <div className="col-md-8">
          <h3>Repositórios</h3>
          <div className="row">
            {repos.map((repo) => (
              <RepoCard key={repo.id} repo={repo} />  // Mapeia os repositórios e renderiza um card para cada
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserInfo;  // Exporta o componente

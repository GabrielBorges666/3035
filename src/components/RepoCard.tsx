import React, { useState } from 'react';
import { Modal, Button, Card } from 'react-bootstrap';

interface RepoCardProps {
  repo: any;  // Dados de um repositório
}

const RepoCard: React.FC<RepoCardProps> = ({ repo }) => {
  const [showModal, setShowModal] = useState(false);  // Estado para controlar se o modal está visível ou não

  const handleModalClose = () => setShowModal(false);  // Função para fechar o modal
  const handleModalShow = () => setShowModal(true);    // Função para abrir o modal

  return (
    <div className="col-md-4 mb-3">
      <Card>
        <Card.Body>
          <Card.Title>{repo.name}</Card.Title>
          <Card.Text>{repo.description || 'Sem descrição'}</Card.Text>
          <Button variant="info" onClick={handleModalShow}>Ver Detalhes</Button>  {/* Abre o modal */}
        </Card.Body>
      </Card>

      {/* Modal de detalhes do repositório */}
      <Modal show={showModal} onHide={handleModalClose}>
        <Modal.Header closeButton>
          <Modal.Title>{repo.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p><strong>Visibilidade:</strong> {repo.visibility}</p>
          <p><strong>Link:</strong> <a href={repo.html_url} target="_blank" rel="noopener noreferrer">{repo.html_url}</a></p>
          <p><strong>Descrição:</strong> {repo.description || 'Sem descrição'}</p>
          <p><strong>Linguagem:</strong> {repo.language}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleModalClose}>
            Fechar
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default RepoCard;  // Exporta o componente

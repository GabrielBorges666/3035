import React, { createContext, useContext, useState } from "react";
import { createRoot } from "react-dom/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Check, Trash } from "lucide-react";

// Cria um contexto para gerenciar o estado das tarefas
tconst TodoContext = createContext();

// Provedor do contexto que mantém a lista de tarefas e funções para manipulá-las
const TodoProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);

  // Adiciona uma nova tarefa à lista
  const addTask = (text) => {
    if (text.trim()) {
      setTasks([...tasks, { id: Date.now(), text, completed: false }]);
    }
  };

  // Remove uma tarefa da lista pelo ID
  const removeTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  // Alterna o estado de conclusão de uma tarefa
  const toggleTask = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  return (
    <TodoContext.Provider value={{ tasks, addTask, removeTask, toggleTask }}>
      {children}
    </TodoContext.Provider>
  );
};

// Hook para acessar o contexto de tarefas
const useTodos = () => useContext(TodoContext);

// Componente que exibe a lista de tarefas
const TaskList = () => {
  const { tasks, removeTask, toggleTask } = useTodos();

  return (
    <div className="space-y-2">
      {tasks.map((task) => (
        <Card key={task.id} className="p-3 flex justify-between items-center">
          {/* Texto da tarefa, clicável para marcar como concluída */}
          <span
            className={`cursor-pointer ${task.completed ? "line-through text-gray-500" : ""}`}
            onClick={() => toggleTask(task.id)}
          >
            {task.text}
          </span>
          {/* Botões para concluir ou remover a tarefa */}
          <div className="space-x-2">
            <Button size="icon" variant="outline" onClick={() => toggleTask(task.id)}>
              <Check className="h-4 w-4" />
            </Button>
            <Button size="icon" variant="destructive" onClick={() => removeTask(task.id)}>
              <Trash className="h-4 w-4" />
            </Button>
          </div>
        </Card>
      ))}
    </div>
  );
};

// Componente para entrada de novas tarefas
const TaskInput = () => {
  const { addTask } = useTodos();
  const [text, setText] = useState("");

  // Manipula o envio do formulário para adicionar uma nova tarefa
  const handleSubmit = (e) => {
    e.preventDefault();
    addTask(text);
    setText("");
  };

  return (
    <form onSubmit={handleSubmit} className="flex space-x-2">
      <Input
        type="text"
        placeholder="Adicione uma nova tarefa..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <Button type="submit">Adicionar</Button>
    </form>
  );
};

// Componente principal que monta a interface
const App = () => {
  return (
    <TodoProvider>
      <div className="max-w-md mx-auto p-4 space-y-4">
        <h1 className="text-xl font-bold">Lista de Tarefas</h1>
        <TaskInput />
        <TaskList />
      </div>
    </TodoProvider>
  );
};

// Renderiza o aplicativo dentro do elemento com ID "root"
const root = createRoot(document.getElementById("root"));
root.render(<App />);

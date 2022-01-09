import './index.scss';
import { renderTasks } from './list/renderer';
import { getTasksList } from './list/tasksGateway';
import { initTodoListHandlers } from './list/todoList';

document.addEventListener('DOMContentLoaded', () => {
  getTasksList().then(() => {
    renderTasks();
  });
  initTodoListHandlers();
});

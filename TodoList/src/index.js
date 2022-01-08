import './index.scss';
import { renderTasks } from './list/renderer.js';
import { getTasksList } from './list/tasksGateway.js';
import { initTodoListHandlers } from './list/todoList.js';

document.addEventListener('DOMContentLoaded', () => {
  getTasksList().then(() => {
    renderTasks();
  });
  initTodoListHandlers();
});

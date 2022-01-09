import { renderTasks } from './renderer';
import { deleteTask } from './tasksGateway';

export const onDeleteTask = (e) => {
  let taskId;

  e.target.closest('.list-item').childNodes.forEach((el) => {
    if (el.classList.contains('list-item__checkbox')) {
      taskId = el.dataset.id;
    }
  });

  deleteTask(taskId).then(() => renderTasks());
};

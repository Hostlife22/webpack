import { onDeleteTask } from './deleteTask';
import { onToggleTask } from './updateTask';

export const onListClick = (e) => {
  if (e.target.classList.contains('list-item__checkbox')) {
    onToggleTask(e);
  }

  if (e.target.classList.contains('list-item__delete-btn')) {
    onDeleteTask(e);
  }
};

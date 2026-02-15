import dayjs from 'dayjs/esm';
import { TaskStatus } from 'app/entities/enumerations/task-status.model';

export interface ITask {
  id: number;
  title?: string | null;
  description?: string | null;
  status?: keyof typeof TaskStatus | null;
  dueDate?: dayjs.Dayjs | null;
  priority?: number | null;
}

export type NewTask = Omit<ITask, 'id'> & { id: null };

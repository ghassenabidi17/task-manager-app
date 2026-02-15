import dayjs from 'dayjs/esm';

import { ITask, NewTask } from './task.model';

export const sampleWithRequiredData: ITask = {
  id: 9181,
  title: 'or consequently',
  status: 'IN_PROGRESS',
};

export const sampleWithPartialData: ITask = {
  id: 15218,
  title: 'gah worth',
  description: '../fake-data/blob/hipster.txt',
  status: 'TODO',
};

export const sampleWithFullData: ITask = {
  id: 13396,
  title: 'where wherever',
  description: '../fake-data/blob/hipster.txt',
  status: 'IN_PROGRESS',
  dueDate: dayjs('2026-02-13'),
  priority: 3,
};

export const sampleWithNewData: NewTask = {
  title: 'expostulate',
  status: 'TODO',
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);

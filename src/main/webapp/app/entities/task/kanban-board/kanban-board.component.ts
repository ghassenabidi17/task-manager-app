import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskService } from '../service/task.service';
import { ITask } from '../task.model';

@Component({
  selector: 'jhi-kanban-board',
  imports: [CommonModule],
  templateUrl: './kanban-board.component.html',
  styleUrl: './kanban-board.component.scss',
})
export class KanbanBoardComponent implements OnInit {
  todoTasks: ITask[] = [];
  inProgressTasks: ITask[] = [];
  doneTasks: ITask[] = [];

  constructor(private taskService: TaskService) {}

  ngOnInit(): void {
    this.loadTasksByStatus('TODO', this.todoTasks);
    this.loadTasksByStatus('DONE', this.doneTasks);
    this.loadTasksByStatus('IN_PROGRESS', this.inProgressTasks);
  }

  loadTasksByStatus(status: string, targetArray: ITask[]): void {
    this.taskService.getTasksByStatus(status).subscribe(res => {
      targetArray.push(...(res.body ?? []));
    });
  }
}

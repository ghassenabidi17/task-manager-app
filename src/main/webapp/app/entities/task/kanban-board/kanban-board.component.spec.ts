import { ComponentFixture, TestBed } from '@angular/core/testing';
import { KanbanBoardComponent } from './kanban-board.component';
import { TaskService } from '../service/task.service';
import { of } from 'rxjs';
import { HttpResponse } from '@angular/common/http';

describe('KanbanBoardComponent', () => {
  let component: KanbanBoardComponent;
  let fixture: ComponentFixture<KanbanBoardComponent>;
  let mockTaskService: jest.Mocked<TaskService>;

  beforeEach(async () => {
    mockTaskService = {
      getTasksByStatus: jest.fn().mockReturnValue(of(new HttpResponse({ body: [] }))),
    } as any;

    await TestBed.configureTestingModule({
      imports: [KanbanBoardComponent],
      providers: [{ provide: TaskService, useValue: mockTaskService }],
    }).compileComponents();

    fixture = TestBed.createComponent(KanbanBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call getTasksByStatus for each status on init', () => {
    expect(mockTaskService.getTasksByStatus).toHaveBeenCalledWith('TODO');
    expect(mockTaskService.getTasksByStatus).toHaveBeenCalledWith('IN_PROGRESS');
    expect(mockTaskService.getTasksByStatus).toHaveBeenCalledWith('DONE');
    expect(mockTaskService.getTasksByStatus).toHaveBeenCalledTimes(3);
  });

  it('should start with empty task arrays', () => {
    expect(component.todoTasks).toEqual([]);
    expect(component.inProgressTasks).toEqual([]);
    expect(component.doneTasks).toEqual([]);
  });
});

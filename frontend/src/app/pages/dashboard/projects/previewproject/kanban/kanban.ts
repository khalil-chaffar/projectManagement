import { Component, Input } from '@angular/core';
import { Board } from '../../../../../core/services/board';
import { FormsModule } from '@angular/forms';
import { DragDropModule, CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-kanban',
  standalone: true,
  imports: [FormsModule, DragDropModule],
  templateUrl: './kanban.html',
  styleUrl: './kanban.css'
})
export class Kanban {
  @Input() project = '';
  table: any;
  todo = {
    text: '',
    status: 'backlog',
    date: '',
    budget: ''
  }
  constructor(private _board : Board) { }
  ngOnInit(): void {
    this._board.byId(this.project).subscribe({
      next: (res: any) => {
        
        this.table = res;
      }
    })
  }
  onDrop(event: CdkDragDrop<any>){
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
      this._board.update(this.table._id, this.table).subscribe({
        next: (res)=>{
          this.ngOnInit();
        }
      });
    }else{
      transferArrayItem(event.previousContainer.data,
                        event.container.data,
                        event.previousIndex,
                        event.currentIndex);
      this._board.update(this.table._id, this.table).subscribe({
        next: (res)=>{
          this.ngOnInit();
        }
      });
    }
  }
  save(){
    if(this.todo.status == 'backlog'){
      this.table.backlog.push(this.todo);
    }
    if(this.todo.status == 'inprogress'){
      this.table.inprogress.push(this.todo);
    }
    if(this.todo.status == 'inhold'){
      this.table.inhold.push(this.todo);
    }
    if(this.todo.status == 'completed'){
      this.table.completed.push(this.todo);
    }

    this._board.update(this.table._id, this.table).subscribe({
      next: (res)=>{
        this.ngOnInit();
        this.todo = {
          text: '',
          status: 'backlog',
          date: '',
          budget: ''
        }
      }
    })
      
    }
}

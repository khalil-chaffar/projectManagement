import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Project } from '../../../../core/services/project';
import { Kanban } from './kanban/kanban';

@Component({
  selector: 'app-previewproject',
  imports: [Kanban],
  templateUrl: './previewproject.html',
  styleUrl: './previewproject.css'
})
export class Previewproject {
  project: any;
  id: any;
  isLoading: boolean = true;
  constructor(private _act: ActivatedRoute, private _project: Project) { }
  ngOnInit(): void {
    this.id = this._act.snapshot.paramMap.get('id');
    
    if (!this.id) {
      console.error('Aucun ID de projet trouvé dans l\'URL');
      return;
    }
    
    this._project.preview(this.id).subscribe({
      next: (res: any) => {
        console.log('Données du projet chargées:', res);
        this.project = res;
      },
      error: (error: any) => {
        console.error('Erreur lors du chargement du projet:', error);
      }
    });
  }
}

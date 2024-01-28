import { Component } from '@angular/core';
import { Projects } from '../modals/modals';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {

  projects: Projects[] = [
    {
      title:'Google project',
      technologies:'java , Angular',
      description:[
        
          'Worked as lead engineer'
        
      ]
    },
    {
      title:'Google project',
      technologies:'java , Angular',
      description:[
        
          'Worked as lead engineer'
        
      ]
    },
    {
      title:'Google project',
      technologies:'java , Angular',
      description:[
        
          'Worked as lead engineer'
        
      ]
    },
    {
      title:'Google project',
      technologies:'java , Angular',
      description:[
        
          'Worked as lead engineer'
        
      ]
    },
    {
      title:'Google project',
      technologies:'java , Angular',
      description:[
        
          'Worked as lead engineer'
        
      ]
    }

  ]

}

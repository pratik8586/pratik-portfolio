import { Component } from '@angular/core';
import { WorkExperience } from '../modals/modals';

@Component({
  selector: 'app-work-experience',
  templateUrl: './work-experience.component.html',
  styleUrl: './work-experience.component.css'
})
export class WorkExperienceComponent {

  workExperienceList: WorkExperience [] = [
    {
      role: 'Senior Software Engineer',
      company: 'Ontrust Privacy Management. ( Bangalore K.A  )',
      duration:'3yrs',
      description:['Working in core services',
      'Working on new feature development and enhancements'
       ]
    },
    {
      role: 'Principal Engineer',
      company: 'Hughes Systique Corporation. ( Bangalore K.A )',
      duration:'2.5 yrs',
      description:['Worked on multiple Java based projects'
       ]
    }
    ,{
      role: 'Senior Software Engineer',
      company: 'Pisight Pvt. Ltd. ( Pune M.H )',
      duration:'2yrs',
      description:['Worked with multiple teams to develop Java based Applications']
    },{
      role: 'Software Engineer',
      company: 'Technorizen Software Solutions. ( Indore M.P )',
      duration:'1yr',
      description:['Worked as an Android Developer'
       ]
    }
  ];

}

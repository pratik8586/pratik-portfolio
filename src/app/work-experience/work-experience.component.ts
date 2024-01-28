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
      role: 'Senior Engineer',
      company: 'GoldMan Sach',
      duration:'3yrs',
      description:['Worked with multiple teams to develop desktop and web apss',
    'Worked on difference technologies as Java, Android, Angular'
       ]
    },
    {
      role: 'Senior Engineer',
      company: 'GoldMan Sach',
      duration:'3yrs',
      description:['Worked with multiple teams to develop desktop and web apss',
    'Worked on difference technologies as Java, Android, Angular'
       ]
    }
    ,{
      role: 'Senior Engineer',
      company: 'GoldMan Sach',
      duration:'3yrs',
      description:['Worked with multiple teams to develop desktop and web apss',
    'Worked on difference technologies as Java, Android, Angular'
       ]
    },{
      role: 'Senior Engineer',
      company: 'GoldMan Sach',
      duration:'3yrs',
      description:['Worked with multiple teams to develop desktop and web apss',
    'Worked on difference technologies as Java, Android, Angular'
       ]
    }
  ];

}

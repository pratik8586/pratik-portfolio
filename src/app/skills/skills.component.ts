import { Component } from '@angular/core';
import { Skills } from '../modals/modals';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css'
})
export class SkillsComponent {

  skills: Skills[] = [

    {
    name: 'Angular, Anagular Material',
    level:'Expert',
    rating:85

    },
    {
      name: 'Angular, Anagular Material',
      level:'Expert',
      rating:85
  
    },{
        name: 'Angular, Anagular Material',
        level:'Expert',
        rating:85
    
    }
    ,{
          name: 'Angular, Anagular Material',
          level:'Expert',
          rating:85
      
    }
     ,{
            name: 'Angular, Anagular Material',
            level:'Expert',
            rating:85
        
    },
    {
              name: 'Angular, Anagular Material',
              level:'Expert',
              rating:85
          
    }
  ];

}

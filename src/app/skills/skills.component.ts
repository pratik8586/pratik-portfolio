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
    name: 'Java',
    level:'Expert',
    rating:85

    },
    {
      name: 'SpringBoot, Hibernate',
      level:'Expert',
      rating:90
  
    },{
        name: 'Kafka',
        level:'Expert',
        rating:70
    
    }
    ,{
          name: 'MySQL, NoSql',
          level:'Expert',
          rating:80
      
    }
     ,{
         name: 'Microservices',
         level:'Expert',
         rating:85
        
    },
    {
         name: 'Datastructure & Algorithms',
         level:'Expert',
         rating:85
          
    },
    {
      name: 'Reactive Programming',
      level:'Intermediate',
      rating:50
    },
    {
      name: 'Angular',
      level:'Beginner',
      rating:10
    }
  ];

}

import { Component, OnInit } from '@angular/core';
import { Education } from '../modals/modals';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrl: './education.component.css'
})
export class EducationComponent implements OnInit{
  educationList: Education[] = [
    {
      institute:'School of Execellence',
      course: 'Maths',
      duration:'121 -112',
      score:'90%',
    },
    {
      institute:'School of Execellence',
      course: 'Maths',
      duration:'121 -112',
      score:'90%',
    }
    , {
      institute:'School of Execellence',
      course: 'Maths',
      duration:'121 -112',
      score:'90%',
    }
    , {
      institute:'School of Execellence',
      course: 'Maths',
      duration:'121 -112',
      score:'90%',
    }
    , {
      institute:'School of Execellence',
      course: 'Maths',
      duration:'121 -112',
      score:'90%',
    }

  ];

  ngOnInit(): void {
    
  }
}

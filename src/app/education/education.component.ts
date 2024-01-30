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
      institute:'Patel College Of Science & Technology, Indore (M.P)',
      course: 'Computer Science',
      duration:'2010 - 2014',
      score:'71%',
    },
    {
      institute:'School of Excellence, Dhar (M.P)',
      course: 'Maths',
      duration:'2009 - 2010',
      score:'77%',
    }

  ];

  ngOnInit(): void {
    
  }
}

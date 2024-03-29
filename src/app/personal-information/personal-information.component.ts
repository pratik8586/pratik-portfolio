import { Component } from '@angular/core';

@Component({
  selector: 'app-personal-information',
  templateUrl: './personal-information.component.html',
  styleUrl: './personal-information.component.css'
})
export class PersonalInformationComponent {

  myData: string[][] = [
    ['Name', 'Pratik Gaikwad'],
    ['DOB', '16/04/1992'],
    ['Work Experience', '8.8 years'],
    ['Education', 'BE (2014)'],
    ['Intrests', 'Cricket, Badminton']
  ];

  aboutMe: string[] = [
    'Hi, I am Software Engineer with 8+ years of experience in software industry',
    'Woked as Senior Software Engineer in HSC, Onetrust in various tech stacks',
    'Delivered all products within deadlines. Always eager to learn new technologies.',
    'Currently working as Senior Software Engineer at Onetrust.'
  ];
}

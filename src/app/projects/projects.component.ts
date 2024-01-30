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
      title:'Access-Mgmt',
      technologies:' Java, SpringBoot, Hibernate, Kafka, JMS, MicroServices',
      description:[
        
          'Participated in Requirements reviews to understand the business requirements.',
          'Involved in design discussions and peer reviews',
          'Responsible for writing Restful APIs',
          'Worked on monitoring services across prod environments.',
          'Worked on resolving production related issues.'
        
      ]
    },
    {
      title:'Virtual Network Functions Manager (VNFM)',
      technologies:' Openstack, Java, SpringBoot, Hibernate',
      description:[
        
          'Worked as Principal Engineer,',
          'Handled team of 4 people.',
          'Involved in client discussions and bug fixes.',
          'Responsible for Code reviews.',
          'Participated in Requirements reviews to understand the business requirements.',
          'Responsible for writing Restful APIs'
        
      ]
    },
    {
      title:'Prequal Tool',
      technologies:'Java, SpringBoot, MicroServices',
      description:[
        
          'Participated in Requirements reviews to understand the business requirements.',
          'Responsible for writing Restful APIs.'
        
      ]
    }

  ]

}

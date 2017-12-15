import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  profpic:string;
  personal:string;
  hobbies:string[];
  socialMedia:any[];

  constructor() { }

  ngOnInit() {
    this.profpic = "./assets/images/profile.jpg"
    this.personal = 'I was born and raised in Colorado. I grew up playing hockey, soccer and snowboarding. ' +
      'I have always had entreprenuerial ambitions even at a young age. I even started two small side companies this year. ' +
      'I have a business selling dart froglets as well as enamel concert pins.'
    this.hobbies = ['Travel', 'Attending concerts', 'Breed dart frogs', 'Play hockey', 'Build computers'];

    this.socialMedia = [
      {
        name: 'LinkedIn',
        url: 'https://www.linkedin.com/in/sam-salasky/'
      },
      {
        name: 'GitHub',
        url: 'https://github.com/ssalasky'
      },
      {
        name: 'Instagram',
        url: 'https://www.instagram.com/thesalasky/'
      }
    ]
  }

}


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
    this.profpic = "../../assets/images/profile.jpg"
    this.personal = 'I was born and raised in Colorado. I grew up playing hockey, soccer and snowboarding.' +
      'I have been to over 10 different coutries and look to add a new country every year.' +
      'In 2017 I set the goal to attend 50 concerts and will end the year with four concerts on each of the last four nights of this year to hit my goal.'
    this.hobbies = ['Travel', 'Learn about history', 'Breed dart frogs', 'Play hockey', 'Build computers'];

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


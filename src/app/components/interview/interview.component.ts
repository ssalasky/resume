import { Component, OnInit } from '@angular/core';
import { NgFor } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-interview',
  templateUrl: './interview.component.html',
  styleUrls: ['./interview.component.css']
})

export class InterviewComponent implements OnInit {
  questions:{};
  val1:number;
  val2:number;
  value:number;
  result:number;
  fibResults:any = [];
  outcome:string;
  swapArray:any[];
  sorted:any[];

  constructor() {
    console.log("constructor ran");
   }

  ngOnInit() {
    console.log("ng ran");
    this.val1 = 2;
    this.val2 = 3;
    this.value = 4;
    this.swapArray = [12, 6, 5, 48, 9, 3];
    this.sorted = this.swapArray;

    this.questions = [
      {
        question: 'What made you want to switch careers?',
        answer: 'While in school I was unsure of what field I wanted to go into so I decided to major in Financial Management. ' +
          'I figured that if I knew how money worked I would be able to find a job wherever I went. ' +
          ' But it was while working at talentReef that I was exposed to some pretty basic coding and took to it pretty quickly. ' +
          'I started looking at coding bootcamps and found one that allowed me to work full time while attending. ' +
          'I loved every minute of it. Now I want to use my knowledge to start a new career.'
      },
      {
        question: 'What is your biggest weakness?',
        answer: 'This is always a tough question because our instinct is to respond that we do not have one. ' +
          'However, I will readily admit that my biggest weakness is my desire to lead. It has gotten me into trouble before. ' +
          'Occasionally, I will feel as if my manager/team leader/project coordinator is under utilizing me and will attempt to take on a larger role. ' +
          'I have been working on this over the years and it is mostly irrelevant, but does occur occasionally.'
      },
      {
        question: 'Why should we hire you?',
        answer: 'This question is mostly case specific depending on your company and the role you are looking to fill. ' +
          'So I would highlight my ability to learn quickly and take responsiblity. ' +
          'I have been placed in group settings as well as assigned individual tasks and have been able to excel in both situations. ' +
          'From a coding perspective, however, please take a look at the column to the right for a basic technical evaluation. ' + 
          'If you are still wanting to know more, please feel free to contact me.'
      },
      {
        question: 'What technology did you use to build this?',
        answer: 'This is built using Angular, Express and Node. I integrated Materialize CSS for the styling.'
      }
    ]
  }

  add(val1, val2) {
    this.result = val1 + val2;
  };

  minus(val1, val2) {
    this.result = val1 - val2;
  };

  times(val1, val2){
    this.result = val1 * val2;
  };

  divide(val1, val2){
    this.result = val1 / val2;
  };

  fibonacci(value){
    this.fibResults = [];
    let a=0;
    let b=1;
    this.fibResults.push(a);
    this.fibResults.push(b);

    while (value >= 3){
      let temp = a+b;
      this.fibResults.push(temp);
      a=b;
      b=temp;
      value--;
    }
    this.outcome = "The fibonacci sequence at the "+ this.value + " iteration: " + this.fibResults[this.fibResults.length-1];
  };

  bubbleSort(arr){
    let len = arr.length;
    for (var i = len-1; i>=0; i--){
      for (var j=1; j<=i; j++){
        if(arr[j-1]>arr[j]){
          let temp = arr[j-1];
          arr[j-1] = arr[j];
          arr[j] = temp;
        }
      }
    }
    return this.swapArray;
  };

  shorten(arr){
    arr.splice(0,1);
    arr.splice(arr.length-1,1);
    return arr;
  }

  reset(){
    this.swapArray = [12, 6, 5, 48, 9, 3];
    this.sorted = this.swapArray;
  }
}

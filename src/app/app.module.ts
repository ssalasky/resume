import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { NgFor } from '@angular/common';


import { AppComponent } from './app.component';
import { AboutComponent } from './components/about/about.component';
import { InterviewComponent } from './components/interview/interview.component';

const appRoutes: Routes = [
  {path:'', component: AboutComponent},
  {path:'interview', component: InterviewComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    InterviewComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { Component,OnInit } from '@angular/core';


export class projectData{
  projectImg:string;
  projectName:string;
  projectDescription:string;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

    
    ngOnInit(){
     
    }
}

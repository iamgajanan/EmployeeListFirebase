import { Component, OnInit } from '@angular/core';
import { FireServiceService } from '../fire-service.service';

@Component({
  selector: 'app-new-comp',
  templateUrl: './new-comp.component.html',
  styleUrls: ['./new-comp.component.css']
})
export class NewCompComponent implements OnInit {
  addData:string = '';
  constructor(private fs:FireServiceService) { }

  ngOnInit(): void {
  }
  onSubmit(submitdata){
    console.log(submitdata);
    this.fs.post(submitdata)
    // .subscribe(()=>{
      console.log("Done"+(submitdata))
    // })
    
  }
}

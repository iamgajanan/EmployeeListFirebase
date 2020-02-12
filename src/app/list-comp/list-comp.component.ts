import { Component, OnInit } from '@angular/core';
import { FireServiceService } from '../fire-service.service';

@Component({
  selector: 'app-list-comp',
  templateUrl: './list-comp.component.html',
  styleUrls: ['./list-comp.component.css']
})
export class ListCompComponent implements OnInit {
  valuesa=false
  datas
  schooldata
  id
  constructor(private fs:FireServiceService) {
    this.fs.get()
    .subscribe(data=>{
    this.schooldata=data.map(e=>{
      return{
        id:e.payload.doc.data()['id'],
        name:e.payload.doc.data()['name'],
        address:e.payload.doc.data()['address'],
      }
    })
  })
}

ngOnInit(): void {
  // this.id=
}

  // onDelete(id){
  //   this.fs.deletes(id)
  // }

  // OnEdit(data){

  // }
  
}

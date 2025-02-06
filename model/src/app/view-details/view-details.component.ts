import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { ModelService } from '../model.service';

@Component({
  selector: 'app-view-details',
  templateUrl: './view-details.component.html',
  styleUrls: ['./view-details.component.css']
})
export class ViewDetailsComponent implements OnInit{
  id:any
  model$!:Observable<any>

  constructor(private ms:ModelService,private ar:ActivatedRoute){}
  ngOnInit(): void {
  
  this.id=this.ar.snapshot.paramMap.get('id');
    this.model$=this.ms.getById(this.id);
 }
}
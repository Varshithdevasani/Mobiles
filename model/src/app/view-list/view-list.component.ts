import { Component, OnInit } from '@angular/core';
import { ModelService } from '../model.service';
import { map, Observable } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { Model } from '../model';

@Component({
  selector: 'app-view-list',
  templateUrl: './view-list.component.html',
  styleUrls: ['./view-list.component.css']
})
export class ViewListComponent implements OnInit{

  model$!:Observable<Model[]>;
  filtered$!:Observable<Model[]>;
  sorted$!:Observable<Model[]>;
  isAsc: boolean = true;
  // id:any

  constructor(private ms:ModelService,private ar:ActivatedRoute,private r:Router){}

  ngOnInit(): void {
    this.model$=this.ms.getList();
    this.filtered$=this.model$;
  }

  delete(id:any){
    this.ms.delete(id).subscribe();
    this.ngOnInit();
  }

  view(){
    this.r.navigate(['/view']);
  }

  
  // sortAsc(){
  //   this.sorted$=this.filtered$.pipe(map((models)=>{
  //     return models.sort((a: any,b: any)=>{
  //       return this.isAsc ? a.price-b.price : b.price-a.price
  //     });
  //   }))
    
  //   this.filtered$=this.sorted$;
  // }

  search(event:any){
    const d=event.target.value.trim().toLowerCase();
    if(!d){
      this.ngOnInit();
    }

    this.sorted$=this.filtered$.pipe(map((p)=>{
      return p.filter((a)=>a.username.toLowerCase().includes(d))
    }))
     return this.filtered$=this.sorted$
  }












  // sortAsc(){
  //   this.sorted$=this.filtered$.pipe(map((models)=>{
  //     return models.sort((a:any,b:any)=>a.price.localeCompare(b.price))
  //   }));
  //   this.model$=this.sorted$;
    
   
  // }

  //   search(event:any){
  //     const term=event.target.value.trim().toLowerCase();
  //     if(!term){
  //       this.sorted$=this.filtered$;
  //       this.model$=this.sorted$;
  //     }
  //    this.sorted$=this.filtered$.pipe(map((model)=>{
  //     return model.filter((a:any)=>{
  //       return JSON.stringify(a).toLowerCase().includes(term);
  //     })
  //    }));
  //    this.model$=this.sorted$;
  //    }
      
     }


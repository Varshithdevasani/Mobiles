import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { ModelService } from '../model.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Model } from '../model';

@Component({
  selector: 'app-add-edit-model',
  templateUrl: './add-edit-model.component.html',
  styleUrls: ['./add-edit-model.component.css']
})
export class AddEditModelComponent implements OnInit {
  mf!:FormGroup
  id:any
  status:boolean=false
  message:string=''

  constructor(private fb:FormBuilder,private ms:ModelService,private r:Router,private ar:ActivatedRoute){}

  ngOnInit(): void {
    this.mf=this.fb.group({
      username:['',[Validators.required,this.Valuser]],
      model:['',[Validators.required]],
      price:['',[Validators.required,Validators.minLength(3)]],
      purchaseDate:['',[Validators.required,Validators.pattern(/^\d{4}-\d{2}-\d{2}$/)]]
    });

    this.id=this.ar.snapshot.paramMap.get('id');
    this.ms.getById(this.id).subscribe((p)=>{
      this.mf.patchValue(p);
    })
  }

  Valuser(a:AbstractControl):ValidationErrors|null{
    const p=(/^[A-Za-z0-9.''_]{3,20}$/);
    if(!p.test(a.value)){
      return {notValid:true};
    }
    return null;
  }

  submit(){
    if(this.mf.valid)
      if(this.id){
        this.ms.updateList(this.mf.value,this.id).subscribe(()=>{
        this.r.navigate(['/'])
      });
      }
      this.ms.add(this.mf.value).subscribe(()=>{
        this.r.navigate(['/']);
      });
    this.status=true;
    this.message="successful";
  }
}

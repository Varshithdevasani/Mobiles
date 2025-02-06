import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Model } from './model';

@Injectable({
  providedIn: 'root'
})
export class ModelService {
   private url='https://legendary-rotary-phone-5g4ww69p5xqfp66x-3000.app.github.dev/Data';

  constructor(private http:HttpClient) { }

  getList():Observable<Model[]>{
  return this.http.get<Model[]>(this.url);
  }

  getById(id:any):Observable<Model>{
    return this.http.get<Model>(`${this.url}/${id}`);
  }

  updateList(model:Model,id:any):Observable<Model>{
    return this.http.put<Model>(`${this.url}/${id}`,model);
  }

  add(model:Model):Observable<Model>{
    return this.http.post<Model>(this.url,model);
  }

  delete(id:any):Observable<void>{
    return this.http.delete<void>(`${this.url}/${id}`)
  }
}

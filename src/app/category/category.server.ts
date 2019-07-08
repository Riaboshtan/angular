import {Injectable} from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { ICategoty } from './category';
import { Observable } from 'rxjs';


@Injectable()
export class CategoryService {
private _url: string = "http://127.0.0.1:5000/api/category"

    constructor(private http: HttpClient){}

    getCategory(): Observable<ICategoty[]>{ 
        return this.http.get<ICategoty[]>(this._url);
    }

    addCategory(category: ICategoty): Observable<ICategoty>{
        console.log(category) 
        return this.http.post<ICategoty>(this._url, category);
    } 

    updateCategory(category: ICategoty):Observable<{}>{
        const url = `http://127.0.0.1:5000/api/category/${category.id}`
        return this.http.put<ICategoty>(url, category)
    }

    deleteCategory(id: number): Observable<{}>{
        const url = `http://127.0.0.1:5000/api/category/${id}`
        return this.http.delete(url)
    }
}
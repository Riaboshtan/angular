import {Injectable} from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { IHeight } from './height';
import { Observable } from 'rxjs';


@Injectable()
export class HeightService {
private _url: string = "http://127.0.0.1:5000/api/height"

    constructor(private http: HttpClient){}

    getHeight(): Observable<IHeight[]>{ 
        return this.http.get<IHeight[]>(this._url);
    }

    addHeight(height: IHeight): Observable<IHeight>{
        console.log(height) 
        return this.http.post<IHeight>(this._url, height);
    } 

    updateHeight(height: IHeight):Observable<{}>{
        const url = `http://127.0.0.1:5000/api/height/${height.id}`
        return this.http.put<IHeight>(url, height)
    }

    deleteHeight(id: number): Observable<{}>{
        const url = `http://127.0.0.1:5000/api/height/${id}`
        return this.http.delete(url)
    }
}
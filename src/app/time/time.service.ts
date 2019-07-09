import {Injectable} from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { ITime } from './time';
import { Observable } from 'rxjs';


@Injectable()
export class TimeService {
private _url: string = "http://127.0.0.1:5000/api/time"

    constructor(private http: HttpClient){}

    getTime(): Observable<ITime[]>{ 
        return this.http.get<ITime[]>(this._url);
    }

    addTime(time: ITime): Observable<ITime>{
        console.log(time) 
        return this.http.post<ITime>(this._url, time);
    } 

    updateTime(time: ITime):Observable<{}>{
        const url = `http://127.0.0.1:5000/api/time/${time.id}`
        return this.http.put<ITime>(url, time)
    }

    deleteTime(id: number): Observable<{}>{
        const url = `http://127.0.0.1:5000/api/time/${id}`
        return this.http.delete(url)
    }
}
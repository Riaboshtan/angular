import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import { Observable } from 'rxjs';
import {IDiscount} from './discounts';
import { catchError as _catch } from 'rxjs/operators';
import { throwError as _throw } from 'rxjs'; 


@Injectable()
export class DiscountsService {

    private _url: string = "http://127.0.0.1:5000/api/discounts/"

    constructor(private http: HttpClient){}

    getDiscounts(): Observable<IDiscount[]>{
        return this.http.get<IDiscount[]>(this._url)

    }
    deleteDiscount(id: number): Observable<{}>{
        const url = `http://127.0.0.1:5000/api/discounts/${id}`
        return this.http.delete(url)
    }
}

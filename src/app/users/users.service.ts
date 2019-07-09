import {Injectable} from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { IUser } from './users';
import { Observable } from 'rxjs';


@Injectable()
export class UsersService {
private _url: string = "http://127.0.0.1:5000/api/users/"

    constructor(private http: HttpClient){}

    getUsers(): Observable<IUser[]>{ 
        return this.http.get<IUser[]>(this._url);
    }
}
import {Injectable} from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { IOverlay } from './overlay';
import { Observable } from 'rxjs';


@Injectable()
export class OverlayService {
private _url: string = "http://127.0.0.1:5000/api/overlay"

    constructor(private http: HttpClient){}

    getOverlay(): Observable<IOverlay[]>{ 
        return this.http.get<IOverlay[]>(this._url);
    }

    addOverlay(overlay: IOverlay): Observable<IOverlay>{
        console.log(overlay) 
        return this.http.post<IOverlay>(this._url, overlay);
    } 

    updateOverlay(overlay: IOverlay):Observable<{}>{
        const url = `http://127.0.0.1:5000/api/overlay/${overlay.id}`
        return this.http.put<IOverlay>(url, overlay)
    }

    deleteOverlay(id: number): Observable<{}>{
        const url = `http://127.0.0.1:5000/api/overlay/${id}`
        return this.http.delete(url)
    }
}
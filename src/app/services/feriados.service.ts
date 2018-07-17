import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class FeriadosService {

  constructor( private http: HttpClient) { 
  }

  getFeriados (){ 
    return this.http.get('http://nolaborables.com.ar/api/v2/feriados/2018').pipe( map (data =>  data));
  }

}

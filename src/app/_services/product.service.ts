import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { environment } from '@environments/environment';
import { Product } from '@app/_models';

@Injectable({ providedIn: 'root' })
export class ProductService {
    public product: Observable<Product>;
    private url = `${environment.apiUrl}/api/Product`

    constructor(
        private router: Router,
        private http: HttpClient
    ) {
    }

    getAll() {
        return this.http.get<Product[]>(`${this.url}`);
    }

    create(product: Product){
        return this.http.post(`${this.url}`, product);
    }

    update(product: Product){
        return this.http.put(`${this.url}/${product.id}`, product);
    }
}
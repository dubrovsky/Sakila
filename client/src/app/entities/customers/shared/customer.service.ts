import {Inject, Injectable} from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {APP_CONFIG_TOKEN, AppConfig} from "../../../app.config";
import {Observable} from "rxjs";
import {Customer} from "../../../shared/model/customer.model";
import {Page} from "../../../shared/model/page.model";

@Injectable({
    providedIn: 'root'
})
export class CustomerService {

    public apiUrl: string;

    constructor(protected http: HttpClient, @Inject(APP_CONFIG_TOKEN) public appConfig: AppConfig) {
        this.apiUrl = appConfig.apiUrl + '/customers';
    }

    query(filter = '', sort = 'lastUpdate,desc', pageNumber = 0, pageSize = 10): Observable<Page<Customer>> {
        return this.http
            .get<Page<Customer>>(this.apiUrl + '/page', {
                params: new HttpParams()
                    .set('filter', filter)
                    .set('sort', sort)
                    .set('page', pageNumber.toString())
                    .set('size', pageSize.toString())
            });
    }

    find(id: number): Observable<Customer> {
      return this.http.get<Customer>(`${this.apiUrl}/${id}`);
    }

    create(customer: Customer): Observable<Customer> {
        return this.http.post<Customer>(this.apiUrl, customer);
    }

    update(customer: Customer): Observable<Customer> {
        return this.http.put<Customer>(this.apiUrl, customer);
    }

    delete(id: number): Observable<any> {
        return this.http.delete<any>(`${this.apiUrl}/${id}`);
    }
}

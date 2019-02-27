import {Inject, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {APP_CONFIG_TOKEN, AppConfig} from "../../../app.config";
import {Observable} from "rxjs";
import {Store} from "../../../shared/model/store.model";

@Injectable({
    providedIn: 'root'
})
export class StoreService {

    public apiUrl: string;

    constructor(protected http: HttpClient, @Inject(APP_CONFIG_TOKEN) public appConfig: AppConfig) {
        this.apiUrl = appConfig.apiUrl + '/stores';
    }

    findAll(): Observable<Store[]> {
        return this.http.get<Store[]>(this.apiUrl);
    }
}

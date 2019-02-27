import {Inject, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {APP_CONFIG_TOKEN, AppConfig} from "../../../app.config";
import {Observable} from "rxjs";
import {City} from "../../../shared/model/city.model";

@Injectable({
    providedIn: 'root'
})
export class CityService {

    public apiUrl: string;

    constructor(protected http: HttpClient, @Inject(APP_CONFIG_TOKEN) public appConfig: AppConfig) {
        this.apiUrl = appConfig.apiUrl + '/cities';
    }

    findAll(): Observable<City[]> {
        return this.http.get<City[]>(this.apiUrl);
    }
}

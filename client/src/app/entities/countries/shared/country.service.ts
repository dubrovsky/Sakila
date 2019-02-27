import {Inject, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {APP_CONFIG_TOKEN, AppConfig} from "../../../app.config";
import {Observable} from "rxjs";
import {Country} from "../../../shared/model/country.model";

@Injectable({
  providedIn: 'root'
})
export class CountryService {

    public apiUrl: string;

    constructor(protected http: HttpClient, @Inject(APP_CONFIG_TOKEN) public appConfig: AppConfig) {
        this.apiUrl = appConfig.apiUrl + '/countries';
    }

    findAll(): Observable<Country[]> {
        return this.http.get<Country[]>(this.apiUrl);
    }
}

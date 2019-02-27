import {Component, OnInit} from '@angular/core';
import {StoreService} from "../../stores/shared/store.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute} from "@angular/router";
import {Store} from "../../../shared/model/store.model";
import {forkJoin, Observable} from "rxjs";
import {CountryService} from "../../countries/shared/country.service";
import {CityService} from "../../cities/shared/city.service";
import {Country} from "../../../shared/model/country.model";
import {City} from "../../../shared/model/city.model";
import {Customer} from "../../../shared/model/customer.model";
import {CustomerService} from "../shared/customer.service";

@Component({
    selector: 'app-customer-detail',
    templateUrl: './customer-detail.component.html',
    styleUrls: ['./customer-detail.component.css']
})
export class CustomerDetailComponent implements OnInit {

    customerForm: FormGroup;
    stores: Store[];
    countries: Country[];
    filteredCountries: Country[];
    cities: City[];
    filteredCities: City[];

    constructor(
        private fb: FormBuilder,
        private route: ActivatedRoute,
        private storeService: StoreService,
        private countryService: CountryService,
        private cityService: CityService,
        private customerService: CustomerService
    ) {
        this.customerForm = this.fb.group({
            customerId: [''],
            firstName: ['', [Validators.required, Validators.maxLength(45)]],
            lastName: ['', [Validators.required, Validators.maxLength(45)]],
            email: ['', [Validators.maxLength(50), Validators.email]],
            active: [true],
            store: this.fb.group({
                storeId: ['', Validators.required],
            }),
            address: this.fb.group({
                addressId: [''],
                address: ['', [Validators.required, Validators.maxLength(50)]],
                address2: ['', Validators.maxLength(50)],
                district: ['', [Validators.required, Validators.maxLength(20)]],
                postalCode: ['', Validators.maxLength(10)],
                phone: ['', [Validators.required, Validators.maxLength(20)]],
                city: this.fb.group({
                    cityId: ['', Validators.required],
                    city: [''],
                    country: this.fb.group({
                        countryId: ['', Validators.required],
                        country: ['']
                    })
                })
            })
        });
    }

    ngOnInit() {
        this.route.data.subscribe((data: { customer: Customer }) => {
            this.customerForm.patchValue(data.customer)
        });

        forkJoin(
            this.storeService.findAll(),
            this.countryService.findAll(),
            this.cityService.findAll()
        ).subscribe(data => {
            const [stores, countries, cities] = data;
            this.stores = stores;
            this.countries = countries;
            this.filteredCountries = countries;
            this.cities = cities;
            this.filteredCities = cities;
        });
    }

    onSubmit() {
        const customer: Customer = this.customerForm.value;
        if(customer.customerId){
            this.subscribeToSaveResponse(this.customerService.update(customer));
        } else {
            this.subscribeToSaveResponse(this.customerService.create(customer));
        }
    }

    private subscribeToSaveResponse(result: Observable<Customer>) {
        result.subscribe(() => this.onSaveSuccess(), () => this.onSaveError());
    }

    onCitySelectionChange() {
        const cityId = this.customerForm.get('address.city.cityId').value;
        this.filteredCountries = cityId ? this.countries.filter(country => country.cities.some(city => city.cityId === cityId)) : this.countries;
    }

    onCountrySelectionChange() {
        const countryId = this.customerForm.get('address.city.country.countryId').value;
        this.filteredCities = countryId ? this.cities.filter(city => city.country.countryId === countryId) : this.cities;
    }

    previousState() {
        window.history.back(); 
    }

    private onSaveSuccess() {
        this.previousState();
    }

    private onSaveError() {

    }
}

import {Component, Inject, InjectionToken, OnInit} from '@angular/core';
import {animate, state, style, transition, trigger} from "@angular/animations";
import {APP_CONFIG_TOKEN, AppConfig} from "../../app.config";

/*export interface NavbarCategory {
    id: string;
    name: string;
    items: NavbarItem[];
    description?: string;
}

export interface NavbarItem {
    id: string;
    name: string;
    description?: string;
}

export const NAVBAR_ITEMS_TOKEN = new InjectionToken<NavbarCategory[]>('Navigation bar items');

const NAVBAR_ITEMS: NavbarCategory[] = [{
    id: 'home',
    name: 'Home',
    description: 'Home',
    items: []
}, {
    id: 'customers',
    name: 'Customers',
    description: 'Customers',
    items: []
}, {
    id: 'rentals',
    name: 'Rentals',
    description: 'Rentals',
    items: [{
        id: 'rental_list',
        name: 'Rental List',
        description: 'Rental List'
    }, {
        id: 'return',
        name: 'Return',
        description: 'Return'
    }, {
        id: 'overdue',
        name: 'Overdue',
        description: 'Overdue'
    }, {
        id: 'out',
        name: 'Out',
        description: 'Out'
    }]
}, {
    id: 'films',
    name: 'Films',
    description: 'Films',
    items: [{
        id: 'movie_list',
        name: 'Movie List',
        description: 'Movie List'
    }, {
        id: 'actor_list',
        name: 'Actor List',
        description: 'Actor List'
    }, {
        id: 'categories',
        name: 'Categories',
        description: 'Categories'
    }, {
        id: 'languages',
        name: 'Languages',
        description: 'Languages'
    }]
}, {
    id: 'reports',
    name: 'Reports',
    description: 'Reports',
    items: [{
        id: 'top_film_rentals',
        name: 'Top Film Rentals',
        description: 'Top Film Rentals'
    }, {
        id: 'top_customer_rentals',
        name: 'Top Customer Rentals',
        description: 'Top Customer Rentals'
    }]
}, {
    id: 'admin',
    name: 'Admin',
    description: 'Admin',
    items: [{
        id: 'staff',
        name: 'Staff',
        description: 'Staff'
    }, {
        id: 'stores',
        name: 'Stores',
        description: 'Stores'
    }, {
        id: 'countries',
        name: 'Countries',
        description: 'Countries'
    }, {
        id: 'cities',
        name: 'Cities',
        description: 'Cities'
    }]
}];*/

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.css'],
    animations: [
        trigger('bodyExpansion', [
            state('collapsed', style({height: '0px', display: 'none'})),
            state('expanded', style({height: '*', display: 'block'})),
            transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4,0.0,0.2,1)')),
        ])
    ]/*,
    providers: [
        {provide: NAVBAR_ITEMS_TOKEN, useValue: NAVBAR_ITEMS}
    ]*/
})
export class NavbarComponent implements OnInit {

    constructor(@Inject(APP_CONFIG_TOKEN) public appConfig: AppConfig) {
    }

    ngOnInit() {
    }

}

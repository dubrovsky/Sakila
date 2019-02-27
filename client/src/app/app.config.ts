import {InjectionToken} from "@angular/core";

export interface AppConfig {
    apiUrl: string;
    navbarItems: NavbarCategory[];
}

interface NavbarCategory {
    id: string;
    name: string;
    items: NavbarItem[];
    description?: string;
}

interface NavbarItem {
    id: string;
    name: string;
    description?: string;
}

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
}];

export const APP_CONFIG_TOKEN = new InjectionToken<AppConfig>('app.config');

export const APP_CONFIG: AppConfig = {
    apiUrl: '/api',
    navbarItems: NAVBAR_ITEMS
};
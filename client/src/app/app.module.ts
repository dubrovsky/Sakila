import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MainComponent} from './layouts/main/main.component';
import {LayoutModule} from '@angular/cdk/layout';
import {
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule, MatCardModule, MatDialogModule, MatSnackBarModule, MAT_SNACK_BAR_DEFAULT_OPTIONS
} from '@angular/material';
import {CdkAccordionModule} from "@angular/cdk/accordion";
import {NavbarComponent} from './layouts/navbar/navbar.component';
import {APP_CONFIG, APP_CONFIG_TOKEN} from "./app.config";
import {HomeComponent} from './entities/home/home.component';
import {CustomersModule} from './entities/customers/customers.module';
import {HttpClientModule} from "@angular/common/http";
import {A11yModule} from "@angular/cdk/a11y";
import {DialogComponent} from './shared/alert/dialog/dialog.component';

@NgModule({
    declarations: [
        MainComponent,
        NavbarComponent,
        HomeComponent,
        DialogComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        LayoutModule,
        HttpClientModule,
        MatToolbarModule,
        MatButtonModule,
        MatSidenavModule,
        MatIconModule,
        MatListModule,
        MatCardModule,
        MatDialogModule,
        A11yModule,
        MatSnackBarModule,
        CdkAccordionModule,
        CustomersModule,
        AppRoutingModule
    ],
    providers: [
        {provide: APP_CONFIG_TOKEN, useValue: APP_CONFIG},
        {provide: MAT_SNACK_BAR_DEFAULT_OPTIONS, useValue: {duration: 5000}}
    ],
    entryComponents: [DialogComponent],
    bootstrap: [MainComponent]
})
export class AppModule {
}

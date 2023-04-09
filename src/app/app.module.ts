import { AppRoutingModule } from './app-routing.module';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';
import { NgxsModule } from '@ngxs/store';
import { NgxsLoggerPluginModule } from '@ngxs/logger-plugin';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { environment } from 'src/environments/environment';
import { AirportState } from './store/airport.state';

import { AppComponent } from './app.component';
import { AirportsListComponent } from './pages/airports-list/airports-list.component';
import { MaterialModule } from './material/material.module';
import { HeaderComponent } from './shared/header/header.component';
import { AirportComponent } from './pages/airport/airport.component';
import { LoginComponent } from './auth/login/login.component';
import { HomeComponent } from './pages/home/home.component';

@NgModule({
    declarations: [
        AppComponent,
        AirportsListComponent,
        HeaderComponent,
        AirportComponent,
        LoginComponent,
        HomeComponent
    ],
    imports: [
        HttpClientModule,
        BrowserModule,
        CommonModule,
        AppRoutingModule,
        NoopAnimationsModule,
        BrowserAnimationsModule,
        MaterialModule,
        FormsModule,
        ReactiveFormsModule,
        NgxsModule.forRoot([AirportState], {
            developmentMode: !environment.production
        }),
        NgxsLoggerPluginModule.forRoot({
            disabled: environment.production
        })
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormpageComponent } from './components/formpage/formpage.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { FomanticUIModule } from 'ngx-fomantic-ui';
import { CountriesService } from './common/services/countries.service';
import { OccupationsService } from './common/services/occupations.service';
import { SuccesspageComponent } from './components/successpage/successpage.component';

@NgModule({
  declarations: [
    AppComponent,
    FormpageComponent,
    SuccesspageComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    FomanticUIModule
  ],
  providers: [CountriesService, OccupationsService],
  bootstrap: [AppComponent]
})
export class AppModule { }

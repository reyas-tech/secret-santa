import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { provideHttpClient } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { QuestionnaireComponent } from './questionnaire/questionnaire.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';

const materialImports = [MatFormFieldModule, MatInputModule, MatButtonModule, MatToolbarModule, MatIconModule];

@NgModule({
    declarations: [AppComponent, LoginComponent, QuestionnaireComponent, PageNotFoundComponent, NavBarComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        ...materialImports,
    ],
    providers: [provideHttpClient()],
    bootstrap: [AppComponent],
})
export class AppModule {}

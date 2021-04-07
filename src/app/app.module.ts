import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { LogoutComponent } from './logout/logout.component';
import { ResetComponent } from './reset/reset.component';
import { SearchPipe } from './search.pipe';
import { AuthorizationService } from './authorization.service';
import { ViewComponent } from './view/view.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    FooterComponent,
    LogoutComponent,
    ResetComponent,
    SearchPipe,
    ViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    {
      provide:HTTP_INTERCEPTORS,
      useClass:AuthorizationService,
      multi:true
    }
  ],  
  bootstrap: [AppComponent]
})
export class AppModule { }

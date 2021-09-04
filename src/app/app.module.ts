import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AboutComponent } from './components/about/about.component';
import { ClientsComponent } from './components/clients/clients.component';
import { FeaturesComponent } from './components/features/features.component';
import { ServicesComponent } from './components/services/services.component';
import { CTAComponent } from './components/cta/cta.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { CountsComponent } from './components/counts/counts.component';
import { TestimonialsComponent } from './components/testimonials/testimonials.component';
import { TeamComponent } from './components/team/team.component';
import { ContactComponent } from './components/contact/contact.component';
import { FooterComponent } from './components/footer/footer.component';
import { BannerComponent } from './components/banner/banner.component';




@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ClientsComponent,
    FeaturesComponent,
    ServicesComponent,
    CTAComponent,
    PortfolioComponent,
    CountsComponent,
    TestimonialsComponent,
    TeamComponent,
    ContactComponent,
    FooterComponent,
    BannerComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
  
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

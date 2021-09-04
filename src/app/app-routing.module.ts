import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
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

const routes: Routes = [
  {path: 'Home', component: HomeComponent},
  {path: 'About', component: AboutComponent},
  {path: 'Clients', component: ClientsComponent},
  {path: 'Features', component: FeaturesComponent},
  {path: 'Services', component: ServicesComponent},
  {path: 'CTA', component: CTAComponent},
  {path: 'Portfolio', component: PortfolioComponent},
  {path: 'Counts', component: CountsComponent},
  {path: 'Testimonials', component: TestimonialsComponent},
  {path: 'Team', component: TeamComponent},
  {path: 'Contact', component: ContactComponent},
  {path: 'Footer', component: FooterComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbPaginationModule, NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AacordionComponent } from './aacordion/aacordion.component';
import { ModalComponent } from './modal/modal.component';
import { CarouselComponent } from './carousel/carousel.component';
import { TypeheadComponent } from './typehead/typehead.component';
import { PopoverComponent } from './popover/popover.component';
import { HomeComponent } from './home/home.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    AacordionComponent,
    ModalComponent,
    CarouselComponent,
    TypeheadComponent,
    PopoverComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    [NgbModule],
    [NgbPaginationModule, NgbAlertModule],
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

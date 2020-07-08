import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AacordionComponent } from './aacordion/aacordion.component';
import { CarouselComponent } from './carousel/carousel.component';
import { ModalComponent } from './modal/modal.component';
import { PopoverComponent } from './popover/popover.component';
import { TypeheadComponent } from './typehead/typehead.component';
// import { HomeComponent } from './home/home.component';


const routes: Routes = [{
  path: "",
  pathMatch: "full",
  redirectTo: "aacordion"
},
{
  path: "aacordion",
  component: AacordionComponent
},
{
  path: "carousel",
  component: CarouselComponent
},
{
  path: "modal",
  component: ModalComponent
},
{
  path: "popover",
  component: PopoverComponent
},
{
  path: "typehead",
  component: TypeheadComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }

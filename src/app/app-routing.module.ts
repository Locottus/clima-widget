import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { WidgetComponent } from './components/widget/widget.component';
import { MiniWidgetComponent } from './components/mini-widget/mini-widget.component';


const routes: Routes = [
  {path:'clima-miniWidget',component: MiniWidgetComponent},  
  {path:'clima-Widget',component: WidgetComponent}  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

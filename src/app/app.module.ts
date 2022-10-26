import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstContainerComponent } from './first-container/first-container.component';
import { SecondContainerComponent } from './second-container/second-container.component';
import { ThirdContainerComponent } from './third-container/third-container.component';
import { ChildComponentComponent } from './child-component/child-component.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstContainerComponent,
    SecondContainerComponent,
    ThirdContainerComponent,
    ChildComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello/hello.component';
import { TemplateInterpolationComponent } from './template-interpolation/template-interpolation.component';
import { TemplatePropertyBindingComponent } from './template-property-binding/template-property-binding.component';

@NgModule({
  declarations: [
    AppComponent,
    HelloComponent,
    TemplateInterpolationComponent,
    TemplatePropertyBindingComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

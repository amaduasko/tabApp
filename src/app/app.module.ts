import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./container/app.component";
import { HeaderModule } from "../app/modules/header/header.module";
import { TabModule } from "./modules/tab/tab.module";
@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, HeaderModule, TabModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}

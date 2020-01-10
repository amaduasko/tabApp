import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./container/app.component";
import { HeaderComponent } from "./components/header/header.component";
import { TabModule } from "./modules/tab/tab.module";
@NgModule({
  declarations: [AppComponent, HeaderComponent],
  imports: [BrowserModule, TabModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}

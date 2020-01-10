import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { TabsComponent } from "../tab/component/tabs.component";

@NgModule({
  declarations: [TabsComponent],
  imports: [CommonModule],
  exports: [TabsComponent, CommonModule]
})
export class TabModule {}

import { Component } from "@angular/core";
interface tab {
  id: number;
  tabNumb: number;
  active: boolean;
}
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  tabArray: tab[] = [
    {
      id: 1,
      tabNumb: 1,
      active: true
    },
    {
      id: 2,
      tabNumb: 2,
      active: false
    }
  ];
  title = "tabApp";
  addTab(): void {
    const lastItem = this.tabArray[this.tabArray.length - 1];
    this.tabArray = [
      ...this.tabArray,
      {
        id: lastItem ? lastItem.id + 1 : 1,
        tabNumb: lastItem ? lastItem.tabNumb + 1 : 1,
        active: lastItem ? false : true
      }
    ];
  }
  deleteTab(item): void {
    this.tabArray = this.tabArray.filter(tab => tab.id !== item.id);
    if (this.tabArray.length) this.tabArray[0].active = true;
  }
}

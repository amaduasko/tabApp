import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "tabs",
  templateUrl: "./tabs.component.html",
  styleUrls: ["./tabs.component.scss"]
})
export class TabsComponent implements OnInit {
  @Input() item: number;
  @Output() itemSelected = new EventEmitter();
  itemSelect(item) {
    this.itemSelected.emit(item);
  }
  constructor() {}

  ngOnInit() {}
}

import { Component, OnInit } from "@angular/core";
let FroalaPages: any;
let window: any;

@Component({
  selector: "app-page-builder",
  templateUrl: "./page-builder.component.html",
  styleUrls: ["./page-builder.component.css"]
})
export class PageBuilderComponent implements OnInit {

  ngOnInit(): void {
    window.pages = new FroalaPages({ key: "" });
  }
};


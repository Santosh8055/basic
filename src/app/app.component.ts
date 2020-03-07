import { Component } from "@angular/core";
import { DataService } from "./data.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  title = "basic";
  public employeeData = [];
  public searchField = "";
  constructor(private data: DataService) {
    this.data.getData().subscribe((res: any) => {
      setTimeout(() => {
        this.employeeData = res;
      }, 500);
    });
  }
}

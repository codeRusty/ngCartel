import { Component } from "@angular/core";
import {
  BeamService,
  BeamType
} from "./modules/app-common/services/beam.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "ngCartel";
  constructor() {}
}

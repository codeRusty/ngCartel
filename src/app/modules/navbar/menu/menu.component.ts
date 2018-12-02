import { Component, OnInit, ViewEncapsulation } from "@angular/core";
import { BeamService, BeamType } from "../../app-common/services/beam.service";

@Component({
  selector: "app-menu",
  templateUrl: "./menu.component.html",
  styleUrls: ["./menu.component.css"],
  encapsulation: ViewEncapsulation.None
})
export class MenuComponent implements OnInit {
  itemsInCart = 1;
  loading = false;
  constructor(public _beam: BeamService) {
    this.registerEvents();
  }

  ngOnInit() {}
  dateClass = (d: Date) => {
    const date = d.getDate();

    // Highlight the 1st and 20th day of each month.
    return date === 1 || date === 20 ? "example-custom-date-class" : undefined;
  };

  registerEvents() {
    this._beam.on().subscribe({
      next: x => {
        if (x.type === BeamType.Loader) {
          this.loading = x.isTruthy;
        }
        if (x.type === BeamType.AddToCart) {
          this.itemsInCart = this.itemsInCart + 1;
        }
        if (x.type === BeamType.RemoveFromCart) {
          this.itemsInCart = this.itemsInCart - 1;
        }
      },
      error: err => console.error("Observer got an error: " + err),
      complete: () => console.log("Observer got a complete notification")
    });
  }
}

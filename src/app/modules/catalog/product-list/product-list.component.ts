import { Component, OnInit } from "@angular/core";
import { BeamService, BeamType } from "../../app-common/services/beam.service";

@Component({
  selector: "app-product-list",
  templateUrl: "./product-list.component.html",
  styleUrls: ["./product-list.component.css"]
})
export class ProductListComponent implements OnInit {
  constructor(public _beam: BeamService) {}
  panelOpenState = false;
  loading = true;
  thumbLabel = true;
  selectedRange = 500;
  minPrice = 100;
  maxPrice = 5000;
  priceStep = 100;
  ngOnInit() {}
  tiles: any = [
    { text: "One", cols: 1, rows: 1, color: "lightblue" },
    { text: "Two", cols: 1, rows: 1, color: "lightgreen" },
    { text: "Three", cols: 1, rows: 1, color: "lightpink" },
    { text: "Four", cols: 1, rows: 1, color: "#DDBDF1" }
  ];

  emitBeam() {
    this.loading = !this.loading;
    this._beam.broadcast({
      isTruthy: this.loading,
      type: BeamType.Loader,
      value: ""
    });
  }
  addToCart(item) {
    this._beam.broadcast({
      type: BeamType.AddToCart,
      value: item.text,
      isTruthy: true
    });
  }
}

import { Component, OnInit } from "@angular/core";
import { BeamService, BeamType } from "../../app-common/services/beam.service";
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: "app-product-home",
  templateUrl: "./product-home.component.html",
  styleUrls: ["./product-home.component.css"]
})
export class ProductHomeComponent implements OnInit {
  constructor(public _beam: BeamService, private router: Router) {}

  loading = true;

  ngOnInit() {
    this.router.events.subscribe(evt => {
      if (!(evt instanceof NavigationEnd)) {
        return;
      }
      window.scrollTo(0, 0);
    });
  }

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

import { Injectable } from "@angular/core";
import { Observable, Subject } from "rxjs";

@Injectable({ providedIn: "root" })
export class BeamService {
  private subject = new Subject<IBeam>();

  broadcast(beam: IBeam): void {
    this.subject.next(beam);
  }

  clear() {
    this.subject.next();
  }

  on(): Observable<IBeam> {
    return this.subject.asObservable();
  }
}

export interface IBeam {
  isTruthy: boolean;
  value: string;
  type: BeamType;
}

export enum BeamType {
  Loader,
  Notify,
  Message,
  Auth,
  AddToCart,
  RemoveFromCart
}

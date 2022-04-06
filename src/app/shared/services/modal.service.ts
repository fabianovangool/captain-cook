import { Injectable } from "@angular/core";
import { Subject } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class ModalService {
  modalTriggered: Subject<boolean> = new Subject<boolean>();

  isModalOpen: boolean = true;

  triggerModal(): boolean {
    this.isModalOpen = !this.isModalOpen;
    this.modalTriggered.next(this.isModalOpen);

    return this.isModalOpen;
  }
}

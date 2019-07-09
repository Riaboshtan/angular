import { Component, OnInit } from '@angular/core';
import { OverlayService} from './overlay.service';
import {IOverlay} from './overlay';

@Component({
  selector: 'app-overlay',
  templateUrl: './overlay.component.html',
  styleUrls: ['./overlay.component.css']
})
export class OverlayComponent implements OnInit {

  public overlays =[]
  editOverlay: IOverlay

  constructor(private overlayService: OverlayService ) {}

  ngOnInit() {
    this.getOverlay()
  }

  getOverlay() {
    this.overlayService.getOverlay()
        .subscribe(data => this.overlays = data);
  }

  add(name: string): void {
    const newOverlay: IOverlay = {name} as IOverlay
    this.overlayService.addOverlay(newOverlay).subscribe(()=> this.getOverlay())
  }

  edit(overlay){
    this.editOverlay = overlay
  }

  update(){
    if(this.editOverlay){
      this.overlayService.updateOverlay(this.editOverlay).subscribe(()=> {
        this.getOverlay()
      })
      this.editOverlay = undefined
    }
  }

  delete(overlay: IOverlay): void {
    this.overlays = this.overlays.filter(h => h !== overlay)
    this.overlayService
        .deleteOverlay(overlay.id)
        .subscribe(()=> console.log('overlay deleted'))
  }


}

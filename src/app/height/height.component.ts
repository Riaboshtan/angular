import { Component, OnInit } from '@angular/core';
import { HeightService} from './height.service';
import {IHeight} from './height'


@Component({
  selector: 'app-height',
  templateUrl: './height.component.html',
  styleUrls: ['./height.component.css']
})
export class HeightComponent implements OnInit {

  public heights =[]
  editHeight: IHeight

  constructor(private heightService: HeightService ) {}

  ngOnInit() {
    this.getHeight()
  }

  getHeight() {
    this.heightService.getHeight()
        .subscribe(data => this.heights = data);
  }

  add(name: string): void {
    const newHeight: IHeight = {name} as IHeight
    this.heightService.addHeight(newHeight).subscribe(()=> this.getHeight())
  }

  edit(height){
    this.editHeight = height
  }

  update(){
    if(this.editHeight){
      this.heightService.updateHeight(this.editHeight).subscribe(()=> {
        this.getHeight()
      })
      this.editHeight = undefined
    }
  }

  delete(height: IHeight): void {
    this.heights = this.heights.filter(h => h !== height)
    this.heightService
        .deleteHeight(height.id)
        .subscribe(()=> console.log('height deleted'))
  }

}

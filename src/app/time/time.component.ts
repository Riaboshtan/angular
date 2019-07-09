import { Component, OnInit } from '@angular/core';
import {TimeService} from './time.service';
import {ITime} from './time';

@Component({
  selector: 'app-time',
  templateUrl: './time.component.html',
  styleUrls: ['./time.component.css']
})
export class TimeComponent implements OnInit {

  public times=[]
  editTime: ITime

  constructor(private timeService: TimeService) { }

  ngOnInit() {
    this.getTime()
  }

  getTime(){
    this.timeService.getTime()
        .subscribe(data => this.times = data);
  }
  add(name: string): void {
    const newTime: ITime = {name} as ITime
    this.timeService.addTime(newTime).subscribe(()=> this.getTime())
  }

  edit(time){
    this.editTime = time
  }

  update(){
    if(this.editTime){
      this.timeService.updateTime(this.editTime).subscribe(()=> {
        this.getTime()
      })
      this.editTime = undefined
    }
  }

  delete(time: ITime): void {
    this.times = this.times.filter(h => h !== time)
    this.timeService
        .deleteTime(time.id)
        .subscribe(()=> console.log('time deleted'))
  }





}

import { Component, OnInit } from '@angular/core';
import { DiscountsService } from './discount.server';
import { IDiscount, Discount} from './discounts';
import { CategoryService } from '../category/category.server';
import { TimeService } from '../time/time.service';
import { OverlayService } from '../overlay/overlay.service';
import { HeightService } from '../height/height.service';
import {HttpClientModule} from '@angular/common/http';

@Component({
  selector: 'app-discounts',
  templateUrl: './discounts.component.html',
  styleUrls: ['./discounts.component.css']
})
export class DiscountsComponent implements OnInit {
  public discounts = [];
  public categories = [];
  public times = [];
  public overlays = [];
  public heights = [];
  selectedfile: File = null;

  discountModel = new Discount('','','','','0','0','0','0', '')


  constructor(private discountsService: DiscountsService, 
              private categoryService: CategoryService, 
              private timeService: TimeService, 
              private overlayService: OverlayService,
              private heightService: HeightService,
              ){
                
              }

  ngOnInit(){
    this.getDiscounts();
    this.getCategory();
    this.getTime();
    this.getOverlay();
    this.getHeight()
  }

  getDiscounts(): void {
    this.discountsService.getDiscounts()
        .subscribe(data => this.discounts=data)
  }


  /*add*/ 
  onChangeCateg(event): void {
    const newcat = event.target.value;
    console.log(newcat)
  }
  getCategory() {
    this.categoryService.getCategory()
        .subscribe(data => this.categories = data);
  }

  onChangeTime(event): void {
    const newtime = event.target.value;
    console.log(newtime)
  }
  getTime() {
    this.timeService.getTime()
        .subscribe(data => this.times = data);
  }

  onChangeOver(event): void {
    const newover = event.target.value;
    console.log(newover)
  }
  getOverlay() {
    this.overlayService.getOverlay()
        .subscribe(data => this.overlays = data);
  }

  onChangeHeight(event): void {
    const newhe = event.target.value;
    console.log(newhe)
  }
  getHeight() {
    this.heightService.getHeight()
        .subscribe(data => this.heights = data);
  }
  
  delete(discount: IDiscount): void {
    this.discounts = this.discounts.filter(h => h !== discount)
    this.discountsService
        .deleteDiscount(discount.id)
        .subscribe(()=> console.log('discount deleted'))
  }
  onFileSelect(event){
      this.selectedfile = <File>event.target.files[0];
      console.log(this.selectedfile)
    }

  addDisc(){
     const fd = new FormData()

     fd.append('title', this.discountModel.title)
     fd.append('details', this.discountModel.details)
     fd.append('cafe', this.discountModel.cafe)
     fd.append('location', this.discountModel.location)
     fd.append('category', this.discountModel.category)
     fd.append('time', this.discountModel.time)
     fd.append('overlay', this.discountModel.overlay)
     fd.append('height', this.discountModel.height)
     fd.append('image', this.selectedfile, this.selectedfile.name)

     this.http.post("http://127.0.0.1:5000/api/discounts/", fd).subscribe(res=>console.log(res))
    

 }
  /*add*/

}
  

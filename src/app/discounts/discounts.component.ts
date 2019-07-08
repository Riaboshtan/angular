import { Component, OnInit } from '@angular/core';
import { DiscountsService } from './discount.server';
import { IDiscount } from './discounts';

@Component({
  selector: 'app-discounts',
  templateUrl: './discounts.component.html',
  styleUrls: ['./discounts.component.css']
})
export class DiscountsComponent implements OnInit {

  public discounts = [];

  constructor(private disscountsService: DiscountsService){}

  ngOnInit(){
    this.disscountsService.getDiscounts()
        .subscribe(data => this.discounts=data);
  }


  delete(discount: IDiscount): void {
    this.discounts = this.discounts.filter(h => h !== discount)
    this.disscountsService
        .deleteDiscount(discount.id)
        .subscribe(()=> console.log('discount deleted'))
  }

}
  
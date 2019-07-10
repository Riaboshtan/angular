import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-discount-details',
  templateUrl: './discount-details.component.html',
  styleUrls: ['./discount-details.component.css']
})
export class DiscountDetailsComponent implements OnInit {

  private _id: number;
  discount: IDiscount;

  constructor(private _route: ActivatedRoute, private discountsService: DiscountsService) { }

  ngOnInit() {
    this._route.paramMap.subscribe(params=>{
      this._id = +params.get('id');
      //this.discount =this.discountsService.getDiscount(this._id)
    });
  }

}

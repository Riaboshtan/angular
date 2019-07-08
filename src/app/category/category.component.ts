import { Component, OnInit } from '@angular/core';
import { CategoryService } from './category.server';
import { ICategoty } from './category';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  public categories = []
  editCategory: ICategoty

  constructor(private categoryService: CategoryService) { }

  ngOnInit(){
    this.getCategory()
  }

  getCategory() {
    this.categoryService.getCategory()
        .subscribe(data => this.categories = data);
  }

  add(name: string): void {
    const newCategory: ICategoty = {name} as ICategoty
    this.categoryService.addCategory(newCategory).subscribe(()=> this.getCategory())
  }

  edit(category){
    this.editCategory = category
  }

  update(){
    if(this.editCategory){
      this.categoryService.updateCategory(this.editCategory).subscribe(()=> {
        this.getCategory()
      })
      this.editCategory = undefined
    }
  }

  delete(category: ICategoty): void {
    this.categories = this.categories.filter(h => h !== category)
    this.categoryService
        .deleteCategory(category.id)
        .subscribe(()=> console.log('category deleted'))
  }

}

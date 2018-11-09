import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent {
  @Output() navEmitter = new EventEmitter<number>();

  onRecipe() {
    this.navEmitter.emit(0);
  }

  onShoppingList() {
    this.navEmitter.emit(1);
  }
 }

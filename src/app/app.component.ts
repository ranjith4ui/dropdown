import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  menuOpen: boolean = false;
  @ViewChild('listElem') listElem!: ElementRef;
  listElems: string[] = ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5', 'Item 6', 'Item 7', 'Item 8', 'Item 9'];
  selectedValue: string = 'Select an item';

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
    this.listElem.nativeElement.classList.toggle('show-menu');
  }

  clickHandler(item: string) {
    this.selectedValue = item;
    this.toggleMenu();
  }

  @HostListener('click') hostClick() {
    console.log('interacted with menu...');
  }
}
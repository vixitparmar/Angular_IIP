import { Component } from '@angular/core';
import { ListItemService } from '../list-item.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-list-item',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './list-item.component.html',
  styleUrl: './list-item.component.css'
})
export class ListItemComponent {
  items: any[] = [];
  filteredItems: any[] = [];
  sortDirection: string = 'asc';
  filterTerm: string = '';

  constructor(private itemListService: ListItemService) { }

  ngOnInit(): void {
    this.fetchItems();
  }

  fetchItems(): void {
    this.itemListService.fetchItems().subscribe(data => {
      this.items = data;
      console.log(this.items);
      this.filteredItems = data;
    });
  }

  sortItems(): void {
    if (this.sortDirection === 'asc') {
      this.filteredItems.sort((a, b) => a.title > b.title ? 1 : -1);
      this.sortDirection = 'desc';
    } else {
      this.filteredItems.sort((a, b) => a.title < b.title ? 1 : -1);
      this.sortDirection = 'asc';
    }
  }


  filterItems(): void {
    this.filteredItems = this.items.filter(item =>
      item.title.toLowerCase().includes(this.filterTerm.toLowerCase())
    );
  }
}

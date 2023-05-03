import { Component, OnInit } from '@angular/core';
import { OrderHistory } from 'src/app/common/order-history';
import { OrderHistoryService } from 'src/app/services/order-history.service';

@Component({
  selector: 'app-order-history',
  templateUrl: './order-history.component.html',
  styleUrls: ['./order-history.component.css'],
})
export class OrderHistoryComponent implements OnInit {
  orderHistoryList: OrderHistory[] = [];
  filteredOrders: OrderHistory[] = [];
  storage: Storage = sessionStorage;
  totalPriceHistory: number = 0;
  totalQuantityHistory: number = 0;

  constructor(private orderHistoryService: OrderHistoryService) {}

  ngOnInit(): void {}

  handleOrderHistory(theEmail: string) {
    this.orderHistoryService.getOrderHistory(theEmail).subscribe((data) => {
      this.orderHistoryList = data._embedded.orders;
    });
  }

  sortByPriceAscending(): void {
    this.filteredOrders = this.orderHistoryList.sort(
      (a, b) => a.totalPrice - b.totalPrice
    );
  }

  sortByPriceDescending(): void {
    this.filteredOrders = this.orderHistoryList.sort(
      (a, b) => b.totalPrice - a.totalPrice
    );
  }

  sortByQuantityAscending(): void {
    this.filteredOrders = this.orderHistoryList.sort(
      (a, b) => a.totalQuantity - b.totalQuantity
    );
  }

  sortByQuantityDescending(): void {
    this.filteredOrders = this.orderHistoryList.sort(
      (a, b) => b.totalQuantity - a.totalQuantity
    );
  }

  sortByDateAscending(): void {
    this.filteredOrders = this.orderHistoryList.sort((a, b) => {
      const dateA = new Date(a.dateCreated);
      const dateB = new Date(b.dateCreated);
      return dateA.getTime() - dateB.getTime();
    });
  }

  sortByDateDescending(): void {
    this.filteredOrders = this.orderHistoryList.sort((a, b) => {
      const dateA = new Date(a.dateCreated);
      const dateB = new Date(b.dateCreated);
      return dateB.getTime() - dateA.getTime();
    });
  }

  calculatePriceTotals() {
    this.totalPriceHistory = 0;
    this.orderHistoryList.forEach((element) => {
      this.totalPriceHistory += element.totalPrice;
    });
    return this.totalPriceHistory;
  }

  calculateQuantityTotals() {
    this.totalQuantityHistory = 0;
    this.orderHistoryList.forEach((element) => {
      this.totalQuantityHistory += element.totalQuantity;
    });
    return this.totalQuantityHistory;
  }
}

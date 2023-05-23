import { Component} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { OrderDetailsComponent } from './Orders/order-details/order-details.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 title = 'app';

 constructor (private dialogRef : MatDialog) {}
  openDialog(){
    this.dialogRef.open(OrderDetailsComponent);
  }
 }


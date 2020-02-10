import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { UpdateDialogComponent } from '../update-dialog/update-dialog.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private dialog: MatDialog) { 
    this.openDialog();
   }

  ngOnInit() {
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(UpdateDialogComponent, {panelClass: 'update-dialog-box'});
  }

}
import { Component } from '@angular/core';
import { MatDialog } from '@angular/material';
import { UpdateDialogComponent } from './update-dialog/update-dialog.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Student Scheduler';

  constructor(private dialog: MatDialog) { 
    this.openDialog();
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(UpdateDialogComponent, {panelClass: 'update-dialog-box'});
  }

}

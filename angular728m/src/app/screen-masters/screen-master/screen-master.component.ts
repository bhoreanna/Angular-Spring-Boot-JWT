import { Component, OnInit } from '@angular/core';
import { ScreenMasterService } from 'src/app/shared/screen-master/screen-master.service';
import { Router } from '@angular/router';
import { NotificationService } from 'src/app/oshope/share/notification.service';
import { DialogService } from 'src/app/oshope/share/dialog.service';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-screen-master',
  templateUrl: './screen-master.component.html',
  styleUrls: ['./screen-master.component.scss']
})
export class ScreenMasterComponent implements OnInit {

  constructor(private screenMasterService: ScreenMasterService,
    private router: Router,
    private notificationService: NotificationService,
   private dialogService: DialogService,
     private dialog: MatDialog) { }

  ngOnInit() {
  }

}

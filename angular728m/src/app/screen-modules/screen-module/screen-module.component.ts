import { Component, OnInit, OnDestroy } from '@angular/core';
import { ScreenModule } from 'src/app/models/screen-module';
import { ScreenModuleService } from 'src/app/shared/screen-module/screen-module.service';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-screen-module',
  templateUrl: './screen-module.component.html',
  styleUrls: ['./screen-module.component.scss']
})
export class ScreenModuleComponent implements OnInit , OnDestroy {
  screenModule = new ScreenModule();
  date = new Date();
  constructor(private screenModuleService: ScreenModuleService ,
   private dialogRef: MatDialogRef<ScreenModuleComponent>
    ) { }

  ngOnInit() {
    this.screenModule = this.screenModuleService.getScreenModule();
   // console.log('Before  this.screenModule.createdDate: ' ,  this.screenModule.createdDate);
   //  console.log('Withou Change date: ' , this.date);
    // this.date =  this.screenModule.createdDate;
   // this.screenModule.createdDate = new Date();
    console.log('this.screenModule: ' , this.screenModule);
  }

  onClear() {
    this.screenModule = new ScreenModule();
  }

  onClose() {
    console.log('You Click Close');
    this.screenModuleService.setscreenModule(new ScreenModule());
    this.dialogRef.close();

  }

  onSubmit() {
    console.log('You Click Submit');
    console.log('screenModule: ' , this.screenModule);


  }

  ngOnDestroy() {
    console.log('**** ScreenModuleComponent ngOnDestroy  *****');
    this.screenModuleService.setscreenModule(new ScreenModule());

  }

}

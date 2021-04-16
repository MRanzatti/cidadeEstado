import {Component, NgModule, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {DxFormModule} from 'devextreme-angular/ui/form';
import {DxSelectBoxModule} from 'devextreme-angular';
import {DxButtonModule} from 'devextreme-angular/ui/button';

@Component({
  selector: 'cidade-estado',
  templateUrl: './cidade-estado.component.html',
  styleUrls: ['./cidade-estado.component.scss']
})
export class CidadeEstadoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
@NgModule({
  imports: [
    CommonModule,
    DxSelectBoxModule,
    DxButtonModule,
    DxFormModule
  ],
  declarations: [ CidadeEstadoComponent ],
  exports: [ CidadeEstadoComponent ]
})
export class CidadeEstadoModule { }

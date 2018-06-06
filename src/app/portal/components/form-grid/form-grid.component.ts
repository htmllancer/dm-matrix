import { Component, OnInit, Input } from '@angular/core';
import {GridSectionModel} from './form-grid-section.model';


@Component({
  selector: 'app-form-grid',
  templateUrl: './form-grid.component.html',
  styleUrls: ['./form-grid.component.scss']
})
export class FormGridComponent implements OnInit {

  @Input() columns: number;
  formLayout: Array<GridSectionModel>;
  colNumber: number;

  constructor() {

  }

  ngOnInit() {
    this.formLayout = [];
    this.colNumber = this.columns || 4;
    this.initGrid();
  }

  private initGrid() {
    this.addSection();
  }

  public addSection() {
    const section = new GridSectionModel(this.colNumber);
    console.warn(this.colNumber);
    section.add();
    this.formLayout = [...this.formLayout, section];
    console.warn(this.formLayout);
  }

}

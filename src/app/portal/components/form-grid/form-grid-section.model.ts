import { GridRowModel } from './form-grid-row.model';

export class GridSectionModel {
  gridColumns: number;
  items: Array<GridRowModel>;

  constructor(gridColumns: number) {
    this.gridColumns = gridColumns;
    this.items = [];
  }

  public add() {
    const row = new GridRowModel(this.gridColumns);
    this.items = [...this.items, row];
  }

}

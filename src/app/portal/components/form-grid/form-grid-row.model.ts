import { GridItemModel } from './form-grid-item.model';

export class GridRowModel {
  items: Array<GridItemModel>;
  columns: number;

  constructor (columns: number) {
    this.columns = columns;
    this.items = [];
    this.addRow();
  }


  public addRow() {
    const items =  Array(this.columns).fill(null, 0, this.columns).map((item) => {
      const gridItem = new GridItemModel(this.columns);
      return gridItem;
    });
    this.items = [...this.items, ...items];
  }
}

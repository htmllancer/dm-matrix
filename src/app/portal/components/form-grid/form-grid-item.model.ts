export class GridItemModel {
  gid: number;
  name: string;
  className: string;
  formItem: Object;

  constructor(columns: number) {
    this.gid = Date.now() * Math.random();
    this.className = 'col1-' + columns;
    this.formItem = null;
  }

}

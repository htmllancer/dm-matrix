import {Component, Input, OnInit } from '@angular/core';
import { Event } from '@angular/router';

@Component({
  selector: 'app-dnd-entity-list',
  templateUrl: './dnd-entity-list.component.html',
  styleUrls: ['./dnd-entity-list.component.scss']
})

export class DndEntityListComponent implements OnInit {

  @Input() list: object[];

  draggedEntity: object;
  selectedEntities: object[];

  constructor() { }

  ngOnInit() {
    console.warn(this.list);
    this.selectedEntities = [];
  }

  dragStart(event: object, item: object) {
      this.draggedEntity = item;
  }

  dragEnd(event: object) {
    console.warn('drag end');

  }

  drop(event: Event) {
    this.selectedEntities.push(this.draggedEntity);
  }


}

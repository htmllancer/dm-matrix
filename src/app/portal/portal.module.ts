import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DragDropModule } from 'primeng/primeng';

import { PortalRoutingModule } from './portal-routing.module';
import { PortalComponent } from './portal.component';
import { FormGridComponent } from './components/form-grid/form-grid.component';
import { DndEntityListComponent} from './components/dnd-entity-list/dnd-entity-list.component';

@NgModule({
  imports: [
    CommonModule,
    PortalRoutingModule,
    FormsModule,
    DragDropModule
  ],
  declarations: [
    PortalComponent,
    FormGridComponent,
    DndEntityListComponent
  ]
})
export class PortalModule { }

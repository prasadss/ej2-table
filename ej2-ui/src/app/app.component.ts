import { Component } from '@angular/core';
import {
  VirtualScrollService,
  TreeGridComponent,
  ColumnChooserService,
  ToolbarService,
} from '@syncfusion/ej2-angular-treegrid';
import { dataSource, virtualData } from './datasource';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [VirtualScrollService, ColumnChooserService, ToolbarService],
})
export class AppComponent {
  title = 'ej2-ui';
  public data: Object[];
  public toolbar: string[];

  ngOnInit(): void {
    dataSource();
    this.data = virtualData;
    this.toolbar = ['ColumnChooser'];
  }
}

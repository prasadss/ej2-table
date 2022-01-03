import { Component } from '@angular/core';
import { VirtualScrollService, TreeGridComponent } from '@syncfusion/ej2-angular-treegrid';
import { dataSource, virtualData } from './datasource';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [VirtualScrollService]
})
export class AppComponent {
  title = 'ej2-ui';
  data: Object[];

  ngOnInit(): void {
      dataSource();
      this.data = virtualData;
  }
}

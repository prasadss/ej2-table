import { Component, ViewChild } from '@angular/core';
import {
  VirtualScrollService,
  TreeGridComponent,
  ColumnChooserService,
  ToolbarService,
  ContextMenuService,
} from '@syncfusion/ej2-angular-treegrid';
import { dataSource, virtualData } from './datasource';
import { MenuEventArgs } from '@syncfusion/ej2-navigations';
import { getValue, isNullOrUndefined } from '@syncfusion/ej2-base';
import { BeforeOpenCloseEventArgs } from '@syncfusion/ej2-inputs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [
    VirtualScrollService,
    ColumnChooserService,
    ToolbarService,
    ContextMenuService,
  ],
})
export class AppComponent {
  title = 'ej2-ui';
  @ViewChild('treegrid')
  public treegrid: TreeGridComponent;
  public data: Object[];
  public toolbar: string[];
  public contextMenuItems: Object;

  ngOnInit(): void {
    dataSource();
    this.data = virtualData;
    this.toolbar = ['ColumnChooser'];
    let headerMenu = [
      { text: 'Edit Column', target: '.e-headercontent', id: 'edit' },
      { text: 'New Column', target: '.e-headercontent', id: 'edit' },
      { text: 'Delete Column', target: '.e-headercontent', id: 'edit' },
      { text: 'Choose Column', target: '.e-headercontent', id: 'edit' },
      { text: 'Freeze Column', target: '.e-headercontent', id: 'edit' },
      { text: 'Filter Column', target: '.e-headercontent', id: 'edit' },
      { text: 'Multisort Column', target: '.e-headercontent', id: 'edit' },
    ];
    let rowMenu = [
      { text: 'Add Next', target: '.e-content', id: 'collapserow' },
      { text: 'Add Child', target: '.e-content', id: 'collapserow' },
      { text: 'Delete Row', target: '.e-content', id: 'collapserow' },
      { text: 'Edit Row', target: '.e-content', id: 'collapserow' },
      { text: 'Multi Select', target: '.e-content', id: 'collapserow' },
      { text: 'Copy Rows', target: '.e-content', id: 'collapserow' },
      { text: 'Cut Rows', target: '.e-content', id: 'collapserow' },
      { text: 'Paste Next', target: '.e-content', id: 'collapserow' },
      { text: 'Paste Child', target: '.e-content', id: 'collapserow' },
    ];
    this.contextMenuItems = [...headerMenu, ...rowMenu];
  }

  contextMenuOpen(arg?: BeforeOpenCloseEventArgs): void {

    // to show hide menu condition based

    // let elem: Element = arg.event.target as Element;
    // let row: Element = elem.closest('.e-row');
    // let uid: string = row && row.getAttribute('data-uid');
    // let items: Array<HTMLElement> = [].slice.call(
    //   document.querySelectorAll('.e-menu-item')
    // );
    // for (let i: number = 0; i < items.length; i++) {
    //   items[i].setAttribute('style', 'display: none;');
    // }
    // if (elem.closest('.e-row')) {
    //   if (
    //     isNullOrUndefined(uid) ||
    //     isNullOrUndefined(
    //       getValue(
    //         'hasChildRecords',
    //         this.treegrid.grid.getRowObjectFromUID(uid).data
    //       )
    //     )
    //   ) {
    //     arg.cancel = true;
    //   } else {
    //     let flag: boolean = getValue(
    //       'expanded',
    //       this.treegrid.grid.getRowObjectFromUID(uid).data
    //     );
    //     let val: string = flag ? 'none' : 'block';
    //     document
    //       .querySelectorAll('li#expandrow')[0]
    //       .setAttribute('style', 'display: ' + val + ';');
    //     val = !flag ? 'none' : 'block';
    //     document
    //       .querySelectorAll('li#collapserow')[0]
    //       .setAttribute('style', 'display: ' + val + ';');
    //   }
    // } else {
    //   let len = this.treegrid.element.querySelectorAll('.e-treegridexpand')
    //     .length;
    //   if (len !== 0) {
    //     document
    //       .querySelectorAll('li#collapseall')[0]
    //       .setAttribute('style', 'display: block;');
    //   } else {
    //     document
    //       .querySelectorAll('li#expandall')[0]
    //       .setAttribute('style', 'display: block;');
    //   }
    // }
  }
  contextMenuClick(args?: MenuEventArgs): void {
    if (args.item.id === 'collapserow') {
      this.treegrid.collapseRow(
        this.treegrid.getSelectedRows()[0] as HTMLTableRowElement,
        this.treegrid.getSelectedRecords()[0]
      );
    } else if (args.item.id === 'expandrow') {
      this.treegrid.expandRow(
        this.treegrid.getSelectedRows()[0] as HTMLTableRowElement,
        this.treegrid.getSelectedRecords()[0]
      );
    } else if (args.item.id === 'collapseall') {
      this.treegrid.collapseAll();
    } else if (args.item.id === 'expandall') {
      this.treegrid.expandAll();
    }
  }
}

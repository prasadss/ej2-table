import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TreeGridModule } from '@syncfusion/ej2-angular-treegrid';
import { HttpClientModule } from '@angular/common/http';
import { DialogModule } from '@syncfusion/ej2-angular-popups';
import { PopupComponent } from './component/popup/popup.component';
import { ColumnFormComponent } from './Pages/column-form/column-form.component';

@NgModule({
  declarations: [AppComponent, PopupComponent, ColumnFormComponent],
  imports: [
    BrowserModule,
    TreeGridModule,
    AppRoutingModule,
    HttpClientModule,
    DialogModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

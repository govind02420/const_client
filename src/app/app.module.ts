import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeComponent } from './employee/employee.component';
import { AddemployeeComponent } from './addemployee/addemployee.component';
import { EditComponent } from './edit/edit.component';
import { DeleteComponent } from './delete/delete.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from "@angular/forms"
import { RouterModule, ActivatedRoute } from '@angular/router';
import { NotfoundComponent } from './notfound/notfound.component';
@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    AddemployeeComponent,
    EditComponent,
    DeleteComponent,
    NotfoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      { path : "", component: EmployeeComponent },
      { path : "employee", component: EmployeeComponent },
      { path : "addemployee", component: AddemployeeComponent },
      { path : "edit/:id", component: EditComponent },
      { path : "delete/:id", component: DeleteComponent },
      { path : "**", component: NotfoundComponent },
    ])

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

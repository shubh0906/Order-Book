import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatCheckboxModule, MatDatepickerModule, MatFormFieldModule,
  MatInputModule, MatRadioModule, MatSelectModule, MatSliderModule,
  MatSlideToggleModule, MatToolbarModule, MatListModule, MatGridListModule,
  MatCardModule, MatIconModule, MatProgressSpinnerModule, MatDialogModule} from '@angular/material';

import { FlexLayoutModule } from '@angular/flex-layout';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { DataService } from './services/data.service';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
                                                                                                                                                                                                                                                                                                                                                                                                                                                  import { SnapshotComponent } from './snapshot/snapshot.component';
import { HeaderComponent } from './header/header.component';
import { RealtimeComponent } from './realtime/realtime.component';
import { FormComponent } from './form/form.component';
import { DisplaytableComponent } from './displaytable/displaytable.component';


@NgModule({
  declarations: [
    AppComponent,
    SnapshotComponent,
    HeaderComponent,
    RealtimeComponent,
    FormComponent,
    DisplaytableComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MatButtonModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatInputModule,
    MatRadioModule,
    MatSelectModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatIconModule,
    MatProgressSpinnerModule,
    MatDialogModule,
    MatSelectModule,
    FlexLayoutModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [
    DataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

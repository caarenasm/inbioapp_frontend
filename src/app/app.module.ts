import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { Drivers } from '@ionic/storage';
import { IonicStorageModule } from '@ionic/storage-angular';
import { ComponentsModule } from './components/components.module';
import { HttpClientModule } from '@angular/common/http';
import { InAppPurchase2 } from '@ionic-native/in-app-purchase-2/ngx';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    IonicStorageModule.forRoot({
      name: '__inbioapp',
      driverOrder: [Drivers.IndexedDB, Drivers.LocalStorage]
    }),
    ComponentsModule,
    HttpClientModule
  ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }, InAppPurchase2],
  bootstrap: [AppComponent],
})
export class AppModule {}

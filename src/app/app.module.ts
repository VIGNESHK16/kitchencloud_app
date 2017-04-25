import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { KitchenCloud } from './app.component';

import { PantryPageModule } from '../pages/pantry/pantry.module';
import { GroceriesPageModule } from '../pages/groceries/groceries.module';
import { RecipesPageModule } from '../pages/recipes/recipes.module';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    KitchenCloud
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(KitchenCloud),
  ],
  bootstrap: [IonicApp],
  entryComponents: [],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}

import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { Apollo } from 'apollo-angular';
import { HttpLink } from 'apollo-angular-link-http';
import { ApolloModule } from 'apollo-angular';
import { HttpLinkModule } from 'apollo-angular-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';

import { config } from "../app-config";

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { VehiclesPage } from '../pages/vehicles/vehicles';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HttpClientModule, HttpHeaders } from '@angular/common/http';
import { ApolloLink } from 'apollo-link';
import { onError } from 'apollo-link-error';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    VehiclesPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ApolloModule,
    HttpLinkModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    VehiclesPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})

export class AppModule {
  constructor(apollo: Apollo, httpLink: HttpLink) {

    let link = ApolloLink.from([
      onError(({ graphQLErrors, networkError }) => {
        if (graphQLErrors)
          graphQLErrors.map(({ message, locations, path }) =>
            console.log(
              `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`
            )
          );
        if (networkError) console.log(`[Network error]: ${networkError}`);
      }),
      new ApolloLink((operation, forward) => {
        operation.setContext({
          headers: new HttpHeaders().set('x-api-key', 'da2-reoqzrlb2jai7lyuno64gwqmxm')
        })
        // operation.setContext(({ headers }) => ({
        //   headers: headers.append('x-api-key', 'da2-reoqzrlb2jai7lyuno64gwqmxm'),
        // }))
        return forward(operation);
      }),
      httpLink.create({ uri: "https://h63q3ct47fhkhjebysdixqo7wq.appsync-api.eu-west-1.amazonaws.com/graphql" })
    ]);

    apollo.create({
      link: link,
      cache: new InMemoryCache()
    });
  }
}

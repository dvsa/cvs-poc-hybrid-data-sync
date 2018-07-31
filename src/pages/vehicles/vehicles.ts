import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Apollo } from 'apollo-angular';
import gql from "graphql-tag";

@IonicPage()
@Component({
  selector: 'page-vehicles',
  templateUrl: 'vehicles.html',
})
export class VehiclesPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, apollo: Apollo) {
    apollo
      .query({
        query: gql`
          query GetVehicles {
            getVehicles {
            vin,
            timeStamp
            }
        }`
      })
      .subscribe(console.log);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad VehiclesPage');
  }

}

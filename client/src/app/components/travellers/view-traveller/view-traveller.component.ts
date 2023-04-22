import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Destination } from 'src/app/models/destination.model';
import { Traveller } from 'src/app/models/traveller.model';
import { TravellersService } from 'src/app/services/travellers.service';

@Component({
  selector: 'app-view-traveller',
  templateUrl: './view-traveller.component.html',
  styleUrls: ['./view-traveller.component.css']
})
export class ViewTravellerComponent {
  addDestinationResponse: Destination = {
    id: 0,
    name: ''
  }

  addTravellerResponse: Traveller = {
    id: '',
    name: '',
    email: '',
    phone: 0,
    destinations: []
  }

  constructor(private route: ActivatedRoute, private travellerService: TravellersService) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe({
      next: (params) => {
        const id = params.get('id');

        if (id) {
          this.travellerService.getTraveller(id)
          .subscribe({
            next: (traveller) => {
              this.addTravellerResponse = traveller;
            },
            error: (response) => {
              console.log(response);
            }
          });
        }
      }
    });
  }
}

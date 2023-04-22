import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AddTraveller } from 'src/app/models/addTraveller.model';
import { Destination } from 'src/app/models/destination.model';
import { Traveller } from 'src/app/models/traveller.model';
import { TravellersService } from 'src/app/services/travellers.service';

@Component({
  selector: 'app-add-traveller',
  templateUrl: './add-traveller.component.html',
  styleUrls: ['./add-traveller.component.css']
})
export class AddTravellerComponent {

  isEditMode: boolean = false;

  addDestinationRequest: Destination = {
    id: 0,
    name: ''
  }

  addTravellerRequest: AddTraveller = {
    name: '',
    email: '',
    phone: 0,
    destinations: []
  }

  travellerResponse: Traveller = {
    id: '',
    name: '',
    email: '',
    phone: 0,
    destinations: []
  }


  constructor(
    private travellerService: TravellersService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe({
      next: (params) => {
        const id = params.get('id');

        if (id) {
          this.isEditMode = true;

          this.travellerService.getTraveller(id)
          .subscribe({
            next: (traveller) => {
              this.travellerResponse = traveller;
            },
            error: (response) => {
              console.log(response);
            }
          });
        }
      }
    });
  }

  /**
   * Create a Traveller
   */
  addTraveller() {
    this.addTravellerRequest.destinations.push(this.addDestinationRequest);
    this.travellerService.createTraveller(this.addTravellerRequest)
    .subscribe({
      next: (traveller) => {
        this.router.navigate(['travellers']);
      },
      error: (response) => {
        console.log(response);
      }
    });
  }

  updateTraveller() {
    this.travellerService.updateTraveller(this.travellerResponse.id, this.travellerResponse)
    .subscribe({
      next: (traveller) => {
        this.router.navigate(['travellers']);
      },
      error: (response) => {
        console.log(response);
      }
    });
  }

  deleteTraveller(id: string) {
    this.travellerService.deleteTraveller(id)
    .subscribe({
      next: (traveller) => {
        this.router.navigate(['travellers']);
      },
      error: (response) => {
        console.log(response);
      }
    });
  }

  /**
   * Cancel operation, empty fields, and go back to home
   */
  cancelTraveller() {
    this.router.navigate(["travellers"]);
  }
}

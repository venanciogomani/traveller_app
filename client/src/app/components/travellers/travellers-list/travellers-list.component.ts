import { Component } from '@angular/core';
import { Traveller } from 'src/app/models/traveller.model';
import { TravellersService } from 'src/app/services/travellers.service';

@Component({
  selector: 'app-travellers-list',
  templateUrl: './travellers-list.component.html',
  styleUrls: ['./travellers-list.component.css']
})
export class TravellersListComponent {
  travellers: Traveller[] = [];
  
  constructor(private travellerService: TravellersService) {}

  ngOnInit(): void {
    this.travellerService.getAllTravellers()
    .subscribe({
      next: (travellers) => {
        this.travellers = travellers;
      },
      error: (response) => {
        console.log(response);
      }
    });
  }
}

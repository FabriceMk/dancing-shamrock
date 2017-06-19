import { Component, OnInit } from '@angular/core';

import { DancesService } from '../shared/dances.service';

import { DanceOverview } from '../shared/models/dance-overview';

@Component({
  selector: 'app-dances-list',
  templateUrl: './dances-list.component.html',
  styleUrls: ['./dances-list.component.scss']
})
export class DancesListComponent implements OnInit {
  errorMessage: string;
  dances: DanceOverview[];

  constructor(private dancesService: DancesService) { }

  ngOnInit() { this.loadDances(); }

  loadDances() {
    this.dancesService.getDancesList()
                      .subscribe(
                        dances => this.dances = dances,
                        error => this.errorMessage = <any>error
                      );
  }
}

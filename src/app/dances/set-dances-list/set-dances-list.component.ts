import { Component, OnInit } from '@angular/core';

import { DancesService } from '../shared/dances.service';

import { SetDance } from '../shared/models/set-dance.model';

/**
 * Component which displays a list of set dances.
 */
@Component({
  selector: 'app-set-dances-list',
  templateUrl: './set-dances-list.component.html',
  styleUrls: ['./set-dances-list.component.scss']
})
export class SetDancesListComponent implements OnInit {
  errorMessage: string;
  dances: SetDance[];

  constructor(private dancesService: DancesService) { }

  ngOnInit() { this.loadDances(); }

  loadDances(): void {
    this.dancesService.getDancesList()
      .subscribe(
        dances => this.dances = dances,
        error => this.errorMessage = <any>error
      );
  }

  displaySteps(dance: SetDance) {
    const result = dance.stepsStyles.join(' - ');
    return result;
  }
}

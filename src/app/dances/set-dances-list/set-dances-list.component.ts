import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { DancesService } from '../shared/dances.service';

import { SetDanceOverview } from '../shared/models/set-dance-overview.model';

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
  dances: SetDanceOverview[];

  constructor(
    private router: Router,
    private dancesService: DancesService) { }

  ngOnInit() {
    this.loadDances();
  }

  /**
   * Load the set dances list.
   */
  loadDances(): void {
    this.dancesService.getDancesList()
      .subscribe(
        dances => this.dances = dances,
        error => this.errorMessage = <any>error
      );
  }

  displayStyles(dance: SetDanceOverview) {
    const result = dance.styles.map((s) => { return s[0].toUpperCase() + s.slice(1); }).join(' - ');
    return result;
  }
}

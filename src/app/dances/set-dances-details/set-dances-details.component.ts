import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

import 'rxjs/add/operator/switchMap';

import { DancesService } from '../shared/dances.service';
import { SetDance } from '../shared/models/set-dance.model';
import { SetDanceMovementSpecialType } from '../shared/set-dance-movement-special-type.enum';

/**
 * Component which displays the details of a set dance.
 */
@Component({
  selector: 'app-set-dances-details',
  templateUrl: './set-dances-details.component.html',
  styleUrls: ['./set-dances-details.component.scss']
})
export class SetDancesDetailsComponent implements OnInit {
  /** The set dance to display the details from. */
  dance: SetDance;

  /** List of special movement types ids. */
  specialType = SetDanceMovementSpecialType;

  /** Loading state of the component data. */
  isLoading = true;

  /** Error state of the component data. */
  hasError = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private dancesService: DancesService
  ) {}

  ngOnInit() {
    this.route.params
      .switchMap((params: ParamMap) => this.dancesService.getDance(params['id']))
      .subscribe(
        dance => {
        this.dance = dance;
        this.isLoading = false;
        },
        error => {
          this.hasError = true;
        }
      );
  }
}

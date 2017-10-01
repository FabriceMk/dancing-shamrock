import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

import 'rxjs/add/operator/switchMap';

import { ConfigurationService } from '../../core/configuration/configuration.service';
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

  /** Displays the descriptions */
  displayDescriptions = true;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private configurationService: ConfigurationService,
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

    this.displayDescriptions = this.configurationService.getDescriptionsDisplay();
  }

  /**
   * Displays a nice string for couples.
   */
  displayCouples(couplesArray: number[]): string {
    let firstTop = false;
    let secondTop = false;
    let firstSide = false;
    let secondSide = false;

    for (const couple of couplesArray){
      switch (couple) {
        case 1: firstTop = true; break;
        case 2: firstSide = true; break;
        case 3: secondTop = true; break;
        case 4: secondSide = true; break;
      }
    }

    if (firstSide && secondTop && firstSide && secondSide) {
      return 'All couples';
    }

    if (firstTop && secondTop && !firstSide && !secondSide) {
      return 'Top couples';
    }

    if (!firstTop && !secondTop && firstSide && secondSide) {
      return 'Side couples';
    }

    const result = [];

    if (firstTop) {
      result.push('1st Top');
    }

    if (secondTop) {
      result.push('2nd Top');
    }

    if (firstSide) {
      result.push('1st Side');
    }

    if (secondSide) {
      result.push('2nd Side');
    }
    return result.join(' - ');
  }
}

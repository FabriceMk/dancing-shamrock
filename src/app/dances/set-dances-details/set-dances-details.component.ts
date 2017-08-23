import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

import 'rxjs/add/operator/switchMap';

import { DancesService } from '../shared/dances.service';
import { SetDance } from '../shared/models/set-dance.model';

/**
 * Component which displays the details of a set dance.
 */
@Component({
  selector: 'app-set-dances-details',
  templateUrl: './set-dances-details.component.html',
  styleUrls: ['./set-dances-details.component.scss']
})
export class SetDancesDetailsComponent implements OnInit {
  dance: SetDance;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private dancesService: DancesService
  ) {}

  ngOnInit() {
    this.route.params
      .switchMap((params: ParamMap) => this.dancesService.getDance(params['id']))
      .subscribe(dance => {
        this.dance = dance;
      });
  }
}

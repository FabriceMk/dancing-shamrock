import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

import 'rxjs/add/operator/switchMap';

/**
 * Component which displays the details of a set dance.
 */
@Component({
  selector: 'app-set-dances-details',
  templateUrl: './set-dances-details.component.html',
  styleUrls: ['./set-dances-details.component.scss']
})
export class SetDancesDetailsComponent implements OnInit {
  id: string;

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = params['id'];
    });
  }
}

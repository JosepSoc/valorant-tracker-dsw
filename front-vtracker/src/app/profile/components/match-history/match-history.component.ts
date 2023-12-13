import { Component, Input, OnInit } from '@angular/core';
import { Matchs } from 'src/app/models/matchs.model';


@Component({
  selector: 'app-match-history',
  templateUrl: './match-history.component.html',
  styleUrls: ['./match-history.component.scss'],
})
export class MatchHistoryComponent {
  @Input()
  matchs!: Matchs[];

  constructor() { }

  ngOnInit(): void {
    this.matchs.forEach((match) => {
      if ((match.wins ?? 0) > (match.losses ?? 0)) {
        match.win = true;
      } else {
        match.win = false;
      }
    });
    console.log(this.matchs);
  }
}

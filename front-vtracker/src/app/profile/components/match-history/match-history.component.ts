import { Component, Input, OnInit } from '@angular/core';
import { Matchs } from 'src/app/models/matchs.model';
import { MatchsHistoryService } from 'src/app/services/henrik-valo-api/matchs-history.service';

@Component({
  selector: 'app-match-history',
  templateUrl: './match-history.component.html',
  styleUrls: ['./match-history.component.scss'],
})
export class MatchHistoryComponent {
  @Input()
  matchs!: Matchs[];

  constructor() {}
}

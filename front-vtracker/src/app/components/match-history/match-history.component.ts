import { Component, OnInit } from '@angular/core';
import { Matchs } from 'src/app/models/matchs.model';
import { MatchsHistoryService } from 'src/app/services/matchs-history.service';

@Component({
  selector: 'app-match-history',
  templateUrl: './match-history.component.html',
  styleUrls: ['./match-history.component.scss'],
})
export class MatchHistoryComponent implements OnInit {
  constructor(private api: MatchsHistoryService) {}
  data: any;

  ngOnInit(): void {
    console.log('///////////////////////////////////////');
    let match: Matchs = { name: 'primmieyk', tag: 'XGOD', region: 'ap' };
    console.log(this.api.getMatchs(match));
  }

  matchs = [
    {
      agent:
        'https://media.valorant-api.com/agents/320b2a48-4d9b-a075-30f1-1f93a9b638fa/displayicon.png',
      map: 'https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/blta9b912e1a1b59aa4/5ebc471cfa550001f72bcb13/ascent-featured.png',
      match_id: 'a1b2c3d4-5e6f-7a8b-9c0d-1e2f3a4b5c6d',
      wins: 10,
      losses: 13,
      kills: 31,
      deaths: 16,
      assists: 7,
      mode: 'Unrated',
      mmr: 0,
    },
    {
      agent:
        'https://media.valorant-api.com/agents/9f0d8ba9-4140-b941-57d3-a7ad57c6b417/displayicon.png',
      map: 'https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/bltd188c023f88f7d91/5ebc46db20f7727335261fcd/split-featured.png',
      match_id: 'a1b2c3d4-5e6f-7a8b-9c0d-1e2f3a4b5c6d',
      wins: 13,
      losses: 3,
      kills: 19,
      deaths: 10,
      assists: 2,
      mode: 'Spike Rush',
      mmr: 0,
    },
    {
      agent:
        'https://media.valorant-api.com/agents/6f2a04ca-43e0-be17-7f36-b3908627744d/displayicon.png',
      map: 'https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt8538036a309525ae/5ebc470bfd85ad7411ce6b50/bind-featured.png',
      match_id: 'a1b2c3d4-5e6f-7a8b-9c0d-1e2f3a4b5c6d',
      wins: 13,
      losses: 10,
      kills: 22,
      deaths: 18,
      assists: 13,
      mode: 'Competitive',
      mmr: 25,
    },
    {
      agent:
        'https://media.valorant-api.com/agents/6f2a04ca-43e0-be17-7f36-b3908627744d/displayicon.png',
      map: 'https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/bltf4485163c8c5873c/6131b23e9db95e7ff74b6393/Valorant_FRACTURE_Minimap_Alpha_web.png',
      match_id: 'e1b2c3d4-5e6f-7a8b-9c0d-1e2f3a4b5c6d',
      wins: 8,
      losses: 13,
      kills: 12,
      deaths: 21,
      assists: 5,
      mode: 'Competitive',
      mmr: -25,
    },
  ];
}

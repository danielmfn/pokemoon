import { Component, OnInit } from '@angular/core';
import { CardData } from 'src/app/core/interface/card-data';
import { Card } from 'src/app/core/model/card';
import { CardService } from 'src/app/core/service/card.service';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.sass']
})
export class CardListComponent implements OnInit {

  cards: Array<CardData> = [];

  constructor(private cardService: CardService) { }

  ngOnInit(): void {
  }

  loadCards(): void {
    this.cardService.findAll().subscribe((response: Card) => {
      this.cards = response.data;
    });
  }

}

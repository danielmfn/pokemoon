import { CardData } from '../interface/card-data';

export class Card {
  data: Array<CardData>;
  page: number;
  pageSize: number;
  count: number;
  totalCount: number;

  constructor(
    data: Array<CardData>,
    page: number,
    pageSize: number,
    count: number,
    totalCount: number
  ) {
    this.data = data;
    this.page = page;
    this.pageSize = pageSize;
    this.count = count;
    this.totalCount = totalCount;
  }

}

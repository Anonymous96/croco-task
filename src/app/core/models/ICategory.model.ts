import { Slots } from './ISlots.model';

export type CategoryResponse = {
  data: Category[];
};

export type Category = {
  type: string;
  category: string;
  platform?: string;
  name: string;
  order: number;
  games: Slots[];
  totalGames: number;
  group: string;
  selected: boolean;
};

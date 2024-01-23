import { Providers } from './IProviders.model';

export type Slots = {
  gameId: string;
  game_id: number;
  image: string;
  image2: string;
  imageSet: {
    blurhash: string;
    original: string;
    webp: string;
  };
  name: string;
  order: number;
  provider: string;
  providerName: string;
  tags: string[];
  url: string;
};

export type SlotsResponse = {
  data: SlotsByProvider;
};

export interface SlotsByProvider extends Providers {
  games: Slots[];
}

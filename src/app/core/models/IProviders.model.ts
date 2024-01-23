import { SlotsByProvider } from './ISlots.model';

export type Providers = {
  iframeH: number;
  iframeW: number;
  name: string;
  order: number;
  provider: string;
  tags: string[];
  totalGames: number;
  type: string;
  vendor: string;
  _id: string;
};

export type ProviderResponse = {
  data: Providers[];
};

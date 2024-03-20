export type PokemonLimit = number | undefined;

export type PokemonListItem = {
  name: string;
  url: string;
};

export type PokemonListResponse = Promise<{
  count: number;
  next?: string;
  previous: string | null;
  results: PokemonListItem[];
}>;

export type PokemonEntity = {
  name: string;
  url: string;
  imageUrl?: string;
  error?: string;
};

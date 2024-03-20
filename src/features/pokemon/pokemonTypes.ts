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

export type PokemonBaseEntity = {
  name: string;
  weight?: number | null;
  imageUrl?: string;
  error?: string;
  url: string;
};

export type PokemonEntity = Required<PokemonBaseEntity> & {
  id: string;
  cartCount: number;
};

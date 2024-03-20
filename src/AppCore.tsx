import React, { useEffect } from 'react';
import { Button, StatusBar } from 'react-native';
import 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ThemeProvider, styled } from 'styled-components/native';
import { LoadingOverlay } from './components';
import PokemonGridView from './components/PokemonGridView';
import {
  fetchPokemonAsyncThunk,
  selectIsPokemon,
  useAppDispatch,
  useAppSelector,
} from './store';
import { useAppTheme } from './theme/useAppTheme';

const AppSafeArea = styled(SafeAreaView)`
  flex: 1;
  background-color: #3e3d3d;
`;

let AppCore = () => {
  const dispatch = useAppDispatch();
  const { appTheme, barStyle } = useAppTheme();
  const isPokemon = useAppSelector(selectIsPokemon);

  useEffect(() => {
    !isPokemon && dispatch(fetchPokemonAsyncThunk(100));
  }, []);

  return (
    <ThemeProvider theme={appTheme}>
      <AppSafeArea>
        <StatusBar
          barStyle={barStyle}
          backgroundColor={appTheme.colors.statusBar}
        />
        <LoadingOverlay />
        <Button
          title="Fetch Pokemon"
          onPress={() => dispatch(fetchPokemonAsyncThunk(10))}
        />
        <PokemonGridView />
      </AppSafeArea>
    </ThemeProvider>
  );
};

export default AppCore;

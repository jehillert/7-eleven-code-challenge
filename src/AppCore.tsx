import React, { useEffect } from 'react';
import { Button, StatusBar } from 'react-native';
import 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ThemeProvider, styled } from 'styled-components/native';
import PokemonGrid from './components/PokemonGrid';
import {
  fetchPokemonAsyncThunk,
  useAppDispatch,
  useAppSelector,
} from './store';
import { selectIsLoading } from './store/slices/globalUiSlice';
import { useAppTheme } from './theme/useAppTheme';

const AppSafeArea = styled(SafeAreaView)`
  flex: 1;
  background-color: #3e3d3d;
`;

let AppCore = () => {
  const dispatch = useAppDispatch();
  const { appTheme, barStyle } = useAppTheme();
  const isLoading = useAppSelector(selectIsLoading);

  useEffect(() => {
    dispatch(fetchPokemonAsyncThunk(10));
  }, []);

  return (
    <ThemeProvider theme={appTheme}>
      <AppSafeArea>
        <StatusBar
          barStyle={barStyle}
          backgroundColor={appTheme.colors.statusBar}
        />
        <Button
          title="Fetch Pokemon"
          onPress={() => dispatch(fetchPokemonAsyncThunk(10))}
        />
        <PokemonGrid />
      </AppSafeArea>
    </ThemeProvider>
  );
};

export default AppCore;

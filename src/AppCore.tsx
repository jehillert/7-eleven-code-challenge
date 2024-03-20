import React, { useEffect } from 'react';
import { StatusBar } from 'react-native';
import 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ThemeProvider, styled } from 'styled-components/native';
import NavWrapper from './features/navigation/NavWrapper';
import StackNavigator from './features/navigation/StackNavigator';
import {
  fetchPokemonAsyncThunk,
  selectIsPokemon,
  store,
  useAppDispatch,
  useAppSelector,
} from './store';
import { useAppTheme } from './theme/useAppTheme';

const AppSafeArea = styled(SafeAreaView)`
  flex: 1;
`;

let AppCore = () => {
  const dispatch = useAppDispatch();
  const { appTheme, barStyle } = useAppTheme();
  const isPokemon = useAppSelector(selectIsPokemon);
  const s = useAppSelector(store.getState);

  useEffect(() => {
    !isPokemon && dispatch(fetchPokemonAsyncThunk());
  }, []);

  return (
    <ThemeProvider theme={appTheme}>
      <AppSafeArea>
        <StatusBar
          barStyle={barStyle}
          backgroundColor={appTheme.colors.background1}
        />
        <NavWrapper>
          <StackNavigator />
        </NavWrapper>
      </AppSafeArea>
    </ThemeProvider>
  );
};

export default AppCore;

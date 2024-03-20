import React, { useEffect } from 'react';
import { Button, ScrollView, StatusBar, View } from 'react-native';
import 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { ThemeProvider, styled } from 'styled-components/native';
import {
  fetchPokemonThunk,
  selectPokemon,
  useAppDispatch,
  useAppSelector,
} from './store';
import { useAppTheme } from './theme/useAppTheme';

const AppSafeArea = styled(SafeAreaView)`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.statusBar};
`;

let AppCore = () => {
  const dispatch = useAppDispatch();
  const { appTheme, barStyle, isDark } = useAppTheme();
  const backgroundStyle = {
    backgroundColor: isDark ? Colors.darker : Colors.lighter,
  };
  const pokemon = useAppSelector(selectPokemon);
  useEffect(() => {
    console.log(JSON.stringify(pokemon, undefined, 2));
  }, [pokemon]);

  return (
    <ThemeProvider theme={appTheme}>
      <AppSafeArea>
        <StatusBar
          barStyle={barStyle}
          backgroundColor={appTheme.colors.statusBar}
        />
        {/* <AppNavContainer> */}
        {/* <StackNavigator /> */}
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={backgroundStyle}>
          <Button
            title="Fetch Pokemon"
            onPress={() => dispatch(fetchPokemonThunk())}
          />
          <View
            style={{
              backgroundColor: isDark ? Colors.black : Colors.white,
            }}
          />
        </ScrollView>
        {/* </AppNavContainer> */}
      </AppSafeArea>
    </ThemeProvider>
  );
};

export default AppCore;

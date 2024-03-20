import { NavigationContainer } from '@react-navigation/native';
import React, { ReactNode, useRef } from 'react';
import { Screen } from './navigationTypes';
import navigationRef from './root-navigation';

type Props = {
  children?: ReactNode;
};

const NavWrapper = ({ children }: Props) => {
  const routeNameRef = useRef<Screen>();

  return (
    <NavigationContainer
      ref={navigationRef}
      onReady={() => {
        routeNameRef.current = navigationRef?.getCurrentRoute()?.name as
          | Screen
          | undefined;
      }}
      onStateChange={async () => {
        let previousRouteName = routeNameRef?.current;
        const currentRouteName = navigationRef?.getCurrentRoute()?.name as
          | Screen
          | undefined;

        if (previousRouteName !== currentRouteName) {
          routeNameRef.current = currentRouteName;
        }
      }}>
      {children}
    </NavigationContainer>
  );
};

export default NavWrapper;

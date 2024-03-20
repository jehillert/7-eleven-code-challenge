import React from 'react';
import { Modal, StyleProp, ViewStyle } from 'react-native';
import { SkypeIndicator, SkypeIndicatorProps } from 'react-native-indicators';
import styled, { useTheme } from 'styled-components/native';
import { selectIsLoading, useAppSelector } from '../store';

const LocalizedWrapper = styled.View`
  align-items: center;
  flex-direction: column;
  justify-content: center;
  position: absolute;
  height: 100%;
  width: 100%;
  elevation: 10;
  background-color: ${({ theme }) => theme.colors.backdrop};
`;

const FullScreenWrapper = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.backdrop};
`;

const TitleText = styled.Text`
  ${({ theme }) => theme.typography.titleLarge};
`;

type Props = {
  displayText?: string;
  isLoading?: boolean;
  isLocalized?: boolean;
  indicatorProps?: SkypeIndicatorProps;
  style?: StyleProp<ViewStyle>;
};

const LoadingOverlay = ({
  displayText,
  indicatorProps,
  isLoading: isLoadingProp = false,
  isLocalized = false,
  style,
}: Props) => {
  const { colors } = useTheme();
  const isLoadingRedux = useAppSelector(selectIsLoading);
  const isLoading = isLoadingProp ? isLoadingProp : isLoadingRedux;
  const _indicatorProps: NonNullable<SkypeIndicatorProps> = {
    ...indicatorProps,
    color: colors.onPrimary,
    size: 60,
  };

  const overlay = isLocalized ? (
    <OverlayWrapper.Localized style={style}>
      <SkypeIndicator {..._indicatorProps} />
    </OverlayWrapper.Localized>
  ) : (
    <Modal transparent={true} style={style}>
      <OverlayWrapper.FullScreen>
        <SkypeIndicator {..._indicatorProps} />
        {!!displayText && <TitleText>{displayText}</TitleText>}
      </OverlayWrapper.FullScreen>
    </Modal>
  );

  return isLoading ? overlay : null;
};

const OverlayWrapper = {
  Localized: LocalizedWrapper,
  FullScreen: FullScreenWrapper,
};

export { LoadingOverlay };

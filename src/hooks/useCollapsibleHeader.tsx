import {useNavigation} from '@react-navigation/native';
import React, {useMemo} from 'react';
import {
  runOnJS,
  useAnimatedScrollHandler,
  useSharedValue,
} from 'react-native-reanimated';
import {HeaderTitle} from '../components/HeaderTitle';

type UseCollapsibleHeaderProps = {
  title: string;
};

export const useCollapsibleHeader = ({title}: UseCollapsibleHeaderProps) => {
  const navigation = useNavigation();
  const showHeader = useSharedValue(false);

  const showHeaderJS = (show: boolean) => {
    navigation.setOptions({
      headerTitle: show ? title : '',
      headerStyle: show
        ? undefined
        : {
            backgroundColor: 'rgb(242, 242, 242)',
          },
      headerShadowVisible: show,
    });
  };

  const scrollHandler = useAnimatedScrollHandler({
    onScroll: event => {
      const show = event.contentOffset.y > 20;
      showHeader.value = show;

      runOnJS(showHeaderJS)(show);
    },
  });

  const renderHeader = useMemo(() => {
    return <HeaderTitle title={title} showHeader={showHeader} />;
  }, [showHeader, title]);

  return {
    renderHeader: () => renderHeader,
    scrollHandler,
  };
};

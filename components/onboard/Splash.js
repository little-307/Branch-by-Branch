import React, {useState, useRef} from 'react';
import {View, StyleSheet, FlatList, Animated, Button} from 'react-native';

import SlideData from './slides';
import OnboardingItem from './OnboardingItem';
import Paginator from './Paginator';

export default function Splash() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollX = useRef(new Animated.Value(0)).current;
  const slidesRef = useRef(null);

  const viewableItemsChanged = useRef(({viewableItems}) => {
    setCurrentIndex(viewableItems[0].index);
  });

  const viewConfig = useRef({viewAreaCoveragePercentThreshold: 50}).current;

  return (
    <View style={styles.container}>
      <View style={{flex: 3}}>
        <FlatList
          data={SlideData}
          renderItem={({item}) => <OnboardingItem item={item} />}
          horizontal
          showsHorizontalScrollIndicator={false}
          pagingEnabled
          bounces={false}
          keyExtractor={item => item.id}
          onScroll={Animated.event(
            [{nativeEvent: {contentOffset: {x: scrollX}}}],
            {useNativeDriver: false},
          )}
          scrollEventThrottle={32}
          // ERROR  TypeError: onViewableItemsChanged is not a function. (In 'onViewableItemsChanged(info)', 'onViewableItemsChanged' is an instance of Object)
          onViewableItemsChanged={viewableItemsChanged}
          viewabilityConfig={viewConfig}
          ref={slidesRef}
        />
        <Paginator data={SlideData} scrollX={scrollX} />
        <Button title="Get Started" onPress={() => console.log('Start')} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

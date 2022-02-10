import React from 'react';
import {View, Text, StyleSheet, Image, useWindowDimensions} from 'react-native';

export default function OnboardingItem({item}) {
  const {width} = useWindowDimensions();
  return (
    <View style={[styles.container, {width}]}>
      <Image
        source={item.image}
        style={[styles.image, {width, resizeMode: 'contain'}]}
      />
      <View style={styles.txtContainer}>
        <Text style={styles.title}>{item.title}</Text>
        <Text styles={styles.description}>{item.description}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    justifyItems: 'space-around',
    alignItems: 'center',
  },
  image: {
    flex: 0.7,
    justifyContent: 'center',
    height: 50,
    resizeMode: 'contain',
    paddingBottom: 5,
  },
  txtContainer: {
    flex: 0.3,
  },
  title: {
    // flex: 0.3,
    fontWeight: '800',
    fontSize: 28,
    marginBottom: 10,
    paddingTop: 10,
    color: '#6880b3',
    textAlign: 'center',
  },
  description: {
    fontWeight: '300',
    // fontSize: 8,
    color: '#fff',
    textAlign: 'center',
    paddingHorizontal: 64,
  },
});

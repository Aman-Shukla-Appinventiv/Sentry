import React from 'react';

import * as Sentry from '@sentry/react-native';
import {StyleSheet, Text, View, Button} from 'react-native';

export default function Home({navigation}) {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Next Screen</Text>
      <Button
        title="Go to Home Screen"
        onPress={() => {
          setTimeout(() => {
            navigation.goBack();
          }, 10000);
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({});

import React, {useState} from 'react';
import {Text} from 'react-native';
import RNBootSplash from 'react-native-bootsplash';
const getFonts = () => {
  return Font.loadAsync({
    'openSans-regular': require('./assets/fonts/OpenSans-Regular.ttf'),
    'openSans-Bold': require('./assets/fonts/OpenSans-Bold.ttf'),
  });
};
const App = () => {
  const [fontLoaded, setFontLoaded] = useState(false);
  if (fontLoaded) {
    return <Text>Check if this is working or not</Text>;
  } else {
    return <RNBootSplash />;
  }
};

export default App;

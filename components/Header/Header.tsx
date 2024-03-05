import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Text} from 'react-native';

import styles from './Header.stylesheet';

export const Header = (): React.ReactElement => {
  return (
    <View style={styles.container}>
      <Text>Midgard Spellbook</Text>
    </View>
  );
}

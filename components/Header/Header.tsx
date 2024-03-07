import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Text} from 'react-native';

import { baseStyles } from '../../styles';
import styles from './Header.stylesheet';

export const Header = (): React.ReactElement => {
  return (
    <View style={styles.container}>
      <View style={styles.titleWrapper}>
        <Text style={[ baseStyles.sheetTitle ]}>Midgard Spellbook</Text>
      </View>

    </View>
  );
}

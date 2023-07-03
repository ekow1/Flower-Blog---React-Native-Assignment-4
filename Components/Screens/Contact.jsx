import { Text, View, StyleSheet,Button } from 'react-native';
import Constants from 'expo-constants';



export default function Conatct({navigation}) {
  return (
    <View style={styles.container}>
      <Text style={styles.paragraph}>
       Conatct Page
      </Text>
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems:'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#CAD5E2',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

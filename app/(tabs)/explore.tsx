import { View, Text, StyleSheet, Image } from 'react-native';

export default function TabTwoScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Explore</Text>
      <Text>This is Tab Two screen.</Text>
      <Image
        source={require('@/assets/images/react-logo.png')}
        style={{ width: 100, height: 100, marginTop: 16 }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});

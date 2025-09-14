import React from 'react';
// ...existing code...
import { View, Text, StyleSheet, Button } from 'react-native';

export default function HomeScreen() {
  const [count, setCount] = React.useState<number>(0);
  //jsx code
  return (
    <View style={styles.container}> // View is like a div
      <Text style={styles.title}>
        count = {count}
        </Text> 
      <Button title="Count" onPress={() => setCount(count + 1)} />
      
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
  hello1:{
    color: "pink",
    borderColor: "blue",  
    borderWidth: 2,
  }
});

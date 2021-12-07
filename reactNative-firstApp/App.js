import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, Button, TextInput, ScrollView, FlatList } from 'react-native';
import GoalItem from './components/GoalItem';
import InputItem from './components/InputItem';

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);
  const [isVisible, setIsVisible] = useState(false);

  const addHandler = newGoal => {
    if(newGoal !== '')
    {
      setCourseGoals(currentGoals => 
        [...currentGoals, 
            {id: Math.random().toString(), value: newGoal}
        ] 
      );
      setIsVisible(false);
    }
   
  }

  const removeHandler = goalIndex => {
    setCourseGoals(currentGoals => {
      return currentGoals.filter(goal => goal.id !== goalIndex)
    })
  }

  const showHandler = () => {
    setIsVisible(true);
  }

  const cancelHandler = () => {
      setIsVisible(false);
  }

  return (
    <View style={styles.container}>
      <Button title="Add new Goal" onPress={showHandler}/>
      <InputItem onpress={addHandler} visibility={isVisible} cancel={cancelHandler}/>
      <FlatList data={courseGoals} 
      keyExtractor={(item, index) => item.id}
      renderItem={itemData=> 
        <GoalItem id={itemData.item.id}
                  title={itemData.item.value}
                  ondelete={removeHandler}/>}
      />
       
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 50
  },
});

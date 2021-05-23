import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  ScrollView,
  FlatList
} from 'react-native';

import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);
  const [ifModalOpen, setIfModalOpen] = useState(false) 

  const addGoalHandler = goalTitle => {
    setCourseGoals(currentGoals => [
      ...currentGoals,
      { id: Math.random().toString(), value: goalTitle }
    ]);

    setIfModalOpen(false);
  };

const removeGoalHandler = goalid => {
    setCourseGoals(
      currentGoals => {
        return currentGoals.filter((goal) => goal.id !== goalid );
      });
};

const cancelAdding = () => {
  setIfModalOpen(false);
}

  return (
    <View style={styles.screen}>
      <Button title="ADD GOALS" onPress={() => setIfModalOpen(true)}/>
      <GoalInput visible={ifModalOpen} onAddGoal={addGoalHandler} onCancel={cancelAdding} />
      <FlatList
        keyExtractor={(item, index) => item.id}
        data={courseGoals}
        renderItem={itemData => <GoalItem id = {itemData.item.id} title={itemData.item.value} onDelete = {removeGoalHandler}/>}
      />
    </View>
    

  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50
  },
});

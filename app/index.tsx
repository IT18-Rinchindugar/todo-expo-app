import { EvilIcons } from "@expo/vector-icons";
import { Text, View, TextInput, StyleSheet, KeyboardAvoidingView, TouchableOpacity, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Feather from '@expo/vector-icons/Feather';
import TaskItem from "@/components/TaskItem";
import { useState } from "react";

const styles = StyleSheet.create({
  input: {
    height: 48,
    borderColor: "#5DB075",
    color: "black",
    borderWidth: 2,
    flex: 1,
    padding: 10,
    borderRadius: 14,
  },
});

export default function Index() {
  const [tasks, setTasks] = useState([
    { id: 1, text: 'Doctor Appointment', isCompleted: true },
    { id: 2, text: 'Meeting at School', isCompleted: false },
  ]);

  const [text, setText] = useState('');
  // Function to Add Task
  function addTask() {
    if (text.trim() === '') return;
    const newTask = { id: Date.now(), text, isCompleted: false };
    setTasks([...tasks, newTask]);
    setText('');
  }
  // Function to Delete Task
  function deleteTask(id: number) {
    setTasks(tasks.filter(task => task.id !== id));
  }
  // Function to Toggle Task Completion
  function toggleCompleted(id: number) {
    setTasks(tasks.map(task => (task.id === id ? { ...task, isCompleted: !task.isCompleted } : task)));
  }


  return (
    <SafeAreaView
      style={{
        flex: 1,
        marginHorizontal: 20,
      }}
    >
      <KeyboardAvoidingView
        behavior="padding"
        style={{ flex: 1 }}
      >
        <View style={{ flex: 1 }}>
          <Text
            style={{
              fontSize: 20,
              fontWeight: "bold",
              marginVertical: 10,
            }}
          >
            Today, 2024.11.07
          </Text>
          <View style={{ height: 20 }} />
          <ScrollView>
            {tasks.map(task => (
              <TaskItem key={task.id} title={task.text} isCompleted={task.isCompleted}
                onDelete={() => deleteTask(task.id)} onToggle={() => toggleCompleted(task.id)} />
            ))}
          </ScrollView>
          <View style={{ position: "absolute", bottom: 20, width: "100%" }}>
            <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
              <TextInput
                style={styles.input}
                placeholder="Enter your task"
                placeholderTextColor="grey"
                value={text}
                onChangeText={setText}
              />
              <View style={{
                marginLeft: 10,
                paddingHorizontal: 20,
                height: 48,
                justifyContent: "center",
                borderRadius: 14,
                borderColor: "#5DB075",
                borderWidth: 2,
              }}
              >
                <TouchableOpacity onPress={addTask}>
                  <Feather name="send" size={20} color="#5DB075" />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

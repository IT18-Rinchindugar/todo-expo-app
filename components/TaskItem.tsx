import { Feather } from "@expo/vector-icons";
import { Text, StyleSheet, View, TouchableOpacity, Alert } from "react-native";

const styles = StyleSheet.create({
  container: {
    padding: 16,
    borderRadius: 16,
    backgroundColor: '#f5f5f5',
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 6,
  },
  taskIcon: {
    width: 24,
    height: 24,
    backgroundColor: '#5DB075',
    borderRadius: 6,
    marginRight: 12,
  },
  taskText: {
    fontSize: 18,
    flex: 1,
  },
  checkbox: {
    width: 24,
    height: 24,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: '#5DB075',
  },
  checkboxContainer: {
    width: 24,
    height: 24,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: '#5DB075',
    justifyContent: 'center',
    alignItems: 'center',
  },
  checkedBox: {
    backgroundColor: '#5DB075',
  }
});

interface TaskItemProps {
  title: string;
  isCompleted: boolean;
  onToggle: () => void;
  onDelete: () => void;
}

function TaskItem({ title, isCompleted = false, onToggle, onDelete }: TaskItemProps) {
  return (
    <TouchableOpacity
      onPress={onToggle}
      onLongPress={() => {
        Alert.alert(
          "Delete Task",
          "Are you sure you want to delete this task?",
          [
            {
              text: "Cancel",
              style: "cancel"
            },
            {
              text: "Delete",
              onPress: onDelete,
              style: "destructive"
            }
          ]
        );
      }}>
      <View style={styles.container}>
        <View style={styles.taskIcon} />
        <Text style={styles.taskText}>{title}</Text>
        <View style={[styles.checkboxContainer, isCompleted && styles.checkedBox]}>
          {isCompleted && <Feather name="check" size={16} color="white" />}
        </View>
      </View>
    </TouchableOpacity>
  );
}

export default TaskItem;
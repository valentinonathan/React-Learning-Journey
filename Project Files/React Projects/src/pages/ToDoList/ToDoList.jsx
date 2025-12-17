import styles from './ToDoList.module.css'
import Task from './Components/Task/Task';
import { useState } from 'react';

function ToDoList() {

    const [tasks, setTasks] = useState([]);

    function handleAddTask(){
        setTasks(t => [...t, {text: "", id: crypto.randomUUID(), status:false}]);
    }
    function handleEnterTask(text, id) {
        setTasks(t => {
            const tLength = t.length;
            let newT = [];
            for(let i = 0 ; i < tLength ; i++) {
                let individualTask = t[i];
                if (individualTask.id === id) {
                    newT[i] = {text: text, id: id};
                } else {
                    newT[i] = individualTask;
                }
            }
            return newT;
        })
    }
    function handleTaskStatus(status, id){
    }

    return(
        <>
        <h2>{new Date().toLocaleDateString('en-US', {weekday: 'long'})} To-do List:</h2>
        <div className={styles.buttonContainer}>
            <button className={styles.button} onClick={handleAddTask}>Add Task</button>
            <button className={styles.button}>Select Task</button>
            <button className={styles.button}>Delete Task</button>
        </div>
        <div className={styles.taskContainer}>
            {tasks.map((task) => <Task key={task.id} id={task.id} callback1={handleEnterTask}/>)}
        </div>
        </>
    );
}

export default ToDoList
import styles from './ToDoList.module.css'
import Task from './Components/Task/Task';
import { use, useEffect, useState } from 'react';

function ToDoListImproved() {
    const [tasks, setTasks] = useState([]);
    const [select, setSelect] = useState(false);

    function handleAddTask() {
        setTasks(t => [...t, {text: "", id: crypto.randomUUID(), status:false, selectStatus:false}]);
    }
    function handleChangeStatus(id) {
        setTasks(t => {
            const target = t.filter(individualTask => individualTask.id === id)[0];
            const status = target.status;
            return t.map(individualTask => individualTask.id === id ? {...individualTask, status:!status} : individualTask);
        });
    }
    function toggleSelect() {
        setSelect(s => !s);
    }
    function handleSelectStatus(id) {
        setTasks(t => t.map(individualTask => individualTask.id === id ? {...individualTask, selectStatus:!individualTask.selectStatus} : individualTask));
    }
    function handleDeleteTask() {
        setTasks(t => t.filter(individualTask => !individualTask.selectStatus));
    }
    function handleTextChange(text, id) {
        setTasks(t => t.map(individualTask => individualTask.id === id ? {...individualTask, text:text} : individualTask));
    }
    function handleDisplayTask() {
        alert(tasks.map(individualTask => individualTask.text));
    }

    return(
        <>
        <h2>{new Date().toLocaleDateString('en-US', {weekday: 'long'})} To-do List:</h2>
        <div className={styles.buttonContainer}>
            <button className={styles.button} onClick={handleAddTask}>Add Task</button>
            <button className={styles.button} onClick={toggleSelect}>Select Task</button>
            <button className={styles.button} onClick={handleDeleteTask}>Delete Task</button>
            <button className={styles.button} onClick={handleDisplayTask}>Display Task</button>
        </div>
        <div className={styles.taskContainer}>
            {tasks.map(individualTask => <Task key={individualTask.id} task={individualTask} select={select} callback1={() => handleChangeStatus(individualTask.id)} callback2={() => handleSelectStatus(individualTask.id)} callback3={(text) => handleTextChange(text, individualTask.id)}/>)}
        </div>
        </>
    );
}

export default ToDoListImproved
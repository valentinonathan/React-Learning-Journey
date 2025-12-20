import styles from './ToDoList.module.css'
import Task from './Components/Task/Task';
import { use, useEffect, useState } from 'react';

function ToDoList() {

    const [tasks, setTasks] = useState([]);
    const [select, setSelect] = useState(false);
    useEffect(() => {
        setTasks(t => {
            const newT = t.map((individualTask) => {return {...individualTask, selectStatus:false}});
            return newT;
        })
    }, [select]);

    function handleAddTask(){
        setTasks(t => [...t, {text: "", id: crypto.randomUUID(), status:false, selectStatus:false}]);
    }
    function handleEnterTask(text, id) {
        setTasks(t => {
            const tLength = t.length;
            let newT = [];
            for(let i = 0 ; i < tLength ; i++) {
                let individualTask = t[i];
                if (individualTask.id === id) {
                    newT[i] = {...individualTask, text: text, id: id};
                } else {
                    newT[i] = individualTask;
                }
            }
            return newT;
        })
    }
    function handleTaskStatus(status, id){
        setTasks(t => {
            const newT = t.map((individualTask) => individualTask.id === id
                                        ? {...individualTask, status:status}
                                        : individualTask);
            return newT;
        })
    }
    function handleSelectTask(){
        setSelect(s => !s);
    }
    function handleDisplayTask() {
        alert(tasks.map(task => task.text));
    }
    function handleSelectStatus(status, id) {
        setTasks(t => {
            const newT = t.map(task => task.id === id ? {...task, selectStatus: status} : task);
            return newT;
        });
    }

    return(
        <>
        <h2>{new Date().toLocaleDateString('en-US', {weekday: 'long'})} To-do List:</h2>
        <div className={styles.buttonContainer}>
            <button className={styles.button} onClick={handleAddTask}>Add Task</button>
            <button className={styles.button} onClick={handleSelectTask}>Select Task</button>
            <button className={styles.button}>Delete Task</button>
            <button className={styles.button} onClick={handleDisplayTask}>Display Task</button>
        </div>
        <div className={styles.taskContainer}>
            {tasks.map((task) => <Task key={task.id} id={task.id} status={task.status} selectStatus={task.selectStatus} text={task.text} callback1={handleEnterTask} callback2={handleTaskStatus} callback3={handleSelectStatus} select={select}/>)}
        </div>
        </>
    );
}

export default ToDoList
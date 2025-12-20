import styles from './Task.module.css'
import { useState, useEffect } from 'react';

function Task(props) {
    const [taskStatus, setTaskStatus] = useState(props.status);
    const [selectStatus, setSelectStatus] = useState(props.selectStatus);
    useEffect(() => {
        setSelectStatus(props.selectStatus);
        setTaskStatus(props.status);
    }, [props.selectStatus, props.taskStatus]);

    function handleEnterTaskModule(event){
        if (event.key === 'Enter') {
            props.callback1(event.target.value, props.id);
        }
    }
    function handleTaskStatusModule(id) {
        setTaskStatus(s => {
            props.callback2(!s, id);
            return !s;
        });
    }
    function handleSelectStatusModule(id) {
        setSelectStatus(s => {
            props.callback3(!s, id);
            return !s;
        });
    }
    return(
        !props.select
            ? 
            <div className={styles.taskBox}>
                <input type="text" onKeyDown={handleEnterTaskModule} className={styles.inputTask} placeholder='Add a Task...' />
                {taskStatus ? <div className={styles.checkBoxTrue} onClick={() => handleTaskStatusModule(props.id)}></div>
                            : <div className={styles.checkBoxFalse} onClick={() => handleTaskStatusModule(props.id)}></div>}
            </div>
            : 
            <div className={styles.taskBox}>
                <input type="text" onKeyDown={handleEnterTaskModule} className={styles.inputTask} placeholder='Add a Task...' />
                {selectStatus 
                    ? <div className={styles.selectBoxTrue} onClick={() => handleSelectStatusModule(props.id)}></div>
                    : <div className={styles.selectBoxFalse} onClick={() => handleSelectStatusModule(props.id)}></div>
                }
                {taskStatus ? <div className={styles.checkBoxTrue} onClick={() => handleTaskStatusModule(props.id)}></div>
                            : <div className={styles.checkBoxFalse} onClick={() => handleTaskStatusModule(props.id)}></div>}
            </div>
    );
}

export default Task;
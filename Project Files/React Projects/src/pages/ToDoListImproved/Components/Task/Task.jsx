import styles from './Task.module.css'
import { useState, useEffect } from 'react';

function Task(props) {
    return(
        <div className={styles.taskBox}>
            <input type="text" className={styles.inputTask} placeholder='Add a Task...' onChange={(event) => props.callback3(event.target.value)}/>
            {
                props.select 
                    ? props.task.selectStatus 
                        ? <div className={styles.selectBoxTrue} onClick={props.callback2}></div>
                        : <div className={styles.selectBoxFalse} onClick={props.callback2}></div>
                    : <div></div>
            }
            {
                !props.task.status
                    ? <div className={styles.checkBoxFalse} onClick={props.callback1}></div>
                    : <div className={styles.checkBoxTrue} onClick={props.callback1}></div>
            }
        </div>
    )
}

export default Task
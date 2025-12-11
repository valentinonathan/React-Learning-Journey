import styles from './ProjectCards.module.css'

function ProjectCards(props) {
    return (
        <div className={styles.card}>
            <img src={props.image} />
            <h2 className={styles.h2}>{props.projectTitle}</h2>
            <p>{props.projectDescription}</p>
        </div>
    );
}

export default ProjectCards
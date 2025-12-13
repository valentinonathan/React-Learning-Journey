import styles from './ProjectCards.module.css'
import { Link } from 'react-router-dom';

function ProjectCards(props) {
    return (
        <Link className={styles.link}to={props.routing}>
            <div className={styles.card}>
                <img src={props.image} className={styles.image}/>
                <h2 className={styles.h2}>{props.projectTitle}</h2>
                <p className={styles.p}>{props.projectDescription}</p>
            </div>
        </Link>
    );
}

export default ProjectCards
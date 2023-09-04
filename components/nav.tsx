import styles from '@/app/page.module.css';
import Link from 'next/link';

function Nav() {

 return (
    <div  className={styles.NavBar}>
       <p  className={styles.NavText}> <Link href="/game"> Game </Link> </p>
      </div>
    );
}
export default Nav;
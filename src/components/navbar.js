import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import styles from "../styles/Navbar.module.css";

const navigation = [
  { id: 1, title: 'Про кафедру', path: './about' },
  { id: 2, title: 'Новини', path: '/news' },
  { id: 3, title: 'Склад кафедри', path: '/staff' },
  { id: 4, title: 'Наукова робота', path: '/science' },
  { id: 5, title: 'Контакти', path: '/contacts' },
];

const Navbar = () => {
  const { pathname } = useRouter();

  return (
    <nav className={styles.nav}>
      <div><Link href="/">
        <Image src="/logo.png" width={153} height={144} alt="logo" /></Link>
      </div>
      <div className={styles.name}>
        <span>Кафедра <br />Dream Team 7 <br />Accessibility</span>
        </div>
      <div className={styles.links}>
        {navigation.map(({ id, title, path }) => (
          <Link legacyBehavior key={id} href={path}>
            <a className={pathname === path ? styles.active : null}>{title}</a>
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
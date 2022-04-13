import Head from 'next/head';
import Image from 'next/image';
import { LogoGrid } from '../src/components/LogoGrid';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div>
      <LogoGrid />
    </div>
  );
}

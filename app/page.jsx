import styles from './page.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <>
    <h1>Página Home</h1>
    <Link href={'/counter'}> Contador</Link>
    <Link href={'/inputs'}> Inputs</Link>
    <Link href={'/popUps'}> Pop Ups</Link>
    <Link href={'/finances'}>Finances</Link>
    </>
  )
}

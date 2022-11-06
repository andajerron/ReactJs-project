import Head from 'next/head'
import styles from '../styles/Home.module.css'

import products from '../products.json';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
      <link rel="preconnect" href="https://app.snipcart.com" />
<link rel="preconnect" href="https://cdn.snipcart.com" />
<link rel="stylesheet" href="https://cdn.snipcart.com/themes/v3.2.2/default/snipcart.css" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to My Ryzen Store
        </h1>

        <p className={styles.description}>
        <a
            className="snipcart-checkout snipcart-summary"
            href="#"
            style={{ textDecoration: "none" }}
          >
 
          </a>
          
        </p>

        <div className={styles.grid}>
          {products.map(product => {
            return (
              <div key={product.id} className={styles.card}>
                <img src={product.image} alt={`Preview of ${product.title}`} />
                <h3>{ product.title }</h3>
                <p>{ product.description }</p>
                <p>${ product.price }</p>
                <p>
                <button className="snipcart-add-item"
  data-item-id={product.id}
  data-item-image={product.image}
  data-item-name={product.title}
  data-item-price={product.price}>Add to Cart</button>
                </p>
              </div>
            );
          })}
        </div>
      </main>

      <footer className={styles.footer}>
      <script async src="https://cdn.snipcart.com/themes/v3.2.2/default/snipcart.js" />
<div hidden id="snipcart" data-api-key="MjljNDkxYWYtYTE3MC00OWJhLWFiZTMtOWJiY2MzYzRiZTI3NjM4MDMyOTQxMTUwMTAwMTQ4" />
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  )
}
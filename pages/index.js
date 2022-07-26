import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import axios from 'axios';
import { firstWordsToUpperCase } from '../helpers/stringFunction';
import styles from  '../styles/HomePage.module.scss';

export default function HomePage({ data }) {
  const [products, setProducts] = useState(null);

  useEffect(() => {
    setProducts(data);
  }, [data])

  return (
    <>
      <div className={styles.container}>
        <div id="items" className={styles.grid}>
          {
            products && products.map((product, idx) => (
              <div key={product.id} className={`${styles.item} ${idx === 1 || idx === 3 ? styles.large : ''}`}>
                <div className={styles.item_inner}>
                  <div className={styles.item_card}>
                    <div className={styles.item_img_wrap}>
                      <div className={styles.img_spacer}>
                        <img src={`/images/${product.pic_default}`} alt={product.name} />
                      </div>
                    </div>
                    <div className={styles.item_info}>
                      <div className={`${styles.stack} ${styles.horizontal} ${styles.bulleted}`}>
                        <span className="text_tertiary">{product.brand}</span>
                        <span className="text_tertiary">
                          <Link href={`/${product.category}`}>
                            <a className={`${styles.text_tertiary} ${styles.product_category}`}>{firstWordsToUpperCase(product.category)}</a>
                          </Link>
                        </span>
                      </div>
                      <div className={`${styles.stack} ${styles.horizontal}`}>
                        <div className={styles.text_ellipsis}>
                          <div className="text_secondary">{product.name}</div>
                        </div>
                        <div className="text_secondary">{`$${product.price}`}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </>
  )
}

export async function getStaticProps() {
  try {
    const res = await axios.get(`https://my-json-server.typicode.com/Rian-Sanjaya/product_list_db_json/products`);
    const data = res.data;

    return {
      props: {
        data,
      }
    }
  } catch (error) {
    console.error(error);
  }
}
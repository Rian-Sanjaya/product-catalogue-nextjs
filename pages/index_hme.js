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
      <div>
        {
          products && products.map((product, idx) => (
            <div key={product.id} className={`${styles.section}`}>
              <div className={`${styles.section_wrapper}`}>
                <div className={`${styles.section_container}`}>
                  {
                    idx === 0 && 
                    <div className={`${styles.section_header}`}>
                      <Link href={`/${product.category}`}>
                        <a className={`${styles.title_box}`}>
                          <h2 className={styles.title}>{firstWordsToUpperCase(product.category)}</h2>
                        </a>
                      </Link>
                    </div>
                  }
                  {/* <div>
                    <div className={`${styles.section}`}>
                      <div className={`${styles.section_content}`}>
                        <div className={`${styles.section_content_wrapper}`}>
                          <div className={`${styles.content_card}`}>
                            <Link href={`/${product.category}/${product.id}`}>
                              <a className={`${styles.image_wrapper}`}>
                                <div className={`${styles.image_outer_frame}`}>
                                  <div className={`${styles.image_inner_frame}`}>
                                    <span className={`${styles.image_container}`}>
                                      <img srcSet={`/images/${product?.pic_default}`} alt={product?.name} className={`${styles.image_element}`} />
                                    </span>
                                  </div>
                                </div>
                              </a>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div> */}
                </div>
              </div>
            </div>
          ))
        }
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
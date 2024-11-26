import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';
import React from 'react';

const FeatureList = [
  {
    title: 'MB 28',
    image: require('@site/static/img/MB28.png').default,
    description: (
      <>
        Monday Blue Strategy
      </>
    ),
    link: '/docs/mb_28/versions/version_1',
  },
  {
    title: 'MB Trade',
    image: require('@site/static/img/MB-Trade.png').default,
    description: (
      <>
        Easy to place order from MB Trade
      </>
    ),
    link: '/docs/mb_trade/versions/version_1',
  },
  {
    title: 'Fibo R 28',
    image: require('@site/static/img/FiboR28.png').default,
    description: (
      <>
        Fibonacci Retracement 反轉的小插曲
      </>
    ),
    link: '/docs/fibo_r_28/versions/version_1',
  },
  {
    title: 'Retracement 28',
    image: require('@site/static/img/Retracement28.png').default,
    description: (
      <>
      Retracement Tracker 回調追蹤器
      </>
    ),
    link: '/docs/retracement_28/versions/version_1',
  },
  {
    title: 'Retracement EA',
    image: require('@site/static/img/RetracementEA.png').default,
    description:(
      <>
      Auto trading by Retracement EA 
      </>
    ),
    link: '/docs/retracement_ea/versions/version_1',
  },
];

function Feature({image, title, description, link}) {
  return (
    <div className={clsx('col col--4')}>
      <a href={link}>
      <div className="text--center">
        <img src={image} alt={title} role="img" />
      </div>
      </a>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}

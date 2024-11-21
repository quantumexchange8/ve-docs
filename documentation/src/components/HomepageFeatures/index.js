import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';
import React from 'react';

const FeatureList = [
  {
    title: 'MB28',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        Docusaurus was designed from the ground up to be easily installed and
        used to get your website up and running quickly.
      </>
    ),
    link: '/docs/mb_28/versions/version_1',
  },
  {
    title: 'MB Trade',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Docusaurus lets you focus on your docs, and we&apos;ll do the chores. Go
        ahead and move your docs into the <code>docs</code> directory.
      </>
    ),
    link: '/docs/mb_trade/versions/version_1',
  },
  {
    title: 'Fibo R 28',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Extend or customize your website layout by reusing React. Docusaurus can
        be extended while reusing the same header and footer.
      </>
    ),
    link: '/docs/fibo_r_28/versions/version_1',
  },
  {
    title: 'Retracement 28',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
      This is Retracement 28
      </>
    ),
    link: '/docs/retracement_28/versions/version_1',
  },
  {
    title: 'Retracement EA',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description:(
      <>
      This is Retracement EA
      </>
    ),
    link: '/docs/retracement_ea/versions/version_1',
  },
];

function Feature({Svg, title, description, link}) {
  return (
    <div className={clsx('col col--4')}>
      <a href={link}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
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

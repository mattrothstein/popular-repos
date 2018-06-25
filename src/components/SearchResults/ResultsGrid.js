import React from 'react';
import ResultGridItem from './ResultGridItem';

const styles = {
  display: 'flex',
  flexWrap: 'wrap',
  height: 700,
};

const ResultsGrid = ({ repos }) => (
  <section style={styles} >
    {repos.length && repos.map(repo => <ResultGridItem key={repo.id} repo={repo} />)}
  </section>
);

export default ResultsGrid;

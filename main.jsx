import React from 'react';
import ReactDOM from 'react-dom/client';
import Person from './Person';
import './index.css';

// @ts-ignore
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Person
      name="Johnny"
      age={27}
      address={{
        street: 'Zuckerberg Avenue',
        houseNumber: 1,
        city: 'San Francisco',
      }}
      hobbies={['playing piano', 'cooking', 'knitting']}
      pronoun="He"
    />
      <Person
			name="Mem"
			age={33}
			address={{ street: 'weinheimerstr', houseNumber: 22, city: 'Bock' }}
			pronoun="Mr"
			hobbies={['reading', 'learning', 'travelling']}
		/>
  </React.StrictMode>,
);

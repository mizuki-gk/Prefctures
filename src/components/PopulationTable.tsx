import React from 'react';

function PopulationTable(props: {
  totalPopulations: { year: number; value: number }[];
}) {
  return (
    <div>
      <h1>人口推移表</h1>
      <table border={1} className='table'>
        <tr className='header'>
          <th>西暦</th>
          <th>総人口</th>
        </tr>
        {props.totalPopulations.map((totalPopulation, i) => {
          return (
            <tr className='deta'>
              <td>{totalPopulation.year}</td>
              <td>{totalPopulation.value}</td>
            </tr>
          );
        })}
      </table>
    </div>
  );
}

export default PopulationTable;

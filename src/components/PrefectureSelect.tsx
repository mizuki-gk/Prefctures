import React from 'react';

function PrefectureSelect(props: {
  cities: { prefCode: number; prefName: string }[];
  handleChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}) {
  return (
    <div>
      <h1>都道府県別人口データ</h1>
      <select onChange={props.handleChange} className='select'>
        <option value="">選択してください</option>
        {props.cities.map((city, i) => {
          return (
            <option value={city.prefCode} key={i}>
              {city.prefName}
            </option>
          );
        })}
      </select>
    </div>
    
  );
}
export default PrefectureSelect;

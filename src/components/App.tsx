import React, { useEffect, useState } from 'react';
import axios from 'axios';
import PrefectureSelect from './PrefectureSelect';
import PopulationTable from './PopulationTable';
import './App.css';

function App() {
  const [cities, setCities] = useState<City[]>([]);
  const [totalPopulations, setTotalPopulations] = useState<TotalPopulation[]>(
    []
  );
  const [prefCode, setPrefCode] = useState<string | null>(null);

  type City = {
    prefCode: number;
    prefName: string;
  };

  type TotalPopulation = {
    year: number;
    value: number;
  };

  useEffect(() => {
    axios
      .get('https://opendata.resas-portal.go.jp/api/v1/prefectures', {
        headers: { 'x-api-key': 'iSVL9OtLsesB2KCJH68dgBXBAdmWkvbSnJ9tv0MK' },
      })
      .then((response) => setCities(response.data.result));
  }, []);

  useEffect(() => {
    axios
      .get(
        `https://opendata.resas-portal.go.jp/api/v1/population/composition/perYear?cityCode=-&prefCode=${prefCode}`,
        {
          headers: { 'x-api-key': 'iSVL9OtLsesB2KCJH68dgBXBAdmWkvbSnJ9tv0MK' },
        }
      )
      .then((response) =>
        setTotalPopulations(response.data.result.data[0].data)
      );
  }, [prefCode]);

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setPrefCode(e.target.value);
  };

  return (
    <div className="App">
      <PrefectureSelect handleChange={handleChange} cities={cities} />
      <PopulationTable totalPopulations={totalPopulations} />
    </div>
  );
}
export default App;

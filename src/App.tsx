import { useState } from 'react';
import './App.css';

const countries = ['India', 'USA', 'France'];

function App() {
  const [selectedCountries, setSelectedCountries] = useState<string[]>([]);
  const [selectAll, setSelectAll] = useState(false);

  const handleSelectAll = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.checked) {
      setSelectedCountries(countries);
    } else {
      setSelectedCountries([]);
    }
  };

  const handleSelectCountry = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    if (selectedCountries.includes(value)) {
      setSelectedCountries(
        selectedCountries.filter((country) => country !== value)
      );
    } else {
      setSelectedCountries([...selectedCountries, value]);
    }
  };

  return (
    <div className="bg-gradient-to-b from-blue-950 to-blue-900 h-screen w-screen">
      <div className="container mx-auto ">
        <div className="h-screen w-full flex flex-col justify-center items-center">
          <div className=" text-blue-300 border border-blue-500 rounded-lg p-6 bg-blue-900 w-full md:w-1/3 shadow-xl">
            <h1 className="text-4xl font-bold text-blue-100 pb-4">Countries</h1>

            <div className="flex flex-col gap-2">
              <div>
                <label className="flex flex-row gap-2">
                  <input
                    type="checkbox"
                    name="selectAll"
                    value="selectAll"
                    checked={selectAll}
                    onChange={(e) => {
                      setSelectAll(e.target.checked);
                      handleSelectAll(e);
                    }}
                  />
                  Select All
                </label>
              </div>

              {countries.map((country, index) => (
                <div key={index}>
                  <label className="flex flex-row gap-2">
                    <input
                      type="checkbox"
                      name={country}
                      value={country}
                      checked={selectedCountries.includes(country)}
                      onChange={handleSelectCountry}
                    />
                    {country}
                  </label>
                </div>
              ))}
            </div>

            <h2 className="text-2xl font-semibold text-blue-200 mt-4">
              Selected Countries: {selectedCountries.join(', ')}
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

import React from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

const CountryDetails = (props) => {
  const params = useParams();

  const oneCountry = props.countries.find(
    (country) => country.alpha3Code === params.alpha3Code
  );

  const codeToFullName = props.countries.find(
    (country) => country.alpha3Code === params.countries
  );

  console.log(codeToFullName)

  return (
    <div className="col-7">
      <img
        src={`https://flagpedia.net/data/flags/icon/72x54/${oneCountry.alpha2Code.toLowerCase()}.png`}
        alt="country flag"
        style={{ width: '300px' }}
      />
      <h1>{oneCountry.name.official}</h1>

      <table className="table">
        <thead></thead>
        <tbody>
          <tr>
            <td style={{ width: '30%' }}>Capital</td>
            <td>{oneCountry.capital}</td>
          </tr>
          <tr>
            <td>Area</td>
            <td>
              {oneCountry.area} km <sup>2</sup>
            </td>
          </tr>
          <tr>
            <td>Borders</td>
            <td>
              <ul>
                {oneCountry.borders.map((border) => {
                  return (
                    <li>
                      <Link to={`/countries/${border}`}>{border}</Link>
                    </li>
                  );
                })}
              </ul>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default CountryDetails;

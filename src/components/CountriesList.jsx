import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const ContriesList = ({ countries }) => {
  return (
    <>
      <div className="col-5" style={{ maxHeight: '90vh', overFlow: 'scroll' }}>
        <div className="list-group">
          {countries.map((country) => {
            const alpha3Code = String(country.alpha3Code);
            return (
              <Link
                to={alpha3Code}
                className="list-group-item list-group-item-action"
              >
                <div key={country.alpha3Code}>
                  <img
                    src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`}
                    alt="flag"
                  />
                  <p>{country.name.common}</p>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default ContriesList;

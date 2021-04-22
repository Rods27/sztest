import React from 'react';

class Filter extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div className="filter-container">
        <label htmlFor="states">
          Localização
          <select name="states">
            <option >Selecione</option>
            <option value="Santa Catarina">Santa Catarina</option>
            <option value="São Paulo" >São Paulo</option>
          </select>
        </label>
        <label htmlFor="price">
          Preço
          <select name="price">
            <option >Selecione</option>
            <option value="100-200">100-200</option>
            <option value="300-500" >300-500</option>
          </select>
        </label> 
        <label htmlFor="check-in">
          Check-in
          <select name="check-in">
            <option > 19/04/2021</option>
          </select>
        </label>
        <label htmlFor="check-out">
          Check-out
          <select name="check-out">
            <option > 25/04/2021</option>
          </select>
        </label>
        <label htmlFor="guests">
          Nº de hóspedes
          <input name="guests" type="number" min="0" max="8" />
        </label>
        <button className="search" type="button">Buscar</button>
      </div>
    );
  }
}

export default Filter;

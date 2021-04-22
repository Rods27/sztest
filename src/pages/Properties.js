import React from 'react';
import { Header, Filter } from '../components/';
import data from '../data/data.json';

class Properties extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  hotelDetails(target, index) {
    if (target && !target.className.includes('fab')) {
      const { history } = this.props;
      history.push({
        pathname: `/properties/${index + 1}`,
        state: data[index]
      });
    }
  }

  render() {
    const { history } = this.props;
    return (
      <div className="properties-container">
        <Header history={ history } />
        <Filter />
        <hr />
        <div className="hotel-container">
          { 
            data.map((element, index) => (
              <div className="hotel" key={ index }>
                <div
                  style={{ backgroundImage: `url(${window.location.origin + `/${data[index].tag}/1.jpg`})` }}
                  className="background"
                  onClick={ (event) => this.hotelDetails(event.target, index) }
                >
                  <a href={ element.link } target="blank">
                    <i className="fab fa-airbnb"></i>
                  </a>
                </div>
                <h3>{element.name}</h3>
                <span id="minorInfo">
                  {`${element.district} - ${element.maxGuests} hóspedes - ${element.rooms.rooms} quartos`}
                </span>
                <div className="hotel-info">
                  <div>
                    Valor diária
                    <p>{`R$${element.daily} / noite`}</p>
                  </div>
                  <hr className="dashed-hr"/>
                  <div>
                    Total 5 diárias
                    <p>{`R$${element.daily * 5}`}</p>
                  </div>
                  <hr className="dashed-hr"/>
                  <div>
                    Taxa de Limpeza
                    <p>{`R$${element.cleaningfee}`}</p>
                  </div>
                  <hr className="dashed-hr"/>
                  <div>
                    Caução
                    <p>{`R$${(element.daily * 5) * 0.5}`}</p>
                  </div>
                  <hr className="dashed-hr"/>
                  <div style={{display: 'flex', alignItems: 'baseline' }}>
                    <p style={{fontWeight: 'bolder'}}>Total:</p>
                    <div style={{display: 'flex', alignItems: 'baseline' }}>
                      <p>{`R$ ${(element.daily * 5 + element.cleaningfee)}`}</p>
                      <span>|</span>
                      <div className="final-price">
                        <p style={{margin: '5px 0 0 8px' }}>
                          {`R$${(element.daily * 5 + element.cleaningfee) * 0.95}`}
                        </p>
                        <span>à vista</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    );
  }
}

export default Properties;
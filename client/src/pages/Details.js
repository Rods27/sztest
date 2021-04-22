import React from 'react';
import { Header, Filter } from '../components/';

class Details extends React.Component {
  constructor() {
    super();
    this.state = {
      x: 0,
    };
    this.goLeft = this.goLeft.bind(this);
    this.goRight = this.goRight.bind(this);
  }

  componentDidMount() {
    const { history: { location: { state } } } = this.props;
    const target = document.querySelector('.active')
    if (state && state.active === true) {
      target.style.color = "#4bb543";
    } else {
      target.style.color = "crimson";
    }
  }

  goLeft() {
    const additionalX = 100;
    const mintranslateX = 0;
    const maxtranslateX = 600;
    const { x } = this.state;
    if (x === mintranslateX) this.setState({ x: x - maxtranslateX });
    else this.setState({ x: x + additionalX });
  }

  goRight() {
    const additionalX = 100;
    const maxtranslateX = 600;
    const { x } = this.state;
    if (x === -maxtranslateX) this.setState({ x: x + maxtranslateX });
    else this.setState({ x: x - additionalX });
  }

  render() {
    const { history: { location: { state } } } = this.props;
    const { history } = this.props;
    const { x } = this.state;
    return (
      <div className="details-container">
        <Header history={ history } />
        <Filter />
        <hr className="hr"/>
        <div className="details-middle">
          <div className="details-left-content">
            { state && state.tag ?
              <div className="slider">
                <i className="fas fa-angle-left" id="left" onClick={ this.goLeft }/>
                <img src={ window.location.origin + `/${state.tag}/1.jpg`} alt={`${state.tag}-1`} style={ { transform: `translateX(${x}%)` } }/>
                <img src={ window.location.origin + `/${state.tag}/2.jpg`} alt={`${state.tag}-2`} style={ { transform: `translateX(${x}%)` } }/>
                <img src={ window.location.origin + `/${state.tag}/3.jpg`} alt={`${state.tag}-3`} style={ { transform: `translateX(${x}%)` } }/>
                <img src={ window.location.origin + `/${state.tag}/4.jpg`} alt={`${state.tag}-4`} style={ { transform: `translateX(${x}%)` } }/>
                <img src={ window.location.origin + `/${state.tag}/5.jpg`} alt={`${state.tag}-5`} style={ { transform: `translateX(${x}%)` } }/>
                <img src={ window.location.origin + `/${state.tag}/6.jpg`} alt={`${state.tag}-6`} style={ { transform: `translateX(${x}%)` } }/>
                <img src={ window.location.origin + `/${state.tag}/7.jpg`} alt={`${state.tag}-7`} style={ { transform: `translateX(${x}%)` } }/>
                <i className="fas fa-angle-right" id="right" onClick={ this.goRight }/> 
              </div>
                : null}
            <div>
              <h4>Localização</h4>
              <p>{state ? `${state.adress}` : null}</p>
            </div>
          </div>
          <div className="details-right-content">
              <div className="details-title-div">
                <h1>{state.name}</h1>
                <span>{state.district}, {state.state}</span>
                <div className="active-info">
                  <h4>
                    {`${state.rooms.rooms} quartos - `}
                    {`${state.rooms.beds} camas - `}
                    {`${state.rooms.bathrooms} banheiros`}
                  </h4>
                  <div className="active">
                    <i class="fas fa-map-marker" style={ { fontSize: "20px", paddingRight: "5px"} } />
                    { state.active ? 'Ativo' : 'Inativo'}
                  </div>
                </div>
              </div>
            <hr style={{ width: "750px"}}/>
              <div className="taxes">
              <div className="taxes-child">
                <span>Máx. de Hóspedes</span>
                <div>
                  <i className="fas fa-users"></i>
                  {state.maxGuests}
                </div>
              </div>
              <div className="taxes-child">
                  <span>Taxa de Limpeza</span>
                  <div>
                    <i className="fas fa-soap"></i>
                    {`R$ ${state.cleaningfee},00`}
                  </div>
              </div>
              <div className="taxes-child">
                <span>Caução</span>
                <div>
                  <i className="fas fa-money-bill-wave"></i>
                  {`R$ ${(state.daily * 5) * 0.5}`}
                </div>
              </div>
            </div>
                <div className="rules">
              <h3 style={{ fontSize: "20px"}}>Regras</h3>
              <hr style={{ width: "750px"}}/>
              {state.rules.kids ? <div>Crianças até 12 anos<i className="fas fa-check-circle sucess" /></div> 
                : <div>Crianças até 12 anos<i className="fas fa-times-circle fail" /></div>
              }
              {state.rules.babies ? <div>Bebês até 2 anos<i className="fas fa-check-circle sucess" /></div> 
                : <div>Bebês até 2 anos<i className="fas fa-times-circle fail" /></div>
              }
              {state.rules.smoking ? <div>Permitido fumar<i className="fas fa-check-circle sucess" /></div> 
                : <div>Permitido fumar<i className="fas fa-times-circle fail" /></div>
              }
              {state.rules.events ? <div>Permitido festas e eventos<i className="fas fa-check-circle sucess" /></div> 
                : <div>Permitido festas e eventos<i className="fas fa-times-circle fail" /></div>
              }
              {state.rules.animals ? <div>Permitido animais<i className="fas fa-check-circle sucess" /></div> 
                : <div>Permitido animais<i className="fas fa-times-circle fail" /></div>
              }
            </div>
                <div className="convenience">
                <h3 style={{ fontSize: "20px"}}>Comodidades</h3>
                  <hr style={{ width: "750px"}}/>
                  {state.convenience.parking && <div><i className="fas fa-parking" /> Estacionamento gratuito</div>}
                  {state.convenience.tv && <div><i class="fas fa-tv"></i> TV com cabo</div>}
                  {state.convenience.airConditioning && <div><i class="fas fa-wind"></i> Ar Condicionado</div>}
                  {state.convenience.wifi && <div><i class="fas fa-wifi"></i> Wi-fi</div>}
                  {state.convenience.workingSpace && <div><i class="fas fa-briefcase"></i> Espaço para trabalho</div>}
                  {state.convenience.concierge && <div><i class="fas fa-concierge-bell"></i> Recepção</div>}
                  {state.convenience.pool && <div><i class="fas fa-swimming-pool"></i> Piscina</div>}
                  {state.convenience.gym && <div><i class="fas fa-dumbbell"></i> Academia</div>}
                </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Details;

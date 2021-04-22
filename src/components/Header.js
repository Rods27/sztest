import React from 'react';

class Header extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  componentDidMount() {
    const { history } = this.props;
    const pathname = history.location.pathname.split('/')[1]
    if (pathname === 'properties') {
      document.querySelector('#left').childNodes[4].style.backgroundColor = '#333'
      document.querySelector('#left')
      .childNodes[4].style.boxShadow = 'inset 0 -17px 0px -14px #FFFFFF';
    }
  }

  render() {
    const { history } = this.props;
    return (
      <div className="header-container">
        <li id="left">
          <i className="fab fa-css3-alt" onClick={ () => history.push('/') }></i>
          <td onClick={ () => history.push('/calendar')}>
            <h4 >Calendário</h4>
          </td>
          <td onClick={ () => history.push('/clients')}>
            <h4>Clientes</h4>
          </td>
          <td onClick={ () => history.push('/budgets')}>
            <h4>Orçamentos</h4>
          </td>
          <td onClick={ () => history.push('/properties')}>
            <h4>Propriedades</h4>
          </td>
          <td onClick={ () => history.push('/control')}>
            <h4>Controle</h4>
          </td>
        </li>
        <div id="right">
          <i className="fas fa-user-circle"></i>
        </div>
      </div>
    );
  }
}

export default Header;

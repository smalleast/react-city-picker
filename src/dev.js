import React from 'react';
import './dev.scss';
import {ReactCityPicker} from './main';
import cnCity from './components/cnCity';

class App extends React.Component {

  state = {
    city_show: false,
    city_value: ''
  };

  _onChangeCity(inItem) {
    this.setState({city_value: inItem, city_show: false})
  }

  render() {
    return (
      <section className="hello-react-city-picker">

        <input type="text" value={this.state.city_value} placeholder="select city" onClick={e => {
          e.preventDefault();
          this.setState({city_show: true})
        }} readOnly={true}/>
        <ReactCityPicker
          data={cnCity}
          onCancel={e => this.setState({city_show: false})}
          onChange={this._onChangeCity.bind(this)}
          show={this.state.city_show}
        />
      </section>

    );
  }
}
;
ReactDOM.render(
  <App />,
  document.getElementById('app')
);

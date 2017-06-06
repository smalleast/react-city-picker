#react-city-picker
> Modal components for react(alert/confirm &amp; the common modal components).


## resource:
+ http://www.cnblogs.com/Kummy/p/4966937.html
+ https://github.com/steven5538/vue-button
+ https://yarnpkg.com/en/docs/install


## properties:
```javascript

```


## usage:
```javascript
import {ReactCityPicker} from 'react-city-picker';
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

```

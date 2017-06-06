#react-city-picker
> Modal components for react(alert/confirm &amp; the common modal components).


## resource:
+ http://www.cnblogs.com/Kummy/p/4966937.html
+ https://github.com/steven5538/vue-button
+ https://yarnpkg.com/en/docs/install


## properties:
```javascript
 static propTypes = {
    header: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
    body: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
    buttons: PropTypes.array,
    theme: PropTypes.oneOf(['ios', 'tranparent']),
    className: PropTypes.string,
    backdropStyle: PropTypes.object,
    onClick: PropTypes.func
  }
```


## usage:
```javascript
import {ReactCitySelect} from 'react-city-picker';

 <div className="hello-react-city-picker">
          <ReactCitySelect/>
 </div>
}

```

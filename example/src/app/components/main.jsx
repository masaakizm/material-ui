/** In this file, we create a React component which incorporates components provided by material-ui */

let React = require('react');
let mui = require('material-ui');
let RaisedButton = mui.RaisedButton;
let ThemeManager = new mui.Styles.ThemeManager();
let Colors = mui.Styles.Colors;
let DropDownMenu = mui.DropDownMenu;

let Main = React.createClass({

  childContextTypes: {
    muiTheme: React.PropTypes.object
  },

  getChildContext() {
    return {
      muiTheme: ThemeManager.getCurrentTheme()
    };
  },

  componentWillMount() {
    ThemeManager.setPalette({
      accent1Color: Colors.deepOrange500
    });
  },

  render() {

    let containerStyle = {
      textAlign: 'center'
    };
	var menuItems = [
	   { payload: '1', text: 'Never' },
	   { payload: '2', text: 'Every Night' },
	   { payload: '3', text: 'Weeknights' },
	   { payload: '4', text: 'Weekends' },
	   { payload: '5', text: 'Weekly' },
	];
    return (
      <div style={containerStyle}>

        <h1>material-ui</h1>
        <h2>example project</h2>

        <RaisedButton label="Super Secret Password" primary={true} onTouchTap={this._handleTouchTap} />
		<DropDownMenu menuItems={menuItems} />
      </div>
    );
  },

  _handleTouchTap() {
    alert('1-2-3-4-5');
  }

});

module.exports = Main;

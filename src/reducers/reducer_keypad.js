import { DISPLAY_KEY } from '../actions/index';

export default function (state = '', action) {
  switch (action.type) {
    case DISPLAY_KEY:
      var pressedKey = action.payload;
      var previousKey = state.number;
      var currentEquation = state.equationValue;
      var newEquation = '';

      if(currentEquation != null){
        if(currentEquation.slice(-1) == '='){
          if(/[.0-9]/.test(pressedKey)){
            var number = '';
            var previousKey ='';
            var currentEquation = '';
          } else if (/[+÷×-]/.test(pressedKey)) {
            var currentEquation = '';
            var number = 0;
          }
        }
      }

      if(/[0-9]/.test(pressedKey)){
        if (/[.0-9]/.test(previousKey)) {
          if (previousKey == '0') {
            var number = pressedKey;
          } else {
            var number = `${previousKey}${pressedKey}`;
          }
        } else {
          var number = pressedKey;
        }

        if (currentEquation != null) {
          var newEquation = currentEquation;
        }
      }

      if(pressedKey == "."){
        if(previousKey == null || previousKey == ''){
          previousKey = '0';
        }
        if(/^[^.]*$/.test(number)){
          var number = `${previousKey}${pressedKey}`;
        }
      }

      if (/[=+÷×-]/.test(pressedKey)){
        if (previousKey == null){
          console.log('currentEquation: ' + currentEquation)
          var trimmedEquation = currentEquation.substring(0, currentEquation.length-1);
          console.log('TrimmedEquation: '+trimmedEquation)
          var newEquation = `${trimmedEquation}${pressedKey}`;
        } else{
          var newEquation = `${currentEquation}${previousKey}${pressedKey}`;
        }
      }

      if (/[\.]/.test(number)) {
        var newEquation = currentEquation;
      }

      if (pressedKey == "." && /[\.]/.test(previousKey)) {
        var number = previousKey;
      }

      if (pressedKey == ".") {
        var newEquation = currentEquation;
      }

      if (pressedKey == 'AC') {
        var number = '0';
        var newEquation = '';
      }

      if (pressedKey == 'CE') {
        var number = '0';
        var newEquation = currentEquation;
        if(currentEquation != null){
          if(currentEquation.slice(-1) == '='){
            var newEquation = '';
          }
        }
      }

      if (pressedKey == '=') {
        var number = eval(`${currentEquation}${previousKey}`.replace('×','*').replace('÷','/'));
      }

      if (currentEquation == null ) {
        var newEquation = '';
      }

      return {
        number: number,
        equationValue: newEquation
      }
    default:
      return state;
  }
}

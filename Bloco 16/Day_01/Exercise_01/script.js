const ESTADO_INICIAL = {
  colors: ['white', 'black', 'red', 'green', 'blue', 'yellow'],
  index: 0,
};

const NEXT_COLOR = 'NEXT_COLOR';
const PREVIOUS_COLOR = 'PREVIOUS_COLOR';

const nextColor = (color) => ({
  type: NEXT_COLOR,
});

const previousColor = (color) => ({
  type: PREVIOUS_COLOR,
});

const reducer = (state = 'default', action) => {
  switch(action.type) {
    case NEXT_COLOR:
      return {state};
    case PREVIOUS_COLOR:
      return {}
  }
  
}

const store = Redux.createStore(reducer);

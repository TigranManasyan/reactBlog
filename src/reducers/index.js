export const reducer = (state, action) => { 
    switch(action.type) {
      case 'incrementN':
        return {
          ...state,
          n: state.n + 1
        }
      case 'addN':
        return {
          ...state,
          n: state.n += action.payload
        }
    }
}
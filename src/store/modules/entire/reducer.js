const initialState = {
  homePage:0
}

function reducer(state = initialState, action) {
  switch (action.type) {
    case 'SET':
      return { ...state, ...action.payload }
    case 'DELETE':
      const { [action.key]: value, ...rest } = state
      return rest
    default:
      return state
  }
}

export default reducer
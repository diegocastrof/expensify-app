const defaultAuth = {};

export default (state = defaultAuth, action) => {
  switch (action.type) {
    case 'LOGIN':
      return {
        uid: action.uid,
        displayName: action.displayName,
        email: action.email
      };
    case 'LOGOUT':
      return {};
    default:
      return state;   
  }
}
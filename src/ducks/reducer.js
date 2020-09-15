const initialState = {
    username: '',
    id: 0,
    profile_pic: ''
  };

  const REGISTER_USER = "REGISTER_USER"
  const UPDATE_USER = "UPDATE_USER"
  const LOGOUT = "LOGOUT"

  export default function(state = initialState, action) {
      let { type, payload } = action;
      switch (type) {
          case REGISTER_USER:
              return{...state, username:payload.username, id:payload.id, profile_pic:payload.profile_pic}
          case UPDATE_USER:
              return{...state, username:payload.username}
          case LOGOUT:
              return initialState
            default:
            return state
      }
  }
  
  export function registerUser (user) {
      return {
          type: REGISTER_USER,
          payload: user
      }
  }

  export function updateUser (user) {
      return {
          type: UPDATE_USER,
          payload: user
      };
  }

  export function logout () {
      return {
          type: LOGOUT
      };
  }
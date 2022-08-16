const accountUserSaved = JSON.parse(localStorage.getItem('accountUser')) || {}

const initialState = {
     infoAccount: accountUserSaved
}

const storeAccount = (state = initialState, action) => {
     
     const { type, payload } = action;

     switch (type) {
          case "REGISTER":
               localStorage.removeItem('accountUser')
               return {
                    ...state,
                    infoAccount: {}
               }
          case "LOGIN":
               localStorage.setItem('accountUser', JSON.stringify(payload));
               return {
                    ...state,
                    infoAccount: payload
               }
          default:
               return state;
     }


}

export default storeAccount
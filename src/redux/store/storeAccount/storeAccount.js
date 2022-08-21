const accountUserSaved = JSON.parse(localStorage.getItem('accountUser') || '{}')
const listAccountsSaved = JSON.parse(localStorage.getItem('listAccountsSaved') || '[]')

const initialState = {
     infoAccount: accountUserSaved,
     listAccountsSaved: listAccountsSaved
}

const storeAccount = (state = initialState, action) => {
     
     const { type, payload } = action;

     const prevListAccountsSaved = [...state.listAccountsSaved];
     
     switch (type) {
          case "LOGOUT":
               localStorage.removeItem('accountUser')
               let listAccountsSaveLateLogout;
               if(payload) {
                    const conditionSaved = prevListAccountsSaved.map(item => item.userID).includes(payload.userID)  
                    if(conditionSaved) {
                         listAccountsSaveLateLogout = [...state.listAccountsSaved];
                         localStorage.setItem('listAccountsSaved', JSON.stringify(listAccountsSaveLateLogout))
                    } else {
                         listAccountsSaveLateLogout = [...state.listAccountsSaved, payload];
                         localStorage.setItem('listAccountsSaved', JSON.stringify(listAccountsSaveLateLogout))
                    }
               }
               return {
                    ...state,
                    infoAccount: {},
                    listAccountsSaved: listAccountsSaveLateLogout
               }
               
          case 'SAVEACCOUNT':
               localStorage.setItem('listAccountsSaved', JSON.stringify([...prevListAccountsSaved, payload]))
               return {
                    ...state,
                    listAccountsSaved: [...prevListAccountsSaved, payload] 
               }

          case "REMOVEACCOUNTSAVED":

               let newListAccountsSave = prevListAccountsSaved.filter(item => item.userID !== payload.userID)
               localStorage.setItem('listAccountsSaved', JSON.stringify(newListAccountsSave))
               return {
                    ...state,
                    listAccountsSaved: newListAccountsSave
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
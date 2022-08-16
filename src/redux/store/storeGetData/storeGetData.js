const initialState = {
     srcTrailer: "https://www.youtube.com/embed/Eu9G8nO5-Ug"
}

const storeGetData = (state = initialState, action) => {
     
     const { type, payload } = action;
     
     let data

     switch (type) {
          case "GETSRCTRAILER":
               data = {
                    ...state,
                    srcTrailer: payload
               }
               break;
     
          default:
               return state;
     }

     return data;
}

export default storeGetData
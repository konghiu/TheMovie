const initialState = {
     contentToShow: {}
}

const storeRouter = (state = initialState, action) => {
     const { type, payload } = action
     let routerContent 
     switch (type) {
          case "ROUTE":
               routerContent = {
                    ...state,
                    contentToShow: payload 
               };
               break;
          default:
               return state;
     }

     localStorage.setItem('routerContent', JSON.stringify(routerContent))
     return routerContent

}

export default storeRouter
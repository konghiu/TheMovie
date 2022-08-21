export const data_api = payload => {
     return {
          type: "DATA_API",
          payload: payload
     }
}

export const route_content = payload => {
     return {
          type: 'ROUTE',
          payload: payload
     }
}

export const get_data_src = payload => {
     return {
          type: "GETSRCTRAILER",
          payload: payload
     }
}

export const logout = (payload) => {
     return {
          type: "LOGOUT",
          payload: payload
     }
}

export const save_account = (payload) => {
     return {
          type: "SAVEACCOUNT",
          payload: payload
     }
}

export const remove_account_saved = (payload) => {
     return {
          type: "REMOVEACCOUNTSAVED",
          payload: payload
     }
}

export const login = payload => {
     return {
          type: "LOGIN",
          payload: payload
     }
}

export const formality_payment = payload => {
     return {
          type: 'FORMALITY_PAYMENT',
          payload
     }
}


export const set_info_basic_setter = payload =>{
     return {
          type: "SETINFOBASICSETTER",
          payload
     }
}

export const booking_seat = payload => {
     return {
          type: "BOOKINGSEAT",
          payload: payload
     }
}

export const booking_food = payload => {
     return {
          type: "BOOKINGFOOD",
          payload: payload
     }
}

export const booking_decrease_food = payload => {
     return {
          type: "BOOKINGDECREASEFOOD",
          payload: payload
     }
}

export const delete_all_info_ticket = payload => {
     return {
          type: "DELETEALLINFOTICKET",
          payload: payload
     }
}
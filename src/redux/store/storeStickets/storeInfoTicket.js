
const initialState = {
     settername: "",
     setteremail: '',
     setterphone: '',
     codeTicket: '',
     nameFilm: '',
     info: {},
     image: '',
     nation: '',
     rap: '',
     room: '',
     address: '',
     seats: [],
     food: [],
     date: '',
     formality: {},
     time: ''
}


const storeInfoSticket = (state=initialState, action) => {

     const { type, payload } = action

     let info_booking_ticket

     const prev_list_seat = [...state.seats];
     const prev_list_food = [...state.food];
     
     switch (type) {
          case "SETINFOBASICSETTER": 
               info_booking_ticket = {
                    ...state,
                    ...payload
               }
               break;

          case "FORMALITY_PAYMENT":
               info_booking_ticket = {
                    ...state,
                    formality: payload
               }
               break;

          case "BOOKINGSEAT":
               let new_list_seat;
               if(prev_list_seat.map(item => item.id).includes(payload[0].id)) {
                    if(payload.length === 1) new_list_seat = prev_list_seat.filter(item => item.id !== payload[0].id)
                    else  new_list_seat = prev_list_seat.filter(item => item.id !== payload[0].id && item.id !== payload[1].id)
               } else new_list_seat = prev_list_seat.concat(payload);
               info_booking_ticket = {
                    ...state,
                    seats: new_list_seat
               }
               break;

          case "BOOKINGFOOD":
               if(prev_list_food.map(item => item.id).includes(payload.id)) {
                    const index = prev_list_food.map(item => item.id).indexOf(payload.id)
                    prev_list_food[index].quantity += 1;
               } else {
                    payload.quantity = 1;
                    prev_list_food.push(payload);
               }
               info_booking_ticket = {
                    ...state,
                    food: [...prev_list_food]
               }
               break;

          case "BOOKINGDECREASEFOOD":
               const index = prev_list_food.map(item => item.id).indexOf(payload.id)
               let quantityFood = prev_list_food[index].quantity
               if(quantityFood === 1) {
                    prev_list_food[index].quantity = 0;
                    prev_list_food.splice(index, 1)
               } else {
                    prev_list_food[index].quantity -= 1;
               }
               info_booking_ticket = {
                    ...state,
                    food: [...prev_list_food]
               }
               break;

          case "DELETEALLINFOTICKET": 
               info_booking_ticket = {
                    settername: "",
                    setteremail: '',
                    setterphone: '',
                    codeTicket: '',
                    nameFilm: '',
                    info: {},
                    image: '',
                    nation: '',
                    rap: '',
                    room: '',
                    address: '',
                    seats: [],
                    food: [],
                    date: '',
                    formality: {},
                    time: ''
               }
               break;
          default:
               return state;
     }

     return info_booking_ticket
}

export default storeInfoSticket
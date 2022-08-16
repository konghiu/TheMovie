import atm_icon from '../bookingSticketImg/atm_icon.png'
import momo_icon from '../bookingSticketImg/momo_icon.png'
import icon_69x69 from '../bookingSticketImg/icon-96x96.png'
import sppay from '../bookingSticketImg/sppay.png'
import visa_mastercard_icon from '../bookingSticketImg/visa-mastercard-icon.png'

export const typePayment = [
     {
          "id": 1,
          "image": atm_icon,
          "describe": "ATM card (thẻ nội địa)",
          "card": "ATM card"
     },
     {
          "id": 2,
          "image": visa_mastercard_icon,
          "describe": "Thẻ quốc tế (Visa, Master, Amex, JCB)",
          "card": "Thẻ quốc tế (Visa, Master, Amex, JCB)"
     },
     {
          "id": 3,
          "image": momo_icon,
          "describe": "Ví MoMo",
          "card": "Ví MoMo"
     },    
     {
          "id": 4,
          "image": icon_69x69,
          "describe": "ZaloPay: Bạn mới 9k/vé, Bạn cũ 69k/vé",
          "card": "ZaloPay"
     },
     {
          "id": 5,
          "image": sppay,
          "describe": "ShopeePay - giảm 50%, tối đa 30k với mã SPPCGVEEU",
          "card": "ShopeePay"
     }
]
const returnData = (item, array) => {
     let data
     array.forEach(child => {
          if(child.describe === item.describe) 
               data = item
     });
     return data
}

export const returnTop = () => {
     const pageY = window.pageYOffset;
     document.documentElement.scrollTop =-pageY;
}

export const GetContentToDisplay = (data, bigdata, name ) => {
     
     let newData

     switch (name) {
          case 'newsfilm':
               newData = returnData(data, bigdata)
               break;
               case 'analysisfilm':
               newData = returnData(data, bigdata)
               break;
               case 'eventsstar':
               newData = returnData(data, bigdata)
               break;
          default:
               break;
     }
     return newData
}

export const windowScroll = () => {
     const pageY = window.pageYOffset;
     const windowWith = window.innerWidth
     const appWidth = document.querySelector('.width-screen').clientWidth
     // Header.js
     const navba = document.querySelector('.navba')
     // AdvertPattern.js
     const advert = document.querySelector('.advert')
     const contentAdvert = document.querySelector('.advert .content-advert')

     if(navba) {
          if(pageY < 85) {
               navba.classList.remove('fixed-table-nav')
               navba.classList.add('width-screen')
          } else {
               navba.classList.add('width-screen')
               navba.classList.add('fixed-table-nav')
          }
     }

     if(advert) {
          if(pageY < 100) {
               contentAdvert.style = 'top: 0px; position: relative'
          } else {
               if(pageY <= advert.clientHeight - contentAdvert.clientHeight) {
                    contentAdvert.style = `position: fixed; top: 50px; width: ${advert.clientWidth}px; left: ${((windowWith + appWidth) / 2) - advert.clientWidth - 10}px`
               } else {
                    contentAdvert.style = `top: ${advert.clientHeight - contentAdvert.clientHeight}px; position: absolute`
               }
          }
     }
}

export const checkString = (string) => {
     
     let value;

     const stringExistUpper = /Q|W|E|R|T|Y|U|I|O|P|A|S|D|F|G|H|J|K|L|Z|X|C|V|B|N|M/;
     const stringExistLow = /q|w|e|r|t|y|u|i|o|p|a|s|d|f|g|h|j|k|l|z|x|c|v|b|n|m/;
     const stringExistNumber = /1|2|3|4|5|6|7|8|9|0/;
     if(!stringExistUpper.test(string) || !stringExistLow.test(string) || !stringExistNumber.test(string)) {
          value = true;
     }

     return value
}


export const checkedFullInfoUsers = infoUser => {

     let error_type;
     let error_message; 


     for (let i = 0; i < infoUser.length; i++) {
          error_type = i;
          const data = infoUser[i].trim();
          if(data === '') {
               error_message = 'Y??u c???u nh???p th??ng tin'
               break
          }
          else {
               if(error_type === 0 && data.length < 8) {
                    error_message = 'T??n ????ng nh???p y??u c???u ph???i c?? ??t nh???t 8 k?? t???';
                    break;
               } 
               else if(error_type === 2 && !data.includes('@gmail.com')) {
                    error_message = 'Email bao g???m @gmail.com';
                    break;
               }
               else if(error_type === 3 && ( checkString(data) || data.length < 8 )) {
                    error_message = 'M???t kh???u ph???i c?? ??t nh???t 8 k?? t??? v?? c?? k?? t??? th?????ng, k?? t??? in hoa, s??? v?? kh??ng ch???a k?? t??? ?????c bi???t';
                    break;
               }
               else if(error_type === 4 && data === '') {
                    error_message = "Y??u c???u ch???n gi???i t??nh";
                    break;
               }
          }
     }

     if(error_type === 0) {
          error_type = 'name'
     } else if (error_type === 1) {
          error_type = 'phone'
     } else if(error_type === 2) {
          error_type = 'email'
     } else if(error_type === 3) {
          error_type = 'password'
     } else if(error_type === 4) {
          error_type = 'sex'
     }

     return {
          type: error_type,
          message: error_message
     }
}
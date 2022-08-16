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
               navba.style = "position: relative"
               // navba.classList.remove('width-screen')
               navba.classList.add('width-screen')
          } else {
               navba.style = "position: fixed; top: 0"
               navba.classList.add('width-screen')
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
               error_message = 'Yêu cầu nhập thông tin'
               break
          }
          else {
               if(error_type === 0 && data.length < 8) {
                    error_message = 'Tên đăng nhập yêu cầu phải có ít nhất 8 kí tự';
                    break;
               } 
               else if(error_type === 2 && !data.includes('@gmail.com')) {
                    error_message = 'Email bao gồm @gmail.com';
                    break;
               }
               else if(error_type === 3 && ( checkString(data) || data.length < 8 )) {
                    error_message = 'Mật khẩu phải có ít nhất 8 kí tự và có kí tự thường, kí tự in hoa, số và không chứa kí tự đặc biệt';
                    break;
               }
               else if(error_type === 4 && data === '') {
                    error_message = "Yêu cầu chọn giới tính";
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
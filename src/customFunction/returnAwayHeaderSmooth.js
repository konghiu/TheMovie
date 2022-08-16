const returnAwayHeaderSmooth = () => {
     const Y = window.pageYOffset;
     let timer = setInterval(() => {
          if(document.documentElement.scrollTop <= 0) {
               clearInterval(timer)
          } 
          window.document.documentElement.scrollTop -= 20
     }, 20);
}

export default returnAwayHeaderSmooth
// document.querySelector('.pickcolor').addEventListener("click", ()=> {
//       const  element= document.querySelector(".colorpick");

//       if(!window .EyeDropper){
//         element.textContent=
//           "your browser does not support EyeDropper API"
//           return;
//       }
//         const colordrop= new EyeDropper();
//         colordrop
//         .open()
//         .then((result) => {
//             element.textContent = result.sRGBHex;
//             element.style.background= result.sRGBHex;
//             chrome.storage.syn.set({selectedColor: result.sRGBHex}, () => {
              //console.log('color stored:', result.sRGBHex);
    //});
//         })

//         .catch((e) => {
//             element.textContent= e;
//         });

// });




document.querySelector('.pickcolor').addEventListener("click", () => {
  const element = document.querySelector(".colorpick");

  if (!window.EyeDropper) {
      element.textContent = "Your browser does not support EyeDropper API";
      return;
  }

  const colordrop = new EyeDropper();
  colordrop.open()
      .then((result) => {
          element.textContent = result.sRGBHex;
          element.style.background = result.sRGBHex;
          
          // Store the color in Chrome Storage
          chrome.storage.sync.set({ selectedColor: result.sRGBHex }, () => {
              console.log('Color stored:', result.sRGBHex);
          });
      })
      .catch((e) => {
          element.textContent = e;
      });
});

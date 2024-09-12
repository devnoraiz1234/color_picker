
//     chrome.contextMenus.removeAll(() => {
// const contextMenu = {
//   id: "changecolor",
//   title: "Change Text Color",
//   contexts: ["selection"]
// };

// // Create the context menu item
// chrome.contextMenus.create(contextMenu);
// });
// // Add an event listener to handle clicks on the context menu item
// chrome.contextMenus.onClicked.addListener((info, tab) => {
//   if (info.menuItemId === "changecolor") {
//     console.log("Context menu item is clicked");

//     navigator.clipboard.readText().then(color => {
//       chrome.tabs.sendMessage(tab.id, {action: "changecolor", color: color});
//     });
//   }
// });




//Remove all existing context menu items to prevent duplicate IDs
// chrome.contextMenus.removeAll(() => {
//   const contextMenu = {
//     id: "changecolor",
//     title: "Change Text Color",
//     contexts: ["selection"]
//   };

//   // Create the context menu item
//   chrome.contextMenus.create(contextMenu);
// });

// // Add an event listener to handle clicks on the context menu item
// chrome.contextMenus.onClicked.addListener((info, tab) => {
//   if (info.menuItemId === "changecolor") {
//     console.log("Context menu item is clicked");

//      chrome.storage.syn.get('selectedColor', (data) => {
//       const color = data.selectedColor;
//       if (color) { 
//         chrome.tabs.sendMessage(tab.id, {action: "changecolor", color: color});
//       }else{
//               console.error( "No color store in storage.");
//       }

// })
         
//    }
//  });





// Remove all existing context menu items to prevent duplicate IDs
chrome.contextMenus.removeAll(() => {
  const contextMenu = {
      id: "changecolor",
      title: "Change Text Color",
      contexts: ["selection"]
  };

  // Create the context menu item
  chrome.contextMenus.create(contextMenu);
});

// Add an event listener to handle clicks on the context menu item
chrome.contextMenus.onClicked.addListener((info, tab) => {
  if (info.menuItemId === "changecolor") {
      console.log("Context menu item clicked");

      // Retrieve the color from Chrome Storage
      chrome.storage.sync.get('selectedColor', (data) => {
          const color = data.selectedColor;
          if (color) {
              chrome.tabs.sendMessage(tab.id, { action: "changecolor", color: color });
          } else {
              console.error("No color found in storage.");
          }
      });
  }
});


    
    
    
      



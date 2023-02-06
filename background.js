chrome.runtime.onInstalled.addListener( () => {
    chrome.contextMenus.create({
      id: 'sender',
      title: "test title", 
      contexts:[ "selection", "link", "image", "video" ]
    });
  });
  
  chrome.contextMenus.onClicked.addListener( ( info, tab ) => {
    if ( 'sender' === info.menuItemId ) {
      sample( info.selectionText );
    }
  } );
  
chrome.runtime.onInstalled.addListener( () => {
    chrome.contextMenus.create({
      id: 'sender',
      title: "test title", 
      contexts:[ "selection" ]
    });
  });
  
  chrome.contextMenus.onClicked.addListener( ( info, tab ) => {
    if ( 'sender' === info.menuItemId ) {
      sample( info.selectionText );
    }
  } );
  
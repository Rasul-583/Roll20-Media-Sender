chrome.runtime.onMessage.addListener( data => {
  if ( data.type === 'notification' ) {
    notify( data.message );
  }
});

chrome.runtime.onInstalled.addListener( () => {
  chrome.contextMenus.create({
    id: 'CBC',
    title: "Create Beyond20 Command", 
    contexts:[ "selection", "link", "image", "video" ]
  });
});

chrome.contextMenus.onClicked.addListener( ( info, tab ) => {
  if ( 'CBC' === info.menuItemId ) {
    notify( info.selectionText );
  }
} );

const notify = message => {
  return chrome.notifications.create(
    '',
    {
      type: 'basic',
      title: 'Command Created',
      message: message || '???',
      iconUrl: './assets/icons/128.png',
    }
  );
};
chrome.runtime.onMessage.addListener( data => {
  if ( data.type === 'notification' ) {
    CBC( data.message );
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
    CBC( info.selectionText || info.linkUrl || info.srcUrl);
  }
} );

const CBC = message => {
  return chrome.notifications.create(
    '',
    {
      type: 'basic',
      title: 'Command Created',
      message: '[[after]]'+' [name]'+'('+message+')[[/after]]' || 'error',
      iconUrl: './assets/icons/128.png',
    }
  );
};
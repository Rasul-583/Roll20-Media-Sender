chrome.runtime.onMessage.addListener( data => { // add a listener for incoming messages from the extension
  if ( data.type === 'notification' ) { // if the incoming message has a type of "notification"
    CBC( data.message ); // call a function CBC with the message from the data object as its argument
  }
});


chrome.runtime.onInstalled.addListener( () => { //code for context menu
  chrome.contextMenus.create({
    id: 'CBC',
    title: "Create Beyond20 Command", 
    contexts:[ "selection", "link", "image", "video" ]
  });
});


chrome.contextMenus.onClicked.addListener( ( info, tab ) => {//code for when context menu is pressed
  if ( 'CBC' === info.menuItemId ) {
    CBC( info.selectionText || info.linkUrl || info.srcUrl || 'error');
    navigator.clipboard.writeText('Text to copy');
  }
} );

const CBC = message => { //code for notification system
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

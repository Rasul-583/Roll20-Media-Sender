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


chrome.contextMenus.onClicked.addListener( async ( info, tab ) => {//code for when context menu is pressed
  if ( 'CBC' === info.menuItemId ) {
    let textToCopy = '[[after]]';
    if (info.selectionText) { //if the contect menu is used on text
      textToCopy += ' [name](' + info.selectionText + ')'; 
    } else if (info.linkUrl) { //if the contect menu is used on a link
      textToCopy += ' [name](' + info.linkUrl + ')';
    } else if (info.srcUrl) { //if the contect menu is used on an image
      textToCopy += ' [name](' + info.srcUrl + ')';
    } else {
      textToCopy += ' error';
    }
    
    textToCopy += '[[/after]]';
    
    await addToClipboard(textToCopy);
    CBC(textToCopy);
  }
} );

async function addToClipboard(value) {
  await chrome.offscreen.createDocument({
    url: 'offscreen.html',
    reasons: [chrome.offscreen.Reason.CLIPBOARD],
    justification: 'Write text to the clipboard.'
  });

  // now that we have an offscreen document, we can dispatch the message.
  chrome.runtime.sendMessage({
    type: 'copy-data-to-clipboard',
    target: 'offscreen-doc',
    data: value
  });
}


const CBC = textToCopy => { 
  return chrome.notifications.create(
    '',
    {
      type: 'basic',
      title: 'Command Created',
      message: textToCopy || 'error',
      iconUrl: './assets/icons/128.png',
    }
  );
};

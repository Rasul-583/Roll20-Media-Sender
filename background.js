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


const button = document.querySelector("#menu");
button.addEventListener("click", function() {
  const selectedButton = button.textContent;
  myFunction(selectedButton);
});


chrome.contextMenus.onClicked.addListener( ( info, tab ) => {//code for when context menu is pressed
  if ( 'CBC' === info.menuItemId ) {
    if (selectedButton === "before"){
      CBC( info.selectionText || info.linkUrl || info.srcUrl || 'error');
      navigator.clipboard.writeText( '[[before]]'+' [name]'+'('+info.selectionText+')[[/before]]'
      || '[[before]]'+' [name]'+'('+info.linkUrl+')[[/before]]'
      || '[[before]]'+' [name]'+'('+info.srcUrl+')[[/before]]' || 'error');
    }
    else if (selectedButton === "after"){
    CBC( info.selectionText || info.linkUrl || info.srcUrl || 'error');
    navigator.clipboard.writeText( '[[after]]'+' [name]'+'('+info.selectionText+')[[/after]]'
    || '[[after]]'+' [name]'+'('+info.linkUrl+')[[/after]]'
    || '[[after]]'+' [name]'+'('+info.srcUrl+')[[/after]]' || 'error');
    }
    else if (selectedButton === "replace"){
      CBC( info.selectionText || info.linkUrl || info.srcUrl || 'error');
      navigator.clipboard.writeText( '[[replace]]'+' [name]'+'('+info.selectionText+')[[/replace]]'
      || '[[replace]]'+' [name]'+'('+info.linkUrl+')[[/replace]]'
      || '[[replace]]'+' [name]'+'('+info.srcUrl+')[[/replace]]' || 'error');
    }
    else{
      return chrome.notifications.create( //code for notification system
      '',
      {
        type: 'basic',
        title: 'Error: No option selected!',
        message: 'Please select an option in the extension menu!',
        iconUrl: './assets/icons/128.png',
      }
    );
    }
  }
} );


const CBC = message => { 
  return chrome.notifications.create( //code for notification system
    '',
    {
      type: 'basic',
      title: 'Command Created',
      message: '[[after]]'+' [name]'+'('+message+')[[/after]]' || 'error',
      iconUrl: './assets/icons/128.png',
    }
  );
};

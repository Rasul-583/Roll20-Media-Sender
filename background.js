chrome.runtime.onInstalled.addListener( () => {
    chrome.contextMenus.create({
      id: 'sender',
      title: "test title", 
      contexts:[ "selection", "link", "image", "video" ]
    });
  });
  
  chrome.contextMenus.onClicked.addListener( async ( info, tab ) => {
    if ( 'sender' === info.menuItemId ) {
      try {
        const imgURL = '/images/generic/file.png';
        const data = await fetch(imgURL);
        const blob = await data.blob();
        await navigator.clipboard.write([
          new ClipboardItem({
            [blob.type]: blob
          })
        ]);
        console.log('Image copied.');
      } catch (err) {
        console.error(err.name, err.message);
      }
    }
  } );
  
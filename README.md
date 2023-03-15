# Roll20-Media-Sender
A chrome extension for sending media on roll20 trough beyond20.

This is an extension that let's you more easily make commands in DND Beyond to send media such as gifs or images.
The beyond20 extension is required if you want the commands to have functionality (https://chrome.google.com/webstore/detail/beyond-20/gnblbpbepfbfmoobegdogkglpbhcjofh)

How it works:

In roll20, you can embed media files such as gifs and images by using a command in the following format: {name}(www.link-ending-in.gif/png/jpeg/etc.) (Github makes anything within brackets into a hyperlink so you would normally use regular brackets "[" not curly ones. This applies to all sample commands in this file, imagine that all the curly brackets are normal ones). 
So if you send something such as: {tree}([https://upload.wikimedia.org/wikipedia/commons/e/eb/Ash_Tree_-_geograph.org.uk_-_590710.jpg](https://upload.wikimedia.org/wikipedia/commons/e/eb/Ash_Tree_-_geograph.org.uk_-_590710.jpg)) in the roll20 chat, 
you will instead see an image of a tree pop up (unless there’s an issue, in which case you will see a hyperlink with the {name} with a link to the file).

The Beyond20 extension sends the rolls from DND Beyond to the roll20 chat. But it also has an option to send other things as well:
“Send custom text to the VTT
In the "Notes" or "Description" section of any item, action, or spell on the D&D Beyond Character Sheet, you may add your own custom text to be sent to the VTT as a message when you use that element's roll action.
To do this, format the text you wish to send as follows:
{{msg-type}} Put text you wish to send HERE{{/msg-type}}
Replace "msg-type" with one of the following: "before", "after", or "replace" depending on how you want to affect the message or action that would normally be sent to the VTT.”

By combining both these commands, we can have Beyond20 automatically send a command to roll20 to display an image after or before the user casts a spell. 
The final command would look something like this: {{msg-type}} {name}([www.link-ending-in.gif/png/jpeg/etc](www.link-ending-in.gif/png/jpeg/etc).){{/msg-type}}. 
Typing this command is quite confusing and time consuming, this extension makes things simpler.

How to use:
1.	Choose your message type in the popup menu of the extension, “after”, “before” or “replace”.
2.	Right click an image, gif, video, link, or highlighted text and click the “Create Beyond20 Command” option in the context menu
3.	You should receive a notification telling you if the command creation was successful. The command will automatically be copied to your clipboard as well.
4.	Add the command to whichever spell, attack, item, etc. you would like to in the “notes” or “description” part.
5.	Whenever you cast the spell or make the attack or display the item in the VTT, you should now see it appear in the roll20 chat. Enjoy!

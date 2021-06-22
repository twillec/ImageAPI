This is a server to convert and serve placeholder images in the size required for your application.

__**Build:**__  
The following scripts have been provided:  
`lint` prettifies and lints the code.  
`build` compiles the typescript files to javascript.  
`test` runs the automated tests.  
`dev` runs the code through the nodemon development server.  
`start` runs the code.  

__**Usage:**__  
To use, visit `/convert` with the following variables in your query:

**image**: The image that you wish to use. Options include encenadaport, fjord, icelandwaterfall, palmtunnel, and santamonica.  
**width**: The width you wish the image to be.  
**height**: The height that you wish the image to be.

**Example:** `http://localhost:3000/convert?image=fjord&width=250&height=250`

If you do not provide all of the variables, you will recieve a 400 error. If the image name you provide does not exist, you will recieve a 404 error.

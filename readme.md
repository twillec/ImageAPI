This is a server to convert and serve placeholder images in the size required for your application.

__**Usage:**__
To use, visit /convert with the following variables in your query:

**image** The image that you wish to use. Options include encenadaport, fjord, icelandwaterfall, palmtunnel, and santamonica.
**width** The width you wish the image to be.
**height** The height that you wish the image to be.

If you do not provide all of the variables, you will recieve a 400 error. If the image name you provide does not exist, you will recieve a 404 error.
# dy-api
Scrapes data from a particular website that uses server side rendering and session auth.


# How does it work?
It parses the html recieved by the actual website, we are requesting. Since the original website is old, and lots of information is hidden behind unnecessary clicks or never used, this is supposed to be used to present only relevant data to the end user.

Mitmproxy was utilised to figure out the endpoints, then the cURL was copied into Postman, where the necessary headers were determined. 
(by trial and error 😭)

It also relies on the User to already be registered with the actual website, and thus this api cannot be abused by unregistered strangers. 


# Extra features I wish to add
- The ability to spoof having opened a document, so as to not waste time opening and closing each document, on the painstakingly slow, old website.
- The ability to download PDF files uploaded onto the old website. The current site only permits you to view them, using a very unintuitive UI that is way behind the times


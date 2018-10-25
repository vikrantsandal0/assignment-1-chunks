# assignment-1-chunks

1- I have used FileReader.readAsDataURL() which is used to read the contents of the specified Blob or File and it furthur fires an event  FileReader.onload when the content read is available.

2-Content contains the FORMAT of the file read , for example :  image/jpeg;base64 in the following


data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEASABIAAD/2wBDAAMCAgICAgMCAgIDAwMDBAYEBAMDBAgFBgUGCQgKCQkICQkKCw4MCgsOCwkJDRENDg8PEBAQCgwSExIQEw4QEA//2wBDAQMDAwQDBAcEBAcPCgkKDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw//wAARCAEqArIDASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ



3- We split the whole string from content, so that we get the data to be written the email.

4- Now we create the chunks of the data and furthur emit the chunks through sockets, and are furthur stored in an array .

4- Finally the data is written inside a file using node js Fs npm.



CONS.

we need to manually change the format of the file we are writing to the split the data properly and need to manually add the extension

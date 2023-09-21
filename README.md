Title:- Api documentation.

User Route = if user want register then user have send there personal information like(name,email,password,isAdmin).

i have register with this  information 
"name" : "suraj1",
"email":"suraj1@gmail.com",
"password":"1234",
"isAdmin" : true,


befor register i have hash the password to icrese the security
note:-isAdmin data type should be a boolean value and and the register method should be post

after register will get response Registeer success(201)

login

"email":"suraj1@gmail.com",
"password":"1234"

method should be post 
if user email and password is correct then it will return login success else it will return wrong password

after login success user get a token 
like this 
 "msg": "Login Success!",
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySUQiOiI2NTBjMjljZGQ1OWY4NjQ0YzdhNmFlZjAiLCJ1c2VyIjoiU3VyYWoxIiwiaWF0IjoxNjk1Mjk1OTk1fQ.-OL0ArZdUh4xB0KyayJlnhfx_m2FRSNKUdSX3jcSylY"


this is for books routes

in this routes have all methods like (get,patch,delete,post)

if user want to do something then user have first login and he has to pass the jwt token to the headrs after then he able to visite the books routes

for geting the book data
user have to visite this end point
http://localhost:8080/api/books/

METHOD: GET

it give a response as 2001 and return all the books


for post a new book into the book data
user have to visite this end point
http://localhost:8080/api/books

method  : POST

it give a response as 2001 and return all the books

for geting a specific  book by id
user have to visite this end point
http://localhost:8080/api/books/650c3030523a09ae964d34bc
METHOD: GET


it give a response as 2001 and return the books


for update the book data
user have to visite this end point
http://localhost:8080/api/books/650c3030523a09ae964d34bc
METHOD : PATCH

it give a response as 2001 and return all the books

for delete the book data
user have to visite this end point
http://localhost:8080/api/books/650c3030523a09ae964d34bc

METHOD: DELETE


it give a response as 2001 and return all the books


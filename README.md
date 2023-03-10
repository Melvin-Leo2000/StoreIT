# StoreIT

**Description** : StoreIT is a student-run business that provides storage services to peers living on campus.
<br>Website link: https://storeit.onrender.com/</br>

## Table of contents

- [About us](#about-us)
- [User stories](#user-stories)
- [Key features](#key-features)
- [Technologies](#technologies)
- [Contributors](#contributors)

## General Information

## About Us

We’re a group of NUS students who also lives on campus and faces the problem of bringing home lots of belongings and items every time the semester comes to an end. Realizing this pain point, we launched StoreIT in winter of 2022 under the NUS Entrepreneurship Society's "Start" programme in hopes to resolve storage problems faced by students by batching and reducing the cost + hassle of moving their items to and from school.

<br>
We have developed this web app as a platform for students to place their general information and details regarding the duration, cost and number of items they want to store over the holidays. The web app also provides general information about our business project, steps on placing an order, as well as contact functions for students to reach out should they have additional queries.
</br>

<br/>

## User Stories

Many students, especially foreign students, feels that its a hassle to move tons of items back to their home country at the end of every semester just to move it back home. As such, StoreIT helps them to store their items in school at a fee, providing greater convenience and ease as they travel back home, returning their items on time.

## Key features

**Order page**

An official forms for students to record their details and information regarding their storage duration, number of items, collection and return time. Using the nodemailer npm package , we automated the sending of email receipts to customers upon completing their order. All the information provided is stored in our MongoDB database.

**Contact us** 

Simple forms that records additional queries regarding the business to reach out easily to us.


**Admin page**

Admin page curated specifically for ourselves to manage and respond to customer demands and requests. We built one to record customers order sent to us via the order page, and one for contact responses, which we collate and respond back to them through appropriate forms of contact they have given us.


## Technologies

Project is created with:

- MongoDB
- ExpressJS
- React version: 18.2.0
- NodeJS
- Material UI

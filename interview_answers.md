## Interview Questions

Be prepared to demonstrate your understanding of this week's concepts by answering questions on the following topics. Add your answers to the questions within `interview_answers.md` file. These will not be counted as a part of your sprint score but will be helpful for preparing you for your endorsement interview, and enhancing overall understanding.


1. Explain what a token is used for.

    A token is used to authenticate a users credentials. Tokens can be used as a way to determine if a user is authorized to visit particular pages of a web app. They can also be used to authenticate requests to an API, such as an API requesting a token to be able to access/change the data on an API. 

2. What steps can you take in your web apps to keep your data secure?

    You can utilize user authentication, where users are required to have a token to access parts of the web app. This exists as a log in page for most web apps where if the users credentials pass the authentication tests they are allowed access to various parts of the web app. 
    A logged in user may be able to access their account info but only for accounts that they have the correct log in information for.

3. Describe how web servers work.

    Web servers are computers that are connected to the internet. They store code for websites to be shared on the internet and act as "hosts" for websites. These web servers are accessible through their URLs which act as an address for the particular website or program they are hosting. Accessing the URL connects your computer through the internet to the computer that is hosting the information.

4. Which HTTP methods can be mapped to the CRUD acronym that we use when interfacing with APIs/Servers.

    CRUD = create, read, update and delete.

    The HTTP methods that can be mapped to the CRUD acronym are:

    Create - Post, post allows for the transmission of new data to an API
    Read - Get, get allows for information to be accessed and 'read' from an API
    Update - Put, put allows for the updating of information that currently exists on an API by replacing existing data with new passed in data
    Delete - Delete, delete takes in a particular id for data that exists on an API and removes that particular data
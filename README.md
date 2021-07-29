# selenium_project_starter

Project:

Create a 'functional' front end and test it with Selenium.
Recommended to use VSCode Live Server for HTML hosting AND bootstrap for ease of web component creation

Either fork or git clone down this project to create your own

## Project requirements:

You've been tasked with creating a website for the famous brewery 'FermentCat' which will require the following pages:

- Home page
- Products Page: 
    - Separate pages for at least 4 beers
- Search page (for blog posts)
- Contact us page

All pages must include the following:

- Nav bar with logo and links to other pages
- Footer with copyright info and social media links (that should link to the social media home page )

Home page must include: 
- Header
- Image(s)
- Block of text 
- Cards containing Products OR blog posts
- whatever you want

Products Page: 
- Using punk api (https://punkapi.com/) cards for various beers
- Cards must contain title, image, tagline, link to a seperate page

Individual Products page:
There must be atleast 4 seperate product page (i.e /lostLager.html)
The product page should contain the following:
- name
- tagline
- first_brewed
- description
- image
- abv
- food pairings

Search Page:
Using the existing code create a series of 'articles' that use the search term 
I.e if you search "Plant" -> Article called 'Ten ways "Plant" inspired us' 

Create atleast 3 articles that use the Search term which contain (These can be seperate pages or just text blocks on the search page) 
- Title
- Article Text (use lorem ipsum or just dummy text)
- Author

Contact us page: 
A contact us page with a form that includes:
- Email
- Full name
- Issue title
- Issue description

At the bottom of the page when the form is submitted it outputs your email, name, title and description

## Testing

Using Selenium looking for the localhost (if running with VsCode Live server) Test the following:
- All of the nav bar links go to the correct page by checking title and/or page header
- Each of the pages individually have correct headers
- Cards on home page contain the correct info
- Check the image(s) src is/are correct 
- Nav bar contains the correct links as strings
- Footer contains the correct strings
- Social media links connect to the correct pages

- On the products page check the correct cards are displayed
- When clicking on the link on a card the correct page is linked

- On the search page check the search returns articles containing the search term
- Check the articles are correct
- Check the search bar can be filled out and the button does something

- On the contact us page check there are forms that allow you to fill in data
- Check when the forms are filled in the data is there
- Check when the button is clicked the correct data is outputted at the bottom of the screen

- Any other additional things added should be tested

All tests should be done using POM where appropriate

## MVP

MVP for this project is the Home Page and Search page with full functionality and testing. Other two pages are Should haves but not the main MVP.

## Hand in 

On the friday at 15:00 We will be doing quick 10 min demos of your front end and test suites.
All code should be pushed to a github repo accessible to the entire team 







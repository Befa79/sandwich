# My Sandwich Project

One or two paragraphs providing an overview of your project.
Essentially, this part is your sales pitch.

My Sandwich Project is a site where you can store your favourite sandwich recipes, 
You will be able to create an account, add, edit and delete your own sandwich recipes.
In the creation of your sandwiches, you can choose your type of bread, give your sandwich a name, and enter the ingredient that makes this sandwich, finally you will also have the possibility to add an image link, so you will see exactly how this sandwich looks like.

There are many sites about meals recipe, but not with only focus on sandwiches. The time that we take for lunch is less and less, and we are more workers that need a quick lunch between 12:30 to 13:00, eating at the cafeteria or the foodtruck.
Sometimes we order the sandwiches in the menu or make our own in the morning before commute to work.
I realize that we are ending up with the same sandwiches, and i believe this is because we miss some knowledge about all the variety of sandwiches. 
So now, you can have more daily changes by adding new recipe in your sandwiches database and get inspired by other sandwich fans !

Home page wireframe <a href="https://drive.google.com/file/d/1Anw3wQjiRxxQ2AOgWghlKHfzEw3PxHeP/view?usp=sharing">here</a>.

## UX
 
As sandwich aficionado, you'll be happy to create your own personal database of sandwiches, either known sandwiches recipe or your new creation, you can add the image of the sandwich you made.
Your recipes can be also edited for improvement, or even deleted if the result is not what expected.

If you do not know what sandwich you will make next week at work or for your kids, you might not now which ingredient you need to buy to make them. In the website you can see what other members have created and get inpired.

As somebody into food, like a nutricionist, you want to control the food and nutrient you add in your body every lunch, knowing sandwich habit of the population will help you to know better what they eat... and you might create your own recipes for your clients.



## Features

Home page : Present all the sandwiches created and you can make a search by name or ingredients, and if you log in, you are able to edit or delete your sandwiches recipe.
Register page: allows you to create an account and being registered in mongoDB
Log In page: allows you to log in and manage your recipe and create new ones
New recipe page: here you can add your new creation, select your bread type, sandwich name, ingredients, and image link

### Existing Features

- New recipe creation: allows users to add new nice recipes in their home page, by filling out the form.
- Edit & delete action: allows users to edit or delete their own recipes in their home page, by clicking on the buttons.

<!-- In addition, you may also use this section to discuss plans for additional features to be implemented in the future: -->
### Additional features:
- Adding images with uploading file in the form, that goes in mongoDB
- Showing a profile file where you have some data about the users 

### Features Left to Implement
- In the home page where all the sandwich recipes are presented, a score rating would be nice, and maybe some comments
- creating category for the bread-types and also for the dressings

## Technologies Used

- HTML & CSS = programming languages
- FontAwesome (https://fontawesome.com/) = use as Font
- Gitpod = IDE 
- Werkzeug = password crypted
- Flask = frameworks
- Flask-PyMongo = frameworks with DB
- Pymongo = Python with MongoDB
- Dnspython = DNS toolkit for Python
- Javascript/JQuery (https://jquery.com)  (https://www.javascript.com/) = The project uses JQuery and Javascript to simplify DOM manipulation.
- Python3 (https://www.python.org/) = programming language
- Heroku (https://www.heroku.com/) = Deployment
- MongoDB (https://www.mongodb.com/) = Database
- Materializecss (https://materializecss.com/) = CSS framework

## Testing

| Test      | Action | Expected Outcome | Test Outcome |
| ----------- | ----------- | ----------- | ----------- |
| 1.User creation | Enter a login & password | User created in mongoDB + profile page as registered | PASS |
| ----------- | ----------- | ----------- | ----------- |
| 2.Add a sandwich     | Enter data in 4 fields       | New recipe created in mongoDB + New recipe to the home page | PASS |
| ----------- | ----------- | ----------- | ----------- |
| 3.Add a sandwich recipe with 1 of the 4 fields empty | Enter data in all the field but one| New recipe can’t be added and the empty field with a message, Please add ….| PASS / FAIL Explanation under |
| ----------- | ----------- | ----------- | ----------- |
| 4.Edit a recipe | Click edit button in the home page...Change the recipe and click Edit the recipe | New recipe to be showed with message confirmation that the recipe is updated | PASS |
| ----------- | ----------- | ----------- | ----------- |
| 5.Cancel button from edit recipe | Click edit button in the home page...Change the recipe and click cancel | The user should then return to the home page | PASS |
| ----------- | ----------- | ----------- | ----------- |
| 6.Delete a recipe | Click delete button in the home page, and then confirm the deletion with the popup message | Pop up window message to appear when delete button is clicked, then recipe deleted from the home page and the database | PASS |
| ----------- | ----------- | ----------- | ----------- |
| 7.User restriction | Log out and see if you can delete or edit recipes | When logout, the menu should show login and register...The sandwich recipe should not show : edit & delete button | PASS |


The 3 test failed for the empty dropdown list selection (bread_type) 
: The recipe can't be created, however there is no error message : "!Please select an item of the list"
This seems to be a bug form Materializecss... and beside a lot of search, and tutor support, i could not find a good fix for this issue.

The creation of the pop-up message for the recipe deletion confirmation was very difficult, and i finally found in stackoverflow this : https://stackoverflow.com/questions/9139075/how-to-show-a-confirm-message-before-delete


If you wish to test it, 

### Responsiveness
There is 2 approach for Responsiveness:
- The sidenavbar triggered with materializecss framework 
- Change style for x-small screen size

NB: This part was a real struggle as the use of Materializecss made it very difficult to target the correct element to style. However, it pushed me to learn more the dev tool use.


## Deployment

The project is stored in a GitHub repository and hosted on Heroku.

How to deploy to Github:

1.When logged into GitHub, navigate to the repository you want to host/publish. For this project, click <a href="https://github.com/Befa79/sandwich">here</a>.

2.Click on 'Settings' to the far right in navigation menu below your repository name.

3.Scroll down to 'GitHub Pages' and select 'master branch' as the source.

4.Click save.

5.The link to the site hosted on GitHub Pages should appear at the top of the section.

How to deploy to Heroku using GitPod:

-Created a new application using the Heroku dashboard.
-Go to settings tab, click on 'reveal config vars' and add config vars such as IP (0.0.0.0), PORT (5000), MongoDB Name, MongoDB URI (URL with DB name and password).
- Install Heroku via the console using 'npm install -g Heroku'.
- Log into Heroku via the console using 'heroku login' and follow the on screen instructions to log in.
- Create a requirements.txt via the console using 'pip3 freeze > requirements.txt'.
- Create a Procfile via the console using 'echo web: python app.py > Procfile'.
- Connect GitHub to Heroku via the console using 'heroku git:remote a codei-cook-book'
- Commit all files in your project via the console using 'git add .' and 'git commit -m "Message"'.
- Deploy your project to Heroku via the consol using 'git push heroku master'.


## Credits

### Content
- The recipes was inspired by different books sandwiches, I tested myself the Reuben Sandwich, and this was very good
- Technical inspiration from tutors, other student example, stackoverflow

### Media
- The photos used in this site were obtained from https://www.istockphoto.com/nl & the guardian (for 1 photo)

### Acknowledgements

- I received inspiration from dutch course that show the differences in lunch habits in different European countries

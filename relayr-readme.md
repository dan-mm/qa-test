# Hi Relayr #

## Answers to Test Task ##
## Imagine the following situation. You need to establish a QA process in a cross-functional team. The team builds a front end application using REST API's. ##
### 1.) Where would you start? What would be your first steps? ###
Fully understanding the applicaiton is key for the first step. I will read the documentation first, then any design documents, then manually use any version of the application that currently exists. I will write down any questions I have about its use or notes for improvement. I especially spend time trying to think of any negative or edge cases that would cause unintended behaviour. I then go to the product manager with this list of questions to get answered. If I find the documentation lacking, I usually fill it in based on these answers. After this I go through the ticket board and try to get a good understanding of what issues already exist in the application, and what the current state of the development work is.

### 2.) Which process would you establish around testing new functionality? How would you want the features to be tested? ###
For testing new functionality, I like to create a document for all the test cases I can think of for this new feature. This includes basic positive testing, negative testing, edge cases, and integration tests.
I will make sure to be a part of the process for writing and estimating stories, both so that I understand the story myself, and help come up with good acceptance criteria.
For every test case I have written, I estimate both the priority and whether or not it should be automated. 
As the tickets are done by devs and move to QA, I make sure to test them manually first to make sure they pass or give quick feedback to the devs. Some tickets make much more sense to test via automated tests only so I spend my time writing these tests. I then spend any remaining time I have per sprint writing automated front end and regression tests as per their priority to make sure features remain working.

### 3.) Which tools would you suggest using to help your team with a daily work? ###
I assume a good bug and tracking story such as Jira is already being used.
Since the application uses REST API's, I find Postman to be useful for quickly doing manual API tests.
I like to use Selenium for front end tests. For unit tests whatever unit test framework matches the langauge used by the team. Cucumber is also useful for writing test cases in a way that is readable by everybody.
Though I haven't had a chance ot use it myself, a good test case management tool such as Tarantula would be useful.

### 4.) If you would do a test automation which techniques or best practices would you use the application? ###
When writing automated tests, I keep these techniques in mind:
- Test independence. I make sure that any test I write is not dependent on any previous test. 
- Properly setting up test data. As part of the above point, test data should be inserted as programatically as possible. Since the application uses REST API's, I usually have API calls and integrations as part of my front end testing network. That way I can set up any data via API calls and then only write the front end tests for whatever specific case its testing.
- Page objects. I make sure to create page objects for every page / modal window/ section. These page object will have functionality that is specific to that page, making the code for the actual test cases as simple and readible as possible. Additionally any ID or selector will be written only once in each page object, so that if they change in the future updating tests will be quick and easy.


### 2.) How would you test search functionality of your favourite website? ###
- choose a site and test search functionality
- document several test cases
- implement 1 or 2 automated tests based on test cases

For this, you can refer to the rest of this repository. Please read the ReadMe.MD on how to clone and run the code.
I chose to write this in Javascript, using WebdriverIO, Jasmine, and Selenium. The pure and simple reason for this is because I already had a barebones boilerplate project setup with these technologies for my personal use, so this was quickest for me. This is also why you may see some extra unused files in the project, such as a small helper file with a few random useful functions and basic API functionality.

I chose to search against reddit's homepage search because something like google or amazon has already been done a million times by other boilerplate projects, so I chose this to further insure that I wrote this myself. Enjoy.

Test cases:
- When I search for "Foobar", it returns a list of search result. I expect all these results to include "Foobar" (case insensitive) in the name. - implemented
- When I search for nonsense string, I expect it to return no search results. -implemented
- When I search for "Foobar" with whitespace before and after it, I expect it to give me the same search results as if searching for "Foobar" without the whitespace. -implemented
- When I search for nothing, it should return with no search results.
- When I search for "Foobar", it should return a mixture of both subreddits and specific link results.
- When I try to search for an absurdly long string, the text box should have a maximum input length that prevents me from doing so.​

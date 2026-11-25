ASSIGNMENT 9 – JQUERY SOLUTIONS
================================

Each question has its own HTML file and matching JavaScript file (Q1–Q10).
All pages use semantic HTML5 structure and include comments for key jQuery logic.
The jQuery library is loaded from the official jQuery CDN, so an internet connection
is required when opening the HTML files.

HOW TO RUN
----------
1. Extract this folder.
2. Open the folder in VS Code.
3. Open any HTML file (for example Q1_Welcome_Page.html).
4. Run it with VS Code Live Server, or open the HTML file in a browser.
5. Keep the matching .js file in the same folder as its HTML file.

FILES
-----
Q1_Welcome_Page.html / .js
Q2_Product_Highlight.html / .js
Q3_Interactive_FAQ.html / .js
Q4_Special_Offer_Banner.html / .js
Q5_Team_Members_Directory.html / .js
Q6_Event_Subscription_Panel.html / .js
Q7_Search_Courses.html / .js
Q8_Dynamic_Blog_Posts.html / .js
Q9_Multi_JQuery_Widgets.html / .js
Q10_Registration_Form_Validation.html / .js

NOTES
-----
- Q9 uses jQuery 3.6.4 as jqV1 with noConflict(true), then loads jQuery 3.7.1
  as the global $ alias. This demonstrates two versions without alias collision.
- Q10 email uniqueness is demonstrated using a small client-side sample list.
  A real application must check uniqueness on the server/database.
- Q6 uses delegated .on() so newly-added topics also respond to clicks.

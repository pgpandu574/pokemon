ApexPlusFullStackAssignment.pdf
PDF
Create a readme file for above page 
ChatGPT
ApexPlus Full Stack Assignment Documentation
Description
In this assignment, you will create a web application using ReactJS/ReactTS for the front end and Node ExpressJS for the back end. The application will allow users to add and manage Pokémon along with their details.

Instructions
Features to Implement
Add Pokémon Page:

User can add a Pokémon with the following details:
Pokémon Owner Name
Direction
Initial Position (x, y)
Pokémon Name
Pokémon Ability
Speed
Each user can have multiple Pokémon.
Fetch Pokémon details from the Pokémon API: https://pokeapi.co/api/v2/pokemon-species/1/.
Pokémon names should be selectable from a list, and abilities should auto-fill based on the selected Pokémon.
List Pokémon Users Page:

Display a table listing all Pokémon added by users.
Include options to Edit and Delete each Pokémon entry.
Reflect updates immediately upon adding, editing, or deleting Pokémon.
Additional Add Pokémon Page:

Allow users to add more Pokémon to existing Pokémon owners.
Display a list of Pokémon owners to select from.
Home Page:

Dropdown to select a user and display their Pokémon.
Div container to show Pokémon positions based on user input.
Buttons for Pokémon actions:
Pokemon Go: Moves the Pokémon based on speed and direction. Pokémon disappear when crossing container boundaries.
Pokemon Flee: Toggles the visibility of the Pokémon.
Pokemon Cease: Freezes the Pokémon in place.
CRUD Operations
Implement full CRUD operations:
Create: Add new Pokémon.
Read: Display existing Pokémon and their details.
Update: Edit Pokémon details.
Delete: Remove Pokémon.
Interact with the Node ExpressJS server for all CRUD operations.
Store user and Pokémon data on the server-side using a file (e.g., JSON).
Server Implementation
Set up a Node server to handle:
GET requests to fetch Pokémon data.
POST requests to add new Pokémon.
PUT requests to update existing Pokémon.
DELETE requests to remove Pokémon.
Ensure data integrity and correct associations between users and their Pokémon.
Integrity and Rules
Prohibition of Cheating: Do not copy code, share code, or use unauthorized resources.
Monitoring: The assignment will be evaluated for plagiarism and fairness.
Consequences of Cheating: Cheating will result in disqualification and a permanent ban from future positions.
API References
Pokémon API: https://pokeapi.co/api/v2/pokemon-species/1/
Example UI Illustrations
Add Pokémon Page

List Pokémon Users Page

Additional Add Pokémon Page

Home Page

Notes
Ensure a responsive and user-friendly interface.
Validate user inputs and handle errors gracefully.
Document your code and include comments where necessary

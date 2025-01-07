# Search X

Your task is to implement the basics of a search engine client using ReactJS. You don’t need to go into details, the must-have requirements are:

- You need an input where you can type.
- The input should support auto-completion.
- You need to show all the results (list of results) on selection (by clicking on a result item or by pressing the Enter key).

The points above are similar to Google search behaviour but really far from the real complex one, you can follow their behaviour if you want (not needed to be the same, just a simple version).

## Search autocomplete feature:

- By typing you need to check your local DB (feel free to hardcode some data and use it as a fake/local DB) for entries whose title starts with the value of the input and then render all of them like on the screenshot below (You don’t need to highlight/bold the letters).
- In addition, you need to indicate which of the autocompleted items are already in your search history (recently searched items), please check the first item of the results autocompletion.

### Notice:

- Once the screen loads you need to auto-focus the search input.
- Once you focus out the input you’ve to close (hide) the list with the autocompleted items BUT you still need to keep the items in your memory (just hide the list).
- Once you focus the input you need to check if there are autocomplete items in memory and if yes then you need to show them like in the screenshot above.
- You have to limit the autocomplete items to a maximum of 10 rows/elements.

Take a look also that there is a “Remove” / ”Премахване” button – by clicking it you have to remove the relevant item from your search history, the item colour should change from purple to black/dark because the item won’t be in your search history anymore.

## Results list feature:

Once you select an item from the autocomplete shown on the previous screenshot OR press enter, you need to take the input value/text and check again your DB for items whose title contains the value/text.

### Mandatory data to render is:

- Keep the search input (you are still able to type and perform a new search).
- Result metadata (below the search input it tells you how many results you have and how long it takes to perform the search).
- A list of results where each result has:
  - Title (which is a clickable real link/URL)
  - Description

## Instructions:

- Please use git and push all your code to a remote git provider (GitHub/Bitbucket), make sure that the repository is public so the source would be free for read/download.
- You are not allowed to use 3rd parties for the search/auto-completion.
- You must implement the components on your own, do not use 3rd parties like MUI, Bootstrap, etc.
- Please avoid ES6 classes and try to use React hooks and Context API.
- Feel free to use a real database/storage if you want.
- Everything which extends the must-have requirements (like pagination, real data base) and is close to Google search behaviour will be considered a bonus.
- The UI should follow the screenshots (as a design) but is not needed to be perfect, however, good styling would be considered as a bonus.
- All the screen elements not mentioned in the requirements (like the microphone icon for voice search) are not mandatory.
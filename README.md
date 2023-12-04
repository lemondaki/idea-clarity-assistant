
## Idea Clarity Assistant

A small extention that helps users quickly clarify their confused ideas by suggesting questions related to their ideas, covering information and finally summarizing the main idea.


### Tech Stack

React + Vite + Typescript, CSS Module, State Management with Context API, Integrate with chatgpt api


### Documentation

[An example Chatgpt completions API call](https://platform.openai.com/docs/guides/gpt/chat-completions-api)

[How create your own api key](https://platform.openai.com/account/api-keys)

[Vite document guide](https://vitejs.dev/guide/)

[Learn the basics of Chrome extension development](https://developer.chrome.com/docs/extensions/mv3/getstarted/development-basics/)

## Installation

Prepare for project 

```bash
  git clone url_repository
  npm install 
  cd idea-clarity-assistant
```
    
### Environment Variables

To run this project, you will need to add the following environment variables to your .env file. 
Create .env file in the  root file

```bash
  VITE_OPENAI_API_KEY = 'YOUR API KEY'
```
### Deployment

To deploy this project run
```bash
  npm run dev
```
 *`npm run dev`* for a dev server. Navigate to `http://localhost:5173/`
The application will automatically reload if you change any of the source files.

### Building the App

You may run npm run build command to build the app.
```bash
  npm run build
```
The build artifacts will be stored in the `dist/` directory.

### Load an unpacked extension

1.Go to the Extensions page by entering `chrome://extensions` in a new tab. (By design chrome:// URLs are not linkable.)

+ Alternatively, click on the Extensions menu puzzle button and select Manage Extensions at the bottom of the menu.

+ Or, click the Chrome menu, hover over More Tools, then select Extensions.

2.Enable Developer Mode by clicking the toggle switch next to     Developer mode.

3.Click the Load unpacked button and select the extension directory. For my project is `dist/` folder when you run build completed.


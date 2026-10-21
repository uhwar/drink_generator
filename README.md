# 🍹 Cocktail Randomizer

Just a simple app that picks random drinks for you. Uses React and Vite because those things actually work.

## Why This Exists

Getting indecisive about what to drink is dumb. This fixes that problem. You click a button, get a random cocktail, and now you have a drink. Simple.

## What You Need

- **React 18.2.0** - Everyone uses it, it works fine, whatever
- **Vite 5.0.0** - Way faster than Webpack. That's literally the only reason
- **The Cocktail DB API** - Free cocktail data that someone else already organized
- **Node.js and npm** - Obviously

## Setup

```bash
cd cocktail_randomizer
npm install
npm run dev
```

Server starts at localhost:3000. Browser probably opens automatically, if not go there yourself.

## How to Use It

Click the button. It fetches a random cocktail from the API. Shows you the name, picture, how to make it. That's it.

If you want the actual instructions for the drink, they're in there too. Pretty straightforward.

## Building for Real

```bash
npm run build
```

Makes a `dist` folder with all the optimized stuff ready to deploy. 

## The Code Breakdown

```
src/
├── main.jsx        - Boots up React
├── App.jsx         - Does all the actual work
└── App.css         - Makes it look less terrible
```

App.jsx has the state management and API call logic. Catches errors, shows loading state when fetching. Nothing fancy but it works.

## If Something Breaks

- Check the browser console first
- The API might be down (not our problem)
- Try clearing the browser cache or something
- Otherwise just restart the dev server

## What This Doesn't Have

- TypeScript (overkill for this)
- Redux or any state management library (useState is fine)
- Testing (I know, I know)
- Dark mode (maybe later)

## Future Stuff That Might Happen

- Search for specific cocktails
- Save favorites somehow
- Better styling
- Actually add tests
- TypeScript if it ever becomes necessary

## License

MIT. Do whatever with it.

---

*Made because picking a drink shouldn't require a committee*

# 7-eleven challenge notes

### Stories 1-3: The Pokemon Picker
The cart page mentioned "a summary view of the cart and selected Pokemon details".  I assumed the details just referred to the name, picture, and quanity. But I was not sure, and that's the reason I kept all of the pokemon details in state.  Normally, I would have kept only the details the app uses to avoid having a massive object in redux.
Notes:
- The app retrieves the data immediately when it is open, but there is also a pull-to-refresh.  I used Promise.allSettled (instead of Promise.all, which will stop if one fails) in combination with createAsynThunk;
- I use redux toolkits createSlice, primarily for reducers and actions. I manage request state using createAsyncThunk and the builder patter (addCase, matchCase)
- Apologies for the ugly commit messages.  That's not how I write them working on a team.;
- My api call is not ideal.  Large result sets take a while. If I had more time, I would have experimented with breaking up the individual pokemon requests into smaller batches, in combination with some sort of infinite scroll.


https://github.com/jehillert/7-eleven-code-challenge/assets/25601296/b7b65be0-bc3d-4279-9634-81d5c19d2f00


### Not-A-Bonus Story: Theming
I integrated a light and dark theme through styled-components.  It is not the simplest way to theme, just a decent one if no UI libraries are being used and you want more control than React Navigation provides.


https://github.com/jehillert/7-eleven-code-challenge/assets/25601296/533a1c43-2b69-497f-9b9c-a7d975b73708


### Large result set
This video shows the scrollview handling 500 results in state on my Pixel 7 Pro.  



https://github.com/jehillert/7-eleven-code-challenge/assets/25601296/b56ce8a1-1f49-40c7-b1e6-1070525a1641



### Bonus Story: Bonus Story: Dynamic Pricing Based on Weight
This is shown in previous two videos.

### Bonus Story: Bonus Story: Optimize Performance and User Experience
I did not set out to do this explicitly, but I did do some optimizations as I went along.
- memoization:
  with React: I did not do much here, other than wrap the renderItem for the flatlist on the checkout page.
  with redux-toolkit: I use createSelector every time I have derived data that goes just being a direct property on the slice.  Some of them may be unnecessary.
- no work on caching, but the api call is nested in a toplevel use-effect that only calls on mount (empty dependency array), I implmented pull-to refresh on the scrollview.

### Bonus Story: Show the Ability to Log
I implemented Sentry basic logging, but with the following additional functionality:
- Sentry takes a screenshot of the UI where the error occurred;
- Sentry middleware provides all of the actions leading up to an error in breadcrumbs;

I did not have time to implement environment variables, but this code can be run in the following branch with a valid SENTRY_DSN.

[this link](https://1drv.ms/v/s!Ahk-EzuDqhiElsFmyM_6qcZ_iFsCzA?e=mt2ScZ) shows the app logging locally in development, and sending logs to the project hosted on Sentries website.

Branch
https://github.com/jehillert/7-eleven-code-challenge/tree/sentry-integration

To run
Create a file `src/appConfig` with the following content:
```tsx
export const SENTRY_ENDPOINT =
  'HTTPS://YOUR_VALID_SENTRY_DSN_HERE';
export const APP_BUILD = '1';
export const APP_VERSION = '0.0';
export const SENTRY_ENABLED = 'true';

```

### Bonus Story: Create an API using RTK Query and Entity Adapter
I did not set out to do this explicitly, but these are things I did that overlap:
- Pokemon are all mostly managed by createEntityAdapter.  I made the following entity:
```tsx
export type PokemonBaseEntity = {
  name: string; // pokemon name
  weight?: number | null; // pulled form data, if api call to retrieve particular pokemon data is successful.
  imageUrl?: string; // same as line above
  error?: string; // If an error occurs when retrieving a particular pokemon, the serialized error is recorded here.
  url: string; // pokemon data url, probably no reason to store this given requirements
};
- I did not use RTK Query, but I did use `createAsyncThunk()` and took advantage of the functionality it provides for tracking progress of the api call (e.g., 'idle' | 'pending' | 'succeeded' | 'failed'), recording errors, showing a loader.



```

### Additional Notes
#### Printout of State Tree
This is what my state tree looks like after fetching data.  I probably could have removed a few fields from the Pokemon entities to keep state smaller.

```json
{
  "pokemon": {
    "ids": [
      "_UwoFodOlR_XxNUsqtkrg",
      "pjsqdXbqW_UHjA4Sawq9x",
      "c5-pK1cqnidUb0NDn4MpI",
      "r_NuoZ1npfKtFzGpei4-Y",
      "BTWAjOmIkb4j7oE4wEiVY",
      "RIrPevuojo5bE82tmZOPQ",
      "Mb4vWCL4EZZ_8rO1TZCLs",
      "dDmsGFaxT6FpbvNAC4Ep2",
      "QjkOGmFfJo01G1iJ89MEH",
      "5DQWjX1gpdEHcZQgpNWRu",
      "F1-ESS5rtBJ1h62tZA810",
      "iYA8HIkgHFjtsUonTD2PG",
      "xUFYEyCNQkQFzbEXsNZ0Q",
      "Uio6-FbSBMuS1QP1M2c38",
      "MUQMAKm6e90_sFLen5566",
      "bkfCIKFIiotNN0p1HF30p",
      "gANUdKH3hg4mWKgoX3bcp",
      "ypre_tp3KZ_W0JTdYuxKN",
      "BDXfAKkwkT_diE-C4LXCB",
      "fr18zziI_yeXhM9tdzbH6"
    ],
    "entities": {
      "_UwoFodOlR_XxNUsqtkrg": {
        "name": "bulbasaur",
        "url": "https://pokeapi.co/api/v2/pokemon/1/",
        "cartCount": 0,
        "id": "_UwoFodOlR_XxNUsqtkrg",
        "weight": 69,
        "imageUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
        "error": ""
      },
      "pjsqdXbqW_UHjA4Sawq9x": {
        "name": "ivysaur",
        "url": "https://pokeapi.co/api/v2/pokemon/2/",
        "cartCount": 0,
        "id": "pjsqdXbqW_UHjA4Sawq9x",
        "weight": 130,
        "imageUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png",
        "error": ""
      },
      "c5-pK1cqnidUb0NDn4MpI": {
        "name": "venusaur",
        "url": "https://pokeapi.co/api/v2/pokemon/3/",
        "cartCount": 0,
        "id": "c5-pK1cqnidUb0NDn4MpI",
        "weight": 1000,
        "imageUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png",
        "error": ""
      },
      "r_NuoZ1npfKtFzGpei4-Y": {
        "name": "charmander",
        "url": "https://pokeapi.co/api/v2/pokemon/4/",
        "cartCount": 0,
        "id": "r_NuoZ1npfKtFzGpei4-Y",
        "weight": 85,
        "imageUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png",
        "error": ""
      },
      "BTWAjOmIkb4j7oE4wEiVY": {
        "name": "charmeleon",
        "url": "https://pokeapi.co/api/v2/pokemon/5/",
        "cartCount": 0,
        "id": "BTWAjOmIkb4j7oE4wEiVY",
        "weight": 190,
        "imageUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/5.png",
        "error": ""
      },
      "RIrPevuojo5bE82tmZOPQ": {
        "name": "charizard",
        "url": "https://pokeapi.co/api/v2/pokemon/6/",
        "cartCount": 0,
        "id": "RIrPevuojo5bE82tmZOPQ",
        "weight": 905,
        "imageUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png",
        "error": ""
      },
      "Mb4vWCL4EZZ_8rO1TZCLs": {
        "name": "squirtle",
        "url": "https://pokeapi.co/api/v2/pokemon/7/",
        "cartCount": 0,
        "id": "Mb4vWCL4EZZ_8rO1TZCLs",
        "weight": 90,
        "imageUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png",
        "error": ""
      },
      "dDmsGFaxT6FpbvNAC4Ep2": {
        "name": "wartortle",
        "url": "https://pokeapi.co/api/v2/pokemon/8/",
        "cartCount": 0,
        "id": "dDmsGFaxT6FpbvNAC4Ep2",
        "weight": 225,
        "imageUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/8.png",
        "error": ""
      },
      "QjkOGmFfJo01G1iJ89MEH": {
        "name": "blastoise",
        "url": "https://pokeapi.co/api/v2/pokemon/9/",
        "cartCount": 0,
        "id": "QjkOGmFfJo01G1iJ89MEH",
        "weight": 855,
        "imageUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/9.png",
        "error": ""
      },
      "5DQWjX1gpdEHcZQgpNWRu": {
        "name": "caterpie",
        "url": "https://pokeapi.co/api/v2/pokemon/10/",
        "cartCount": 0,
        "id": "5DQWjX1gpdEHcZQgpNWRu",
        "weight": 29,
        "imageUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10.png",
        "error": ""
      },
      "F1-ESS5rtBJ1h62tZA810": {
        "name": "metapod",
        "url": "https://pokeapi.co/api/v2/pokemon/11/",
        "cartCount": 0,
        "id": "F1-ESS5rtBJ1h62tZA810",
        "weight": 99,
        "imageUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/11.png",
        "error": ""
      },
      "iYA8HIkgHFjtsUonTD2PG": {
        "name": "butterfree",
        "url": "https://pokeapi.co/api/v2/pokemon/12/",
        "cartCount": 0,
        "id": "iYA8HIkgHFjtsUonTD2PG",
        "weight": 320,
        "imageUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/12.png",
        "error": ""
      },
      "xUFYEyCNQkQFzbEXsNZ0Q": {
        "name": "weedle",
        "url": "https://pokeapi.co/api/v2/pokemon/13/",
        "cartCount": 0,
        "id": "xUFYEyCNQkQFzbEXsNZ0Q",
        "weight": 32,
        "imageUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/13.png",
        "error": ""
      },
      "Uio6-FbSBMuS1QP1M2c38": {
        "name": "kakuna",
        "url": "https://pokeapi.co/api/v2/pokemon/14/",
        "cartCount": 0,
        "id": "Uio6-FbSBMuS1QP1M2c38",
        "weight": 100,
        "imageUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/14.png",
        "error": ""
      },
      "MUQMAKm6e90_sFLen5566": {
        "name": "beedrill",
        "url": "https://pokeapi.co/api/v2/pokemon/15/",
        "cartCount": 0,
        "id": "MUQMAKm6e90_sFLen5566",
        "weight": 295,
        "imageUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/15.png",
        "error": ""
      },
      "bkfCIKFIiotNN0p1HF30p": {
        "name": "pidgey",
        "url": "https://pokeapi.co/api/v2/pokemon/16/",
        "cartCount": 0,
        "id": "bkfCIKFIiotNN0p1HF30p",
        "weight": 18,
        "imageUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/16.png",
        "error": ""
      },
      "gANUdKH3hg4mWKgoX3bcp": {
        "name": "pidgeotto",
        "url": "https://pokeapi.co/api/v2/pokemon/17/",
        "cartCount": 0,
        "id": "gANUdKH3hg4mWKgoX3bcp",
        "weight": 300,
        "imageUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/17.png",
        "error": ""
      },
      "ypre_tp3KZ_W0JTdYuxKN": {
        "name": "pidgeot",
        "url": "https://pokeapi.co/api/v2/pokemon/18/",
        "cartCount": 0,
        "id": "ypre_tp3KZ_W0JTdYuxKN",
        "weight": 395,
        "imageUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/18.png",
        "error": ""
      },
      "BDXfAKkwkT_diE-C4LXCB": {
        "name": "rattata",
        "url": "https://pokeapi.co/api/v2/pokemon/19/",
        "cartCount": 0,
        "id": "BDXfAKkwkT_diE-C4LXCB",
        "weight": 35,
        "imageUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/19.png",
        "error": ""
      },
      "fr18zziI_yeXhM9tdzbH6": {
        "name": "raticate",
        "url": "https://pokeapi.co/api/v2/pokemon/20/",
        "cartCount": 0,
        "id": "fr18zziI_yeXhM9tdzbH6",
        "weight": 185,
        "imageUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/20.png",
        "error": ""
      }
    },
    "loading": "idle",
    "requestError": null
  },
  "settings": {
    "themeId": "system"
  }
```


This is a new [**React Native**](https://reactnative.dev) project, bootstrapped using [`@react-native-community/cli`](https://github.com/react-native-community/cli).

# Getting Started

>**Note**: Make sure you have completed the [React Native - Environment Setup](https://reactnative.dev/docs/environment-setup) instructions till "Creating a new application" step, before proceeding.

## Step 1: Start the Metro Server

First, you will need to start **Metro**, the JavaScript _bundler_ that ships _with_ React Native.

To start Metro, run the following command from the _root_ of your React Native project:

```bash
# using npm
npm start

# OR using Yarn
yarn start
```

## Step 2: Start your Application

Let Metro Bundler run in its _own_ terminal. Open a _new_ terminal from the _root_ of your React Native project. Run the following command to start your _Android_ or _iOS_ app:

### For Android

```bash
# using npm
npm run android

# OR using Yarn
yarn android
```

### For iOS

```bash
# using npm
npm run ios

# OR using Yarn
yarn ios
```

If everything is set up _correctly_, you should see your new app running in your _Android Emulator_ or _iOS Simulator_ shortly provided you have set up your emulator/simulator correctly.

This is one way to run your app — you can also run it directly from within Android Studio and Xcode respectively.

## Step 3: Modifying your App

Now that you have successfully run the app, let's modify it.

1. Open `App.tsx` in your text editor of choice and edit some lines.
2. For **Android**: Press the <kbd>R</kbd> key twice or select **"Reload"** from the **Developer Menu** (<kbd>Ctrl</kbd> + <kbd>M</kbd> (on Window and Linux) or <kbd>Cmd ⌘</kbd> + <kbd>M</kbd> (on macOS)) to see your changes!

   For **iOS**: Hit <kbd>Cmd ⌘</kbd> + <kbd>R</kbd> in your iOS Simulator to reload the app and see your changes!

## Congratulations! :tada:

You've successfully run and modified your React Native App. :partying_face:

### Now what?

- If you want to add this new React Native code to an existing application, check out the [Integration guide](https://reactnative.dev/docs/integration-with-existing-apps).
- If you're curious to learn more about React Native, check out the [Introduction to React Native](https://reactnative.dev/docs/getting-started).

# Troubleshooting

If you can't get this to work, see the [Troubleshooting](https://reactnative.dev/docs/troubleshooting) page.

# Learn More

To learn more about React Native, take a look at the following resources:

- [React Native Website](https://reactnative.dev) - learn more about React Native.
- [Getting Started](https://reactnative.dev/docs/environment-setup) - an **overview** of React Native and how setup your environment.
- [Learn the Basics](https://reactnative.dev/docs/getting-started) - a **guided tour** of the React Native **basics**.
- [Blog](https://reactnative.dev/blog) - read the latest official React Native **Blog** posts.
- [`@facebook/react-native`](https://github.com/facebook/react-native) - the Open Source; GitHub **repository** for React Native.

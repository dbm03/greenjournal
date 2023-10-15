# GreenJournal: The Next Step in Sustainability

Project submitted to HackGT X: Journal of Memories

Track: Sustain 2110, Advanced Category

![Screenshot (1256)](/assets/Screenshot_1256.png)
![Screenshot (1257)](/assets/Screenshot_1257.png)

## Description

Monitor your carbon footprint via an interactive, online dashboard that lets you track your behaviors and visualize the impact of greenhouse gas emissions on an animated low-poly globe.

## Features

Earth View: Visualize the potential impact of your carbon footprint on an animated, interactive globe.

History: Track your carbon footprint over time.

Breakdown: See what factors of your lifestyle are the most environmentally conscious.

Carbon Footprint: See how many metric tons of greenhouse gases are emitted per year as a result of your lifestyle.

Metrics: Input your behaviors via a set of prompts and data variables. Use the Echo chatbot to analyze your behaviors on a deeper level.

Entries: Add your own notes to log the changes you make as you improve your lifestyle.

## Technologies Used

- [Next.js 13](https://nextjs.org/docs/getting-started)
- [NextUI v2](https://nextui.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Tailwind Variants](https://tailwind-variants.org)
- [TypeScript](https://www.typescriptlang.org/)
- [Framer Motion](https://www.framer.com/motion/)
- [next-themes](https://github.com/pacocoursey/next-themes)
- [React](https://react.dev/)

## How to Use

### Install dependencies

```bash
npm install
```

### Run the development server

```bash
npm run dev
```

## Inspiration

Worldwide carbon dioxide emissions have increased by 35.59% in the last 20 years and show no signs of stopping. Carbon dioxide, along with many other greenhouse gases (GHGs) emitted through the burning of fossil fuels, poses a threat because of its role in climate change. Nonetheless, many everyday activities—from driving to eating meat to changing your home's temperature—indirectly cause GHG emissions, and a single person can be responsible for several metric tons of emissions each year.

## What it does

GreenJournal is an online dashboard that lets users input various GHG indicator metrics. Our calculator, based on research from the Environmental Protection Agency and other sources, estimates an individual's carbon footprint, measured in metric tons of GHG emissions per year. An interactive, animated model of the Earth acts as a visualizer for how each user is, often inadvertently, affecting the environment around them. A history log lets users track changes in their lifestyle to see how even the smallest changes can make a profound impact on the world, with an additional journal panel on the right for users to write their own customized notes. Finally, an embedded GPT-4 AI model, EchoAI, will provide users with feedback regarding lifestyle changes as they aim to reduce their carbon footprint.

## How we built it

Our website is built using React and Next.js. Our languages of choice are Typescript, HTML, and CSS; we also use the NextUI library, Tailwind CSS, and Framer Motion to add visual elements and smooth animations to our dashboard.

We used research from the EPA to determine the necessary data variables the user needs to input. It also informed the calculator logic behind estimating an individual's carbon footprint. Inputs are stored using local storage, meaning no backend is needed and a user can reference their data in the future without the need for creating an account.

We used the ChatGPT API along with customized prompts to build the EchoAI feature.

The centerpiece of our website is the interactive and continually updating Earth model displayed in the left upper panel. The low-poly model was designed in Blender, imported into spline, exported into Three.js, and then animated and integrated into our website using React Three Fiber. Variables supplied by the user and the resulting carbon footprint calculation affect the colors of the continents, clouds, and even the number of planes orbiting the globe.

## Challenges we ran into

One main challenge we ran into was the layout of our front end. We had to rebuild our main page using a CSS grid layout, experimenting with the dimensions, in order to create a structured, ordered dashboard.

Another challenge was rendering a dynamic model of the Earth. We composed the 3D design into multiple layers, enabling the clouds to float separately from the globe, the continents to change color separately from the water, the planes to fly around, etc. However, the challenging part was making sure our meshes refracted light correctly based on their geometry when displayed on our website depending on the material selection, as well as ensuring the animation was continuous rather than disjointed when the user inputted new values. In addition, it was time consuming to create the animations in raw React Three Fiber because of the complex animation paths we had planned and because our past experience only consisted of using Three.js.

We also ran into issues with maintaining consistent variables across the project for the data inputted by the user. We ended up using React Hooks to store the data with a check to see if any information was stored in local storage upon first loading the website.

## Accomplishments that we're proud of

We are proud of building a functioning website that is capable of inputting and processing many complex pieces of data. Given the time constraint, we are also proud of our front end's appearance in addition to its functionality. Finally, it was quite a feat to render a globe in Three.js but it proved to be much more engaging compared to a simple image or video.

## What we learned

We learned how to successfully execute a project, from brainstorming to deploying the final concept in just a couple of days. We also learned several new tools that we have not used before; notably, using Next UI allowed us to tinker with our visual UI elements and their animations much more easily than if we had used a more standard library such as Material UI.

## What's next for GreenJournal

We plan to further experiment with our AI tool to see how other variables we have not considered might impact one's carbon footprint. We would also like to expand our website to study other forms of environmental conservation besides reducing one's carbon footprint because there are many ways one can help the world around them. In the future, we also plan on implementing the Google Maps API to provide more sophisticated user data by measuring their driving patterns to estimate their carbon footprint.

## License

Licensed under the [MIT license](https://github.com/nextui-org/next-app-template/blob/main/LICENSE).

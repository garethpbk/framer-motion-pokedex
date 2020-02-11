1. useFetchPokemon

- show how hook works with delay

2. AllPokemon

- `import { motion } from 'framer-motion'`
- set initial, animate, and transition properties on `.pokedex-loading` div (wraps <Title> component) - make it a `motion.div` first
- add `variants` object (without delay) to use for pokecards, explain what variants are
- add function to visible property of variants, show how to use `i` to stagger animations with `delay` and the `custom` prop
- add `hover` to variants and `whileHover` to pokecards
- add `imageVariants` for image hover styles
- make img a `motion.img`
- add `imageVariants` to img tag, explain how children inherit `whileHover` actions

2. SinglePokemon

- `import { motion } from 'framer-motion'`
- delete inline style on `.stat-stat`, show what it looks like with 100% width, add `animate` prop
- add values to animate array: ['0%', `${getStatWidth(stat.base_stat)}`]
- show crash and error in console
- add percentage to second array value
- add `i` as second argument of map, add `transition` property with delay and duration
- set up `transition` const to use in variants
- add `buttonVariants` object with enter and exit properties for button animation (explain object property shorthand)
- try to add `motion` to <Link> component, show crash
- add wrapping motion div with buttonVariants
- add whileTap to sprite img with static hue-rotate deg value
- add random number function and use in whileTap on img, explain how it only renders once
- add `useState` so that it can render a new color on every hover with `onMouseOver`

3. React Router transitions

- add `routeVariants` to SinglePokemon
- add motion and variants to wrapping SinglePokemon div with initial, animate, exit
- remove initial, animate, exit from button
- copy transition into AllPokemon (mention how it could be in a config file and imported)
- add routeVariants to AllPokemon and attach to wrapper div
- mention how exit animations might not be working properly? idk

4. Boot animation - Title

- `import { motion } from 'framer-motion'`
- add wrapping motion div with class `boot-wrapper` and add that class to css
- add `bootVariants` object, add to wrapping div with initial and animate properties - use color keywords
- add transition property directly on wrapping div
- fix `pokedex-loading` delay in AllPokemon
- change color keywords to hex code - have to use hex or rgba

5. SVG letter animation

- add `letterVariants` object
- add stroke properties to `.title` css
- add motion to SVG (has to be a motion to wrap motion paths)
- add motion to first path with letterVariants and initial, animate
- add transition object to first path (explain how tried using an object with variants, didn't seem to work)
- add motion and initial, animate, transition to remaining paths
- change delay for remaining paths
- make sure delays in useFetchPokemon and AllPokemon are right (10s, 9s)

All done!

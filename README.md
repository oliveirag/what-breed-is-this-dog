![image info](./src/logo.svg)

Home assignment from @ridedott :)

**Responsive and on Heroku:**
https://what-breed-is-this-dog.herokuapp.com/

### Getting Started

Install dependencies with `yarn install`, then `yarn start`

To run tests `yarn test`

### TensorFlow Model

The model used in this app was trained on the dog.ceo image set, the recommended API to fetch the dog images, and that's precisely why I chose it. An image list of the guessed breed can always be rendered.  
It can be found on their repository:
https://github.com/dog-ceo/guess-that-dog

Disclaimer: this solution will always return a dog breed, what makes sense as this is the purpose of the app.

### Design Choices

#### Folder Structure

Components are in `src/components`, within its own folder with its styles hook.

The hooks used in the application root are in the `hooks` folder.
Where the hook made sense specifically to one component, it was left next to it, as with `<ImageUploader />` and `<SameBreedGallery />`

#### State

I chose custom hooks to solve all state sharing problems and hold logic pertinent to their scope.
Although I love Redux and Context a lot, both solutions weren't necessary.

#### CSS-In-JS (@material-ui/styles)

CSS-in-JS solution of Material UI deliver a better developer experience, make the style less prone to errors and easier to see the classes references.

#### LazyLoading

Is done natively with `loading="lazy"` attribute set on `img` element.
At first I used `react-lazyload` to a lazier loading, but as I implemented the infinite scroll, that already deliver the images in small chunks, it lost sense.

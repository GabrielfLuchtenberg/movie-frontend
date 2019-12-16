## Requirements

node 12+

## Instructions to run

1. Run `npm run start`

The app is up and running on localhost:3000 ! :D

## Architecture

I've split the application into four main folders.

1. The **components** contains the reusable components that have some kind of interaction.
2. The **pages** contain the composition of components to create the interface. Inside the pages, you're able to create another component folder, that has components that work on the context of that page.
3. **services** is responsible for maintaining specific logic as resources from API
4. **UI** has the reusable components that don't have interaction, just styles.

## Assumptions

It will be running on clients with edge, chrome or firefox.

## Third-party libs

1. [Bootstrap4](https://getbootstrap.com/ "Bootstrap4"): used to manage forms, grids and buttons styles;
2. [FontAwesome](https://fontawesome.com/ "FontAwesome"): used to add icons;
3. [axios](https://www.npmjs.com/package/axios "axios"): used to manage http requests;
4. [reactJS](https://reactjs.org/ "reactJS"): used to create all the project interface

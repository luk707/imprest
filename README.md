# imprest

React component library

![example button](./example.png)

TL;DR? Take a look at the [contributing](#contributing) section, and fire it up on your local machine.

## Project goals

This project aims to build a simple component library that can be dropped into any React project with ease. It will follow [atomic design](http://bradfrost.com/blog/post/atomic-web-design/) principles meaning the end user has the option to use pre built templates for login, sign - up, dashboards etc. and the low level components such buttons as form controls so the user can build custom experiences. Imprest will also make no assumptions about your applications and provide a view layer only (i.e. no redux or form libraries).

## Theming

In order to make Imprest an appealing choice amungst all the other component libraries. Imprest will look good out the box, and adapt to any brand of your choice. Since the theme is injected via context, you can share components across apps with different branding!

_Take a look at `src/styles` for mor information on how theming is configured_

## Contributing

I'd love for people to help get involved in this project and am open to help from people of all levels of experience in React.

To contribute please follow the following steps to get this project setup on your local computer:

1.  Clone the repository to your computer & use `yarn install` to get fetch the dependencies.
2.  Run `yarn dev` and navigate to [http://localhost:1234](http://localhost:1234) on your browser to see the development playground. Code for this website can be found in `docs/index.tsx`.
3.  Until I start publishing this project to npm, run `yarn link` in this repository & then `yarn link imprest` from within a project you wish to use this. Then you can use `import { Button } from 'imprest';` to access the library!

Any questions, HMU on twitter [@\_lukeharris](https://twitter.com/_lukeharris)

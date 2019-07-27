# Contributing

First off, thankyou for considering a contribution to Imprest. Contributions are always welcome in this project, especially at this early stage. This guide will help you get started and outline the projects goals & vision.

## How to file a bug report

So, you've found a bug? Please raise an issue using the [bug issue template](https://github.com/luk707/imprest/issues/new?assignees=&labels=bug&template=bug_report.md&title=) and please fill out all of the required fields (even if it may not always seem necassary) to aid the fix implementation.

Also, please check for duplicates before submitting a bug. If you do find a duplicate please comment on it, providing as much context as possible. This will be greatly appreciated as it will raise the visibility of the bug and provide a forum for it's discussion.

When an issue is raised it will go into the github projects bug board. This will allow a maintainer to initiate a forum between the bug's issuer, and determine what actions should be taken to fix it.

## How to suggest a new feature

Have an idea or a component you've written that you'd like to put forward to become part of the Imprest library? Please raise an issue using the [feature issue template](https://github.com/luk707/imprest/issues/new?assignees=&labels=enhancement&template=feature_request.md&title=). Please fill out all the required fields so that maintainers can collaborate with the feature's issuer in order to establish a shared vision.

When a feature is opened it will be moved to the [triage board](https://github.com/luk707/imprest/projects/3). This will allow a maintainer to flesh out the specification and get the component moved to the roadmap board and schedule it's implementation.

Since Imprest is only in it's infancy, features may already be in our roadmap. If the feature is already in our roadmap, but the specification doesn't meet your needs / requirements. Get in touch with one of the maintainers directly. This way a forum can be opened regarding proposed changes to the features specification before implementation begins.

## How to set up your environment and run tests

Developing Imprest requires you have [NodeJS](https://nodejs.org/en/) installed along with the [Yarn](https://yarnpkg.com/) package manager.

After cloning the project install it's dependencies by running `yarn install`.

To run the documentation site _which also serves as a good place to test your component_ run `yarn dev`. After a while your console will instruct you to navigate to a URL such as [http://localhost:1234](http://localhost:1234/). Opening this is in a browser will take you to your local version of the documentation for your site. If you make changes to the source code the documentation will automatically reload.

You can emit a static version of the documentation site ready for hosting by running `yarn docs`. The artifacts will be saved to the `dist` directory.

If you wish to build the final artifacts that would be published to NPM. Run `yarn build`. The build artifacts will be saved to the `lib` directory.

Any questions visit the [discord channel](https://discord.gg/GE4TKC5) or hmu via twitter [@_lukeharris](https://twitter.com/_lukeharris)

## Project goals

Imprest is laser focused on implementing a component library aimed at those who need a solid foundation of react components and view templates that scale with their projects' needs.

Imprest aims to achieve this goal by delivering a set of themable, reusable components following a rigid atomic design principle.

Atomic design allows Imprest to implement very specific views that are commonly used across many applications, as well as exposing it's foundational components so that users can implement their own more proprietory views.

In theory, Imprest should be able to replace the need for use of any host components (i.e. div's, span's, li's etc.). Leaving only the application layer (i.e. data fetching, state management etc.) to be implemented in entirity by it's users.

## Roadmap

After features are issued they will be automatically added to the [triage board](https://github.com/luk707/imprest/projects/3). Should a decision be made to move forward and begin it's implementation it will be moved to the backlog of the [MVP board](https://github.com/luk707/imprest/projects/1) or [post MVP board](https://github.com/luk707/imprest/projects/2). Given the infant state of the project, a roadmap cannot yet be defined in it's entirety. To provide some level of expectations, this board will grow with features considered as required for the minimum viable stable relase of Imprest.

At some point in time the contents of the [MVP board's](https://github.com/luk707/imprest/projects/1) backlog should become mature enough to freeze it's growth. At that point the contents of the [post MVP board](https://github.com/luk707/imprest/projects/2) will be triaged into two new boards; next minor release and next major release then either weekly or bi-weekly releases should be made to keep Imprest a project of high momentum.

## How to get in touch with maintainers

Join the [discord channel](https://discord.gg/GE4TKC5) to get in contact with people interested in the project & it's maintainers. Also feel free to contact [@\_lukeharris](https://twitter.com/_lukeharris) directly on twitter!

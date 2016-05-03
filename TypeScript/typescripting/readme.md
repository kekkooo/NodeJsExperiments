# My Node Js Experiments

I wanted to experiment with NodeJs and the MEAN stack
(but also with some other frameworks, such as React or BackBone).
I also wanted to learn Javascript and Typescript. 

### Folders
For now there is just the NodeSchool folder, since I started from there
(without no prior knowledge of Javascript or Typescript).
The folders Javascript and Typescript will contain my solutions to 
the NodeSchool tutorials given in the two languages.

### Prerequisites
You need to have installed Node.js and the various NodeSchool packages.
Up to now you will find jsut solutions for :
- javascripting (JS/TS)
- scopes-chains-closurs (JS)
- learnyounode (JS)

please refer to Nodeschool for instructions on how to install the tutorials.
Usually the syntax is the following
```
npm install -g <tutorial name>
```

For typescript you need to install the typescript compiler ( tsc )

### Running Typescript solutions
- Run the terminal (es. Powershell, Bash or OsX Terminal)
- launch the preferred tutorial ( es. javascripting )
- choose the excercise, then
```
tsc <solution>.ts | <tutorial-name> verify <solution>.js
```
e.g. for the excercise 16 : OBJECT PROPERTIES run
```
tsc object_properties.ts | javascripting verify object_properties.js
```
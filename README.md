# LICENCE

[![NPM](https://img.shields.io/npm/l/react)](https://github.com/fariaotavio12/Diretiva-Gsap/blob/main/LICENSE)

# Diretiva-Gsap
Diretiva Gsap

## Installation

You can install the directive via npm:

```bash
npm i gsap
npm i gsap_directive
```


## Importe

main.ts
```bash
import gsap_directive from gsap_directive';
app.use(gsap_directive);
```


## Usage

```bash
  <h1 v-gsap="{ 
      scrollTrigger: { 
        start: 'top center', 
        end: 'bottom center', 
        scrub: true ,
        markers: true,
      }, 
      animation: { 
        opacity: 1, 
        x: 100 
      }, 
      initialState: { 
        opacity: 1, 
        x: -100 
      } 
    }"
  
    >This is an about page </h1>

````

or 


```bash
  <h1 v-gsap="{ 
      animation: { 
        opacity: 1, 
        x: 100 
      }, 
      initialState: { 
        opacity: 1, 
        x: -100 
      } 
    }"
  
    >This is an about page </h1>

````

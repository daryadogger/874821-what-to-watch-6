import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';

const data = [
  {
    src: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
    name: `Fantastic Beasts: The Crimes of Grindelwald`,
    id: 1
  },

  {
    src: `img/bohemian-rhapsody.jpg`,
    name: `Bohemian Rhapsody`,
    id: 2
  },

  {
    src: `img/macbeth.jpg`,
    name: `Macbeth`,
    id: 3
  },

  {
    src: `img/aviator.jpg`,
    name: `Aviator`,
    id: 4
  },

  {
    src: `img/we-need-to-talk-about-kevin.jpg`,
    name: `We need to talk about Kevin`,
    id: 5
  },

  {
    src: `img/what-we-do-in-the-shadows.jpg`,
    name: `What We Do in the Shadows`,
    id: 6
  },

  {
    src: `img/revenant.jpg`,
    name: `Revenant`,
    id: 7
  },

  {
    src: `img/johnny-english.jpg`,
    name: `Johnny English`,
    id: 8
  },

  {
    src: `img/shutter-island.jpg`,
    name: `Shutter Island`,
    id: 9
  },

  {
    src: `img/pulp-fiction.jpg`,
    name: `Pulp Fiction`,
    id: 10
  },

  {
    src: `img/no-country-for-old-men.jpg`,
    name: `No Country for Old Men`,
    id: 11
  },

  {
    src: `img/snatch.jpg`,
    name: `Snatch`,
    id: 12
  },

  {
    src: `img/moonrise-kingdom.jpg`,
    name: `Moonrise Kingdom`,
    id: 13
  },

  {
    src: `img/seven-years-in-tibet.jpg`,
    name: `Seven Years in Tibet`,
    id: 14
  },

  {
    src: `img/midnight-special.jpg`,
    name: `Midnight Special`,
    id: 15
  },

  {
    src: `img/war-of-the-worlds.jpg`,
    name: `War of the Worlds`,
    id: 16
  },

  {
    src: `img/dardjeeling-limited.jpg`,
    name: `Dardjeeling Limited`,
    id: 17
  },

  {
    src: `img/orlando.jpg`,
    name: `Orlando`,
    id: 18
  },

  {
    src: `img/mindhunter.jpg`,
    name: `Mindhunter`,
    id: 19
  },

  {
    src: `img/midnight-special.jpg`,
    name: `Midnight Special`,
    id: 20
  },
];

const mainCard = {
  filmName: `The Grand Budapest Hotel`,
  genre: `Drama`,
  date: 2014,
  src: `img/the-grand-budapest-hotel-poster.jpg`
};

ReactDOM.render(
    <App
      cards={data} mainCard={mainCard}
    />,
    document.querySelector(`#root`)
);

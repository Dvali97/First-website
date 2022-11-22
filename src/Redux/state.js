import { rerenderEntireTree } from './../render';


let state = {
  filmsPage: {
    posts: [
      {
        url: "https://s3.vcdn.biz/static/f/5118752091/image.jpg/pt/r300x423x4",
        alt: "Fall",
        title: "Fall",
        genre: "2022, Thriller",
      },
      {
        url: "https://s9.vcdn.biz/static/f/5097381471/image.jpg/pt/r300x423x4",
        alt: "Code Name Banshee",
        title: "Code Name Banshee",
        genre: "2022, Action",
      },
      {
        url: "https://s6.vcdn.biz/static/f/5045555301/image.jpg/pt/r300x423x4",
        alt: "Elvis",
        title: "Elvis",
        genre: "2022, Drama",
      },
      {
        url: "https://s4.vcdn.biz/static/f/4218064681/image.jpg/pt/r300x423x4",
        alt: "The Desperate Riders",
        title: "The Desperate Riders",
        genre: "2022, Action",
      },
      {
        url: "https://s7.vcdn.biz/static/f/4241412331/image.jpg/pt/r300x423x4",
        alt: "Book of Love",
        title: "Book of Love",
        genre: "2022, Comedy",
      },
      {
        url: "https://s5.vcdn.biz/static/f/4481551031/image.jpg/pt/r300x423x4",
        alt: "Viennese Coffee",
        title: "Viennese Coffee",
        genre: "2022, Comedy",
      },
    ],
    postss: [
      {
        url: "https://s8.vcdn.biz/static/f/4038760871/image.jpg/pt/r300x423x4",
        alt: "Central Intelligence",
        title: "Central Intelligence",
        genre: "2016, Comedy",
      },
      {
        url: "https://s1.vcdn.biz/static/f/5002309441/image.jpg/pt/r300x423x4",
        alt: "Terror on the Prairie",
        title: "Terror on the Prairie",
        genre: "2022, Thriller",
      },
      {
        url: "https://s5.vcdn.biz/static/f/4682220701/image.jpg/pt/r300x423x4",
        alt: "Spider-Man",
        title: "Spider-Man",
        genre: "2017, Action",
      },
      {
        url: "https://s3.vcdn.biz/static/f/541511841/image.jpg/pt/r300x423x4",
        alt: "The Godfather",
        title: "The Godfather",
        genre: "1972, Crime",
      },
      {
        url: "https://s8.vcdn.biz/static/f/5016323141/image.jpg/pt/r300x423x4",
        alt: "Valhalla",
        title: "Valhalla",
        genre: "2020, Thriller",
      },
      {
        url: "https://s3.vcdn.biz/static/f/5125635471/image.jpg/pt/r300x423x4",
        alt: "Runaway Bride",
        title: "Runaway Bride",
        genre: "1999, Comedy",
      },
    ],
    postsss: [
      {
        url: "https://s3.vcdn.biz/static/f/5118752091/image.jpg/pt/r300x423x4",
        alt: "Fall",
        title: "Fall",
        genre: "2022, Thriller",
      },
      {
        url: "https://s9.vcdn.biz/static/f/5097381471/image.jpg/pt/r300x423x4",
        alt: "Code Name Banshee",
        title: "Code Name Banshee",
        genre: "2022, Action",
      },
      {
        url: "https://s6.vcdn.biz/static/f/5045555301/image.jpg/pt/r300x423x4",
        alt: "Elvis",
        title: "Elvis",
        genre: "2022, Drama",
      },
      {
        url: "https://s4.vcdn.biz/static/f/4218064681/image.jpg/pt/r300x423x4",
        alt: "The Desperate Riders",
        title: "The Desperate Riders",
        genre: "2022, Action",
      },
      {
        url: "https://s7.vcdn.biz/static/f/4241412331/image.jpg/pt/r300x423x4",
        alt: "Book of Love",
        title: "Book of Love",
        genre: "2022, Comedy",
      },
      {
        url: "https://s5.vcdn.biz/static/f/4481551031/image.jpg/pt/r300x423x4",
        alt: "Viennese Coffee",
        title: "Viennese Coffee",
        genre: "2022, Comedy",
      },
    ],
  },
  multfilms: {
    multfilm: [
      {
        age: "25",
        name: "Dito",
        surname: "Dvali",
        city: "Tbilisi",
      },
    ],
  },
};

export let addPost = (urL, alT, titlE, genrE) => {

  let newPost = {
    url: urL,
    alt: alT,
    title: titlE,
    genre: genrE,
  }

  state.filmsPage.posts.push(newPost);
  rerenderEntireTree(state);
}


export default state;

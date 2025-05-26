type MeetTheTeamCardType = 'team' | 'quote' | 'image';

export interface FellowCard {
  color: string;
  type: MeetTheTeamCardType;
  team?: string;
  quote?: string;
  quoteName?: string;
  image?: string;
  wide?: boolean;
  shortenQuote?: string;
}

// Row 1, Columns 1-12
const cards: FellowCard[] = [

  //Old testimonials, need to keep at least 2 in order for carousel to work (5 elements min...., may ask IC for other testomonials)

  { color: 'blue', type: 'image', image: 'cara.jpg' },
  { color: 'blue', type: 'quote',
    quote: 'I remember going into the summer before freshman year with almost no web development experience and ended the summer having created my own personal website that I still use today. I absolutely loved the program and meeting other incoming freshmen going into computer science, everyone was super welcoming and we bonded a lot even though meetings were online.', 
    quoteName: 'Cara Murphy',
    shortenQuote: 'Everyone was super welcoming and we bonded a lot even though meetings were online.'},

  { color: 'pink', type: 'image', image: 'michelle.jpg' },
  { color: 'pink', type: 'quote',
    quote: 'Being a fellow at Technica introduced me to so many things, not just computer science; I was able to meet great people, learn about web development, and grow professionally. Having little to no experience beforehand, the Technica community supported me every step of the way and I really enjoyed my time in this program!', 
    quoteName: 'Michelle Yu',
    shortenQuote: 'I was able to meet great people, learn about web development, and grow professionally.'},

  // Newly added testimonials

     { color: 'blue', type: 'image', image: 'christiana.jpg' },
    { color: 'blue', type: 'quote',
    quote: `My experience as a Technica Fellow was both challenging and transformative. The projects we worked on, including working with APIs (something I hadn’t done before), pushed me to step outside my comfort zone and develop new technical skills. The supportive environment was invaluable — the directors and other fellows made it easy to feel comfortable and confident. I especially loved the bonding sessions, which helped me build lasting connections. I'm still very close with many of the fellows and even a couple of the directors who led those sessions! This experience not only helped me grow my coding skills but also made me more confident in my abilities as a developer.`, 
    quoteName: 'Christiana Alapa',
    shortenQuote: 'This experience not only helped me grow my coding skills but also made me more confident in my abilities as a developer.'},

  { color: 'pink', type: 'image', image: 'eniola.jpg' },
  { color: 'pink', type: 'quote',
    quote: `My experience as a Fellow with Technica was amazing! It helped me develop a community of friends in tech before I started school which was very helpful. The skills and friends I've made through the program has been very beneficial to me starting out as a freshman.`, 
    quoteName: 'Eniola Aloba',
    shortenQuote: `The skills and friends I've made through the program has been very beneficial to me starting out as a freshman.`},

  { color: 'purple', type: 'image', image: 'anagha.jpg' },
  { color: 'purple', type: 'quote',
    quote: `I'm really glad I applied to the Fellowship the summer before my freshman year at UMD. Beyond all of the technical skills I gained through the collaborative project, I really enjoyed getting to know the other fellows and the organizers. The Fellowship introduced me to a community of individuals with similar interests and backgrounds to me, and I'm still close with many of the friends I made during that time! The professional development workshops were also very helpful for tips like networking and resume-building, which helped me land my internship this summer!`, 
    quoteName: 'Anagha Bhuvanagiri',
    shortenQuote: 'The professional development workshops were also very helpful for tips like networking and resume-building, which helped me land my internship this summer!'},

  // { color: 'purple', type: 'image', image: 'erin.jpg' },
  // { color: 'purple', type: 'quote',
  //   quote: 'For me, the fellowship was the perfect stepping stone into tech internships and research because of how welcoming and inclusive the Technica community is. I loved meeting so many other talented women in technology!', 
  //   quoteName: 'Erin Hopper',
  //   shortenQuote: 'For me, the fellowship was the perfect stepping stone into tech internships and research.'},

  // { color: 'blue', type: 'image', image: 'sarai.jpg' },
  // { color: 'blue', type: 'quote',
  //   quote: 'I highly highly recommend the Technica fellowship! Everyone is very inclusive and supportive. As someone who was a little rusty on their web development skills, this fellowship definitely helped me become more confident in coding. Whether or not you have coding experience your needs are always catered to.', 
  //   quoteName: 'Sarai Lazo-Salvador',
  //   shortenQuote: 'Everyone is very inclusive and supportive. Whether or not you have coding experience your needs are always catered to.'},

  // { color: 'pink', type: 'image', image: 'rebecca.jpg' },
  // { color: 'pink', type: 'quote',
  //   quote: "Being a part of the Technica Fellowship Program allowed me to grow as a computer scientist and take initiative to learn new skills. I loved the community of people I was able to work/learn from and I'm excited to continue pursuing my CS journey!", 
  //   quoteName: 'Rebecca Wu',
  //   shortenQuote: 'Being a part of the Technica Fellowship Program allowed me to grow as a computer scientist and take initiative to learn new skills.'},

];

export const FellowCards: FellowCard[] = [ ...cards];


/*

{ color: 'blue', type: 'image', image: 'christiana.jpg' },
  { color: 'blue', type: 'quote',
    quote: `My experience as a Technica Fellow was both challenging and transformative. The projects we worked on, including working with APIs (something I hadn’t done before), pushed me to step outside my comfort zone and develop new technical skills. The supportive environment was invaluable — the directors and other fellows made it easy to feel comfortable and confident. I especially loved the bonding sessions, which helped me build lasting connections. I'm still very close with many of the fellows and even a couple of the directors who led those sessions! This experience not only helped me grow my coding skills but also made me more confident in my abilities as a developer.`, 
    quoteName: 'Christiana Alapa',
    shortenQuote: 'This experience not only helped me grow my coding skills but also made me more confident in my abilities as a developer.'},

  { color: 'pink', type: 'image', image: 'eniola.jpg' },
  { color: 'pink', type: 'quote',
    quote: `My experience as a Fellow with Technica was amazing! It helped me develop a community of friends in tech before I started school which was very helpful. The skills and friends I've made through the program has been very beneficial to me starting out as a freshman.`, 
    quoteName: 'Eniola Aloba',
    shortenQuote: `The skills and friends I've made through the program has been very beneficial to me starting out as a freshman.`},

  { color: 'purple', type: 'image', image: 'anagha.jpg' },
  { color: 'purple', type: 'quote',
    quote: `I'm really glad I applied to the Fellowship the summer before my freshman year at UMD. Beyond all of the technical skills I gained through the collaborative project, I really enjoyed getting to know the other fellows and the organizers. The Fellowship introduced me to a community of individuals with similar interests and backgrounds to me, and I'm still close with many of the friends I made during that time! The professional development workshops were also very helpful for tips like networking and resume-building, which helped me land my internship this summer!`, 
    quoteName: 'Anagha Bhuvanagiri',
    shortenQuote: 'The professional development workshops were also very helpful for tips like networking and resume-building, which helped me land my internship this summer!'},

*/
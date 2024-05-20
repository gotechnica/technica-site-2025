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

  { color: 'purple', type: 'image', image: 'erin.jpg' },
  { color: 'purple', type: 'quote',
    quote: 'For me, the fellowship was the perfect stepping stone into tech internships and research because of how welcoming and inclusive the Technica community is. I loved meeting so many other talented women in technology!', 
    quoteName: 'Erin Hopper',
    shortenQuote: 'For me, the fellowship was the perfect stepping stone into tech internships and research.'},

  { color: 'blue', type: 'image', image: 'sarai.jpg' },
  { color: 'blue', type: 'quote',
    quote: 'I highly highly recommend the Technica fellowship! Everyone is very inclusive and supportive. As someone who was a little rusty on their web development skills, this fellowship definitely helped me become more confident in coding. Whether or not you have coding experience your needs are always catered to.', 
    quoteName: 'Sarai Lazo-Salvador',
    shortenQuote: 'Everyone is very inclusive and supportive. Whether or not you have coding experience your needs are always catered to.'},

  { color: 'pink', type: 'image', image: 'rebecca.jpg' },
  { color: 'pink', type: 'quote',
    quote: "Being a part of the Technica Fellowship Program allowed me to grow as a computer scientist and take initiative to learn new skills. I loved the community of people I was able to work/learn from and I'm excited to continue pursuing my CS journey!", 
    quoteName: 'Rebecca Wu',
    shortenQuote: 'Being a part of the Technica Fellowship Program allowed me to grow as a computer scientist and take initiative to learn new skills.'},

];

export const FellowCards: FellowCard[] = [ ...cards];

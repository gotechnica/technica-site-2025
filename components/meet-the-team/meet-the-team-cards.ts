type MeetTheTeamCardType = 'team' | 'quote' | 'image';

export interface MeetTheTeamCard {
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
const cards1: MeetTheTeamCard[] = [
  { color: 'blue', type: 'team', team: 'BRAND' },
  { color: 'blue', type: 'image', image: 'design.png' },
  {
    color: 'blue',
    type: 'quote',
    quote:
      "Technica is a place to improve oneself. Not alone, but in a comfortable, supportive environment. Seeing all of the skills that underrepresented individuals develop strikes empowerment through our community, shows that boundaries are meant to be broken, goals are meant to be achieved, and glass ceilings are meant to be shattered. Nowhere else in the world can this better be done than at Technica, and I can't say I don't love the smiles of the hackers we host.",
    quoteName: 'Charlie Lin',
    shortenQuote: "Technica is a place to improve oneself. Not alone, but in a comfortable, supportive environment."
  },
  { color: 'purple', type: 'image', image: 'brand.jpg', wide: true },
  {
    color: 'purple',
    type: 'quote',
    quote: "Joining Technica was one of the best decisions I made in college! Not only did I find a supportive community of underrepresented genders in technology and a vast world of growth and opportunities, I've also met so many passionate and inspiring people that I look up to as role models to this day. I am always in awe at how creative, talented, and hard working the people around me are, and I am so excited to see how we come together for another magical weekend this season! Techni-fam forever",
    quoteName: 'Joy Wang',
    shortenQuote: "Joining Technica was one of the best decisions I made in college!"
  },
  { color: 'pink', type: 'team', team: 'DESIGN' },
  { color: 'pink', type: 'image', image: 'vertical.jpg' },
  {
    color: 'pink',
    type: 'quote',
    quote:
      'Technica has given me so many opportunities to grow as a person. The community here is so supportive and welcoming that it made navigating into the tech field less daunting! Seeing all the hard work people put into both creating this event and working on projects weekend-of is inspiring and by far my favorite part!',
    quoteName: 'Roshida Herelle',
    shortenQuote: "Technica has given me so many opportunities to grow as a person."
  },
  { color: 'cream', type: 'image', image: 'design-wide.png', wide: true },
  { color: 'blue', type: 'team', team: 'EVENTS' },
];

// Row 1, Columns 13-24
const cards2: MeetTheTeamCard[] = [
  { color: 'blue', type: 'image', image: 'vertical2.jpg' },
  {
    color: 'blue',
    type: 'quote',
    quote:
      'The best part of being an organizer is the new family you get to be a part of. everyone here is so welcoming, and you make so many core memories throughout the year. it’s also amazing seeing your team’s work and other teams’ work come to fruition the day of the event.',
    quoteName: 'Pramati Kandyala',
    shortenQuote: "The best part of being an organizer is the new family you get to be a part of."
  },
  { color: 'purple', type: 'image', image: 'events.jpg', wide: true },
  {
    color: 'pink',
    type: 'team',
    team: 'OPERATIONS',
  },
  { color: 'pink', type: 'image', image: 'vertical3.jpg' },
  {
    color: 'pink',
    type: 'quote',
    quote:
      'Technica is the coolest! No matter who I connect with, I feel welcomed and supported in my ambitions. And being able to give back and make others feel the way I do is what draws me in even more',
    quoteName: 'Kaylee Kim',
    shortenQuote: "Technica is the coolest! No matter who I connect with, I feel welcomed and supported in my ambitions."
  },
  { color: 'cream', type: 'image', image: 'ops.jpg', wide: true },
  { color: 'purple', type: 'team', team: 'SPONSORSHIP' },
  { color: 'blue', type: 'image', image: 'sponsor.jpg', wide: true },
];

// Row 2, Columns 2-12
const cards3: MeetTheTeamCard[] = [
  {
    color: 'cream',
    type: 'quote',
    quote: "I would say that the most rewarding experience being an organizer is checking out everyone's project during the day of the event. Seeing how people are able to come up with such unique ideas and are able to execute a well-made prototypes in such a short amount of type, especially since many came in with little experience, is just so cool to see.",
    quoteName: 'Kaiwen Song',
    shortenQuote: "The most rewarding experience being an organizer is checking out everyone's awesome projects"
  },
  { color: 'pink', type: 'team', team: 'COMMUNITY' },
  { color: 'pink', type: 'image', image: 'vertical4.jpg' },
  {
    color: 'pink',
    type: 'quote',
    quote:
      "Technica has allowed me to meet some of my favorite people, from insanely talented opening speakers to organizers who plan every single detail to make the event such an inclusive space, and recruiters who are incredibly passionate about diversifying STEM! By meeting new people and getting to learn about their experiences in tech and their backgrounds, I've been able to expand my perspectives and career goals, being able to learn about so many different fields and intersections of tech.",
    quoteName: 'Eesha Kaul',
    shortenQuote: "Technica has allowed me to meet some of my favorite people"
  },
  { color: 'blue', type: 'image', image: 'community.jpg', wide: true },
  {
    color: 'blue',
    type: 'quote',
    quote: "My favorite part of being an organizer is seeing how passionate so many people are for having more underrepresented genders in tech, whether that's the other organizers, or the companies sponsoring themselves! Also seeing the number of attendees grow each year makes me excited to see the future of underrepsented genders in tech, and makes me more confident in my career path.",
    quoteName: 'Annaika Taneja',
    shortenQuote: "Seeing the number of attendees grow each year makes me excited to see the future of underrepsented genders in tech."
  },
  { color: 'purple', type: 'team', team: 'D&I' },
  { color: 'purple', type: 'image', image: 'd&i.jpg' },
  {
    color: 'purple',
    type: 'quote',
    quote:
      "My favorite part of being an organizer is seeing how passionate so many people are for having more underrepresented genders in tech, whether that's the other organizers, or the companies sponsoring themselves! Also seeing the number of attendees grow each year makes me excited to see the future of underrepsented genders in tech, and makes me more confident in my career path.",
    quoteName: 'Joan Ojukwu',
    shortenQuote:  "I feel like I’m giving them something I know they deserve because we all deserve something like Technica too."
  },
  { color: 'cream', type: 'image', image: 'vertical5.jpg' },
];

// Row 2, Columns 13-24,1
const cards4: MeetTheTeamCard[] = [
  { color: 'cream', type: 'team', team: 'Experience' },
  { color: 'cream', type: 'image', image: 'vertical6.jpg' },
  {
    color: 'cream',
    type: 'quote',
    quote:
      'After being apart of technica, I finally found a place where I can be myself and live in the moment! Everyone I have met makes me do better and want to be better not only as a organizer, but also as a friend, sibling, and person. From this positive environment, I have gained some life-long friends and memories!',
    quoteName: 'Claire Knorr',
    shortenQuote:  "I finally found a place where I can be myself and live in the moment!"
  },
  { color: 'cream', type: 'image', image: 'experience.jpg', wide: true },
  { color: 'purple', type: 'team', team: 'OUTREACH' },
  { color: 'purple', type: 'image', image: 'vertical7.jpg' },
  {
    color: 'purple',
    type: 'quote',
    quote:
      'When I first attended Technica as a hacker during my freshman year, it helped me gain confidence in my technical abilities and was a welcoming community where the tech field didn’t seem as intimidating as it used to be. My positive experience inspired me to become an Outreach organizer and now director, where my team and I get to give back and help people discover a passion for technology in a supportive environment.',
    quoteName: 'Mary Redpath',
    shortenQuote: "Technica has allowed me to meet some of my favorite people"
  },
  { color: 'cream', type: 'image', image: 'outreach.jpg', wide: true },
  { color: 'purple', type: 'team', team: 'TECH' },
  { color: 'purple', type: 'image', image: 'tech.jpg', wide: true },
];

export const cardsDesktop1: MeetTheTeamCard[] = [...cards2, ...cards1];
export const cardsDesktop2: MeetTheTeamCard[] = [...cards4, ...cards3];
export const cardsMobile: MeetTheTeamCard[] = [
  ...cards4,
  ...cards1,
  ...cards2,
  ...cards3,
];

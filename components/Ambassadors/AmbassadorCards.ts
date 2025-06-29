// components/Ambassadors/AmbassadorCards.ts
export type AmbassadorCardType = 'quote' | 'image';

export interface AmbassadorCard {
  color: string;
  type: AmbassadorCardType;
  quote?: string;
  quoteName?: string;
  image?: string;
  wide?: boolean;
  shortenQuote?: string;
  imageAlt?: string;
}

export const AmbassadorCards: AmbassadorCard[] = [
  {
    color: 'blue',
    type: 'image',
    image: 'annie-nguyen.jpg',
    imageAlt: 'Annie Nguyen Headshot'
  },
  {
    color: 'blue',
    type: 'quote',
    quote: `Being a campus ambassador played a huge role in shaping who I am today. It helped me grow into my current role as a Technica campus ambassador, and deepened my passion for making tech more inclusive and accessible. It opened doors and meaningful connections. What you gain from the role reflects the energy you put into it. Being a campus ambassador was flexible and easy to fit into my schedule, but because of the supportive community and my passion for Technica, I found the experience incredibly rewarding. It sparked my desire to take on a bigger role and I found myself joining other orgs on campus that shared my passion. Eventually, I joined Technica as an organizer to make a bigger impact. :)`,
    shortenQuote: 'Being a campus ambassador sparked my desire to take on a bigger role in making tech inclusive.',
    quoteName: 'Annie Nguyen'
  }
];

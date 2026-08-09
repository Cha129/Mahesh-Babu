import { FilmEntry, IndustryHit, AwardMilestone, GalleryItem, FanWish } from '../types';
import tridentHero from '../assets/trident-hero.png';
import foundationCampaign from '../assets/foundation-campaign.png';
import khalejaPoster from '../assets/posters/khaleja.jpg';
import dookuduPoster from '../assets/posters/dookudu.jpg';
import srimanthuduPoster from '../assets/posters/srimanthudu.jpg';
import pokiriPoster from '../assets/posters/pokiri.jpg';
import athaduPoster from '../assets/posters/athadu.jpg';
import businessmanPoster from '../assets/posters/businessman.png';
import maharshiPoster from '../assets/posters/maharshi.png';
import bharatPoster from '../assets/posters/bharat_ane_nenu.png';
import nenokkadinePoster from '../assets/posters/nenokkadine.jpg';
import okkaduPoster from '../assets/posters/okkadu.png';
import varanasiPoster from '../assets/posters/varanasi.png';
import familyPoster from '../assets/posters/family.png';

export const FILMOGRAPHY_DATA: FilmEntry[] = [
  {
    year: 1979,
    title: 'Needa',
    roleNote: 'Child artist debut at age 4',
    isPre2015: true,
    tag: 'Debut',
    description: 'Marked Mahesh Babu’s first screen appearance as a child artist under director Dasari Narayana Rao.'
  },
  {
    year: 1990,
    title: 'Balachandrudu',
    roleNote: 'Lead child role',
    isPre2015: true,
    tag: 'Child Lead',
    description: 'Showcased remarkable acting poise as a young lead alongside his father, veteran actor Krishna.'
  },
  {
    year: 1999,
    title: 'Rajakumarudu',
    roleNote: 'Adult lead debut; Nandi Award for Best Male Debut',
    isPre2015: true,
    highlight: true,
    tag: 'Adult Debut',
    description: 'An explosive debut that announced the arrival of a major new star, winning him his first Nandi Award.'
  },
  {
    year: 2001,
    title: 'Murari',
    roleNote: 'Breakthrough role',
    isPre2015: true,
    highlight: true,
    tag: 'Breakthrough',
    description: 'A masterpiece directed by Krishna Vamsi that earned widespread acclaim for Mahesh’s emotive versatility.'
  },
  {
    year: 2002,
    title: 'Takkari Donga',
    roleNote: 'Western-genre action film',
    isPre2015: true,
    tag: 'Action',
    description: 'A stylish cowboy western adventure showcasing high-octane stunts and iconic screen presence.'
  },
  {
    year: 2003,
    title: 'Okkadu',
    roleNote: 'Major commercial success',
    isPre2015: true,
    highlight: true,
    tag: 'Blockbuster',
    description: 'A monumental hit directed by Gunasekhar that redefined action-drama and set massive box-office benchmarks.'
  },
  {
    year: 2003,
    title: 'Nijam',
    roleNote: 'Critically acclaimed performance',
    isPre2015: true,
    tag: 'Critique Favorite',
    description: 'An intense revenge drama directed by Teja that won Mahesh Babu his first Nandi Award for Best Actor.'
  },
  {
    year: 2004,
    title: 'Arjun',
    roleNote: 'Family action drama',
    isPre2015: true,
    tag: 'Drama',
    description: 'Celebrated for its grand brother-sister emotion and iconic Madurai Meenakshi Temple set piece.'
  },
  {
    year: 2005,
    title: 'Athadu',
    roleNote: 'Critically and commercially acclaimed',
    isPre2015: true,
    highlight: true,
    tag: 'Cult Classic',
    description: 'Trivikram Srinivas’s polished thriller that became one of the most loved and repeatedly watched films in Telugu television history.'
  },
  {
    year: 2006,
    title: 'Pokiri',
    roleNote: 'Career-defining blockbuster',
    isPre2015: true,
    highlight: true,
    tag: 'Industry Hit',
    description: 'Puri Jagannadh’s explosive action thriller that shattered all existing Telugu box-office records and cemented Mahesh’s Superstar status.'
  },
  {
    year: 2006,
    title: 'Sainikudu',
    roleNote: 'Action drama',
    isPre2015: true,
    tag: 'Action',
    description: 'A socially driven story highlighting youth leadership and political accountability.'
  },
  {
    year: 2007,
    title: 'Athidhi',
    roleNote: 'High-octane action thriller',
    isPre2015: true,
    tag: 'Action',
    description: 'A sleek thriller highlighting intense fight choreography and stylistic visual direction.'
  },
  {
    year: 2010,
    title: 'Khaleja',
    roleNote: 'Cult favorite among fans',
    isPre2015: true,
    highlight: true,
    tag: 'Cult Favorite',
    description: 'A unique fantasy action-comedy directed by Trivikram Srinivas that gained massive legendary status among cinema lovers.'
  },
  {
    year: 2011,
    title: 'Dookudu',
    roleNote: 'Record-breaking blockbuster',
    isPre2015: true,
    highlight: true,
    tag: 'Record Breaker',
    description: 'Srinu Vaitla’s action comedy that became a global box-office sensation and popularized iconic mass dialogues.'
  },
  {
    year: 2012,
    title: 'Businessman',
    roleNote: 'Intense crime-action hit',
    isPre2015: true,
    highlight: true,
    tag: 'Mass Hit',
    description: 'Puri Jagannadh’s fast-paced crime saga featuring Mahesh’s unmatched intensity and sharp dialogue delivery.'
  },
  {
    year: 2013,
    title: 'Seethamma Vakitlo Sirimalle Chettu',
    roleNote: 'Multi-starrer family entertainer',
    isPre2015: true,
    tag: 'Multi-Starrer',
    description: 'Revived the multi-starrer tradition in modern Telugu cinema, delivering a heartwarming family narrative.'
  },
  {
    year: 2014,
    title: 'Aagadu',
    roleNote: 'Action comedy',
    isPre2015: true,
    tag: 'Action Comedy',
    description: 'Reunited Mahesh Babu with director Srinu Vaitla in a punchy police-centric entertainer.'
  },
  {
    year: 2015,
    title: 'Srimanthudu',
    roleNote: 'Acclaimed for social theme',
    isPre2015: false,
    highlight: true,
    tag: 'Social Impact',
    description: 'A soul-stirring story about adopting rural villages that inspired real-world philanthropic movements across India.'
  },
  {
    year: 2016,
    title: 'Brahmotsavam',
    roleNote: 'Family drama',
    isPre2015: false,
    tag: 'Family',
    description: 'A multi-star visual celebration emphasizing lineage, relationships, and human connections.'
  },
  {
    year: 2017,
    title: 'Spyder',
    roleNote: 'Bilingual spy thriller',
    isPre2015: false,
    tag: 'Thriller',
    description: 'AR Murugadoss’s sleek intelligence thriller marking a major cross-industry venture.'
  },
  {
    year: 2018,
    title: 'Bharat Ane Nenu',
    roleNote: 'One of his most critically praised roles',
    isPre2015: false,
    highlight: true,
    tag: 'Critical Praise',
    description: 'Koratala Siva’s political masterpiece where Mahesh portrayed a dignified, visionary young Chief Minister.'
  },
  {
    year: 2019,
    title: 'Maharshi',
    roleNote: 'National Award-winning drama',
    isPre2015: false,
    highlight: true,
    tag: 'National Award Winner',
    description: 'Vamshi Paidipally’s tale of friendship and agricultural upliftment that won two National Film Awards.'
  },
  {
    year: 2020,
    title: 'Sarileru Neekevvaru',
    roleNote: 'Sankranti blockbuster',
    isPre2015: false,
    highlight: true,
    tag: 'Sankranti Winner',
    description: 'An energetic army officer avatar directed by Anil Ravipudi that dominated the festive box office.'
  },
  {
    year: 2022,
    title: 'Sarkaru Vaari Paata',
    roleNote: 'Commercial success',
    isPre2015: false,
    tag: 'Mass Entertainer',
    description: 'Parasuram’s high-energy action drama tackling financial accountability with signature charm.'
  },
  {
    year: 2022,
    title: 'Major',
    roleNote: 'Producer / Biopic',
    isPre2015: false,
    tag: 'Producer Venture',
    description: 'Produced under GMB Entertainment, honoring 26/11 hero Major Sandeep Unnikrishnan to national acclaim.'
  },
  {
    year: 2024,
    title: 'Guntur Kaaram',
    roleNote: 'High-octane mass spectacle',
    isPre2015: false,
    highlight: true,
    tag: '25-Year Celebration',
    description: 'Trivikram’s reunion project highlighting Mahesh’s vintage energetic dialogue and magnetic screen presence.'
  },
  {
    year: 2027,
    title: 'Varanasi',
    roleNote: 'Upcoming globe-trotting action spectacle directed by S.S. Rajamouli',
    isPre2015: false,
    highlight: true,
    tag: 'Most Anticipated',
    description: 'An epic international adventure collaboration with maestro S.S. Rajamouli set to captivate global audiences.'
  }
];

export const INDUSTRY_HITS: IndustryHit[] = [
  {
    title: 'Pokiri',
    year: 2006,
    significance: 'Became the highest-grossing Telugu film of its time, widely credited with cementing his "Superstar" status.',
    badge: 'Industry Benchmark'
  },
  {
    title: 'Dookudu',
    year: 2011,
    significance: 'A box-office juggernaut; popularized the "Mass" persona and a widely quoted catchphrase across Andhra Pradesh and Telangana.',
    badge: 'Global Sensation'
  },
  {
    title: 'Businessman',
    year: 2012,
    significance: 'Reinforced his unstoppable run of commercial hits in the early 2010s with razor-sharp dialogue delivery.',
    badge: 'Opening Record'
  },
  {
    title: 'Srimanthudu',
    year: 2015,
    significance: 'Blended star power with a socially conscious storyline; among his most acclaimed and influential films.',
    badge: 'Social Catalyst'
  },
  {
    title: 'Bharat Ane Nenu',
    year: 2018,
    significance: 'A political drama praised for a more restrained, mature performance that won applause across India.',
    badge: 'Critical Benchmark'
  },
  {
    title: 'Sarkaru Vaari Paata',
    year: 2022,
    significance: 'Continued his commercial dominance post-pandemic with energetic dance numbers and mass appeal.',
    badge: 'Post-Pandemic Hit'
  },
  {
    title: 'Guntur Kaaram',
    year: 2024,
    significance: 'Proof of sustained box-office pull 25 years into his illustrious career as an adult lead actor.',
    badge: '25-Year Milestone'
  }
];

export const AWARDS_DATA: AwardMilestone[] = [
  {
    title: '9 Nandi Awards',
    subtitle: 'Andhra Pradesh state film honors for extraordinary artistic achievement',
    category: 'award',
    iconName: 'Award'
  },
  {
    title: '5 Filmfare Awards South',
    subtitle: 'Best Actor accolades for career-defining performances',
    category: 'award',
    iconName: 'Trophy'
  },
  {
    title: '4 SIIMA Awards',
    subtitle: 'South Indian International Movie Awards recognition for best actor',
    category: 'award',
    iconName: 'Star'
  },
  {
    title: 'Multiple Nominations',
    subtitle: 'Consistent critical recognition across Filmfare, SIIMA & regional awards',
    category: 'honor',
    iconName: 'Crown'
  },
  {
    title: 'Nandi Best Male Debut (1999)',
    subtitle: 'Honored for Rajakumarudu, launching a historic leading career',
    category: 'award',
    iconName: 'Sparkles'
  },
  {
    title: 'Vogue India Style Icon',
    subtitle: 'Recognized by Vogue and national outlets as a defining superstar figure',
    category: 'honor',
    iconName: 'Flame'
  },
  {
    title: '25+ Years Legacy',
    subtitle: 'Over a quarter century as a revered cinema icon',
    category: 'legacy',
    iconName: 'Medal'
  },
  {
    title: '28+ Feature Films',
    subtitle: 'Steadfast commitment to quality stories and visionary producers',
    category: 'legacy',
    iconName: 'Film'
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'varanasi-trident',
    title: 'SSMB29 / Varanasi Avatar',
    subtitle: 'Direction by S.S. Rajamouli - Intense Globe-Trotting Hero',
    year: 'Upcoming 2027',
    src: tridentHero,
    category: 'Upcoming'
  },
  {
    id: 'khaleja',
    title: 'Khaleja',
    subtitle: 'Cult Comedy Action',
    year: '2010',
    src: khalejaPoster,
    category: 'Poster'
  },
  {
    id: 'dookudu',
    title: 'Dookudu',
    subtitle: 'Record-Breaking Blockbuster',
    year: '2011',
    src: dookuduPoster,
    category: 'Poster'
  },
  {
    id: 'srimanthudu',
    title: 'Srimanthudu',
    subtitle: 'Social Drama Classic',
    year: '2015',
    src: srimanthuduPoster,
    category: 'Poster'
  },
  {
    id: 'pokiri',
    title: 'Pokiri',
    subtitle: 'Industry-Defining Hit',
    year: '2006',
    src: pokiriPoster,
    category: 'Poster'
  },
  {
    id: 'athadu',
    title: 'Athadu',
    subtitle: 'Timeless Thriller',
    year: '2005',
    src: athaduPoster,
    category: 'Poster'
  },
  {
    id: 'businessman',
    title: 'Businessman',
    subtitle: 'Crime Drama Spectacle',
    year: '2012',
    src: businessmanPoster,
    category: 'Poster'
  },
  {
    id: 'maharshi',
    title: 'Maharshi',
    subtitle: 'National Award-Winning Drama',
    year: '2019',
    src: maharshiPoster,
    category: 'Poster'
  },
  {
    id: 'bharat',
    title: 'Bharat Ane Nenu',
    subtitle: 'Political Masterpiece',
    year: '2018',
    src: bharatPoster,
    category: 'Poster'
  },
  {
    id: 'nenokkadine',
    title: '1: Nenokkadine',
    subtitle: 'Psychological Action Thriller',
    year: '2014',
    src: nenokkadinePoster,
    category: 'Poster'
  },
  {
    id: 'okkadu',
    title: 'Okkadu',
    subtitle: 'Commercial Landmark',
    year: '2003',
    src: okkaduPoster,
    category: 'Poster'
  },
  {
    id: 'varanasi',
    title: 'Varanasi',
    subtitle: 'Directed by S.S. Rajamouli',
    year: 'Upcoming 2027',
    src: varanasiPoster,
    category: 'Upcoming'
  },
  {
    id: 'family',
    title: 'Ghattamaneni Legacy',
    subtitle: 'Family & Roots',
    year: 'Roots',
    src: familyPoster,
    category: 'Family'
  },
  {
    id: 'foundation',
    title: 'Heal A Child Foundation',
    subtitle: 'Medical Philanthropy',
    year: 'Social Impact',
    src: foundationCampaign,
    category: 'Charity'
  }
];

export const SEED_WISHES: FanWish[] = [
  {
    id: 'wish-1',
    name: 'Sravan Varma',
    location: 'Hyderabad, Telangana',
    message: 'To the one who defined elegance and intensity on screen for 25 years — happy birthday Superstar Mahesh Babu! Your screen presence is second to none.',
    timestamp: 'August 9, 2026',
    isVerifiedFan: true
  },
  {
    id: 'wish-2',
    name: 'Kavya Reddy',
    location: 'Vijayawada, Andhra Pradesh',
    message: 'Thank you for healing thousands of children through Heal a Child and bringing joy to millions through cinema. True hero on and off screen!',
    timestamp: 'August 9, 2026',
    isVerifiedFan: true
  },
  {
    id: 'wish-3',
    name: 'Anil Kumar',
    location: 'Bengaluru, Karnataka',
    message: 'From Pokiri to Guntur Kaaram and now Varanasi with SSR — your dedication to reinventing yourself inspires us every single day. Long live the Prince!',
    timestamp: 'August 9, 2026',
    isVerifiedFan: true
  }
];

import hackathonLogo from './Assets/hackathonLogo.png';

// Importing all sponsors logos from Assets
/** Put all your Team member image inside folder `Team Images`
 * and import them like in the above and update src in TeamInfo
 * or you can provide a cloud link in src also
 */

import boy from './Assets/boy.png';
import pass from './Assets/sponsorsLogos/1pass.png';
import ACF from './Assets/sponsorsLogos/ACF.png';
import cfc from './Assets/sponsorsLogos/cfc.png';
import echoAR from './Assets/sponsorsLogos/echoAR.png';
import egg from './Assets/sponsorsLogos/egg.png';
import glimpse from './Assets/sponsorsLogos/glimpse.png';
import interviewC from './Assets/sponsorsLogos/interview-cake.jpg';
import ll from './Assets/sponsorsLogos/ll.png';
import qoom from './Assets/sponsorsLogos/qoom.svg';
import Replit from './Assets/sponsorsLogos/replit.png';
import sublime from './Assets/sponsorsLogos/sublime.png';
import taskade from './Assets/sponsorsLogos/taskade.png';

/** Put all your sponsors logo inside folder `sponsorLogos`
 * and import them in the above and update `src` in sponsorLogos
 * or you can provide a cloud link in src
 */

// Importing all Team members images  from Assets

import RL from './Assets/teami/RL.jpg';
import SM from './Assets/teami/SM.jpg';
import JN from './Assets/teami/JN.png';
import MG from './Assets/teami/MG.jpg';
import YN from './Assets/teami/YN.jpg';
import KP from './Assets/teami/KP.jpg';
import DEF from './Assets/teami/default-user.png';
const name = 'Hack the Heart';

const TOP_SECTION = {
  TITLE: name,
  Typed_effect: ['2 days', '3 Streams', 'Cool workshops', '$500+ in Prizes'],
  SHORT_DESCRIPTION:
    'Join us on 24th-25th February 2024 for 2 days of creation, innovation, & fun!',
  IMG_SRC: boy,
  DISCORD_LINK: '',
  JUDGES_FORM_LINK: '',
  HACKERS_REGISTRATION_FORM_LINK: 'https://forms.gle/yQCcMzfh9T8zTRBs9'
};

const SOCIALS = {
  instagram: 'https://www.instagram.com/cube.skule/?hl=en',
  discord: 'https://discord.gg/RsFhPUXM',
  linkedin: 'https://www.linkedin.com/company/blockchain-at-asu/',
  twitter: 'https://twitter.com/blockchainASU',
  devpost: '',
  email: 'cube@g.skule.ca'
};

const MIDDLE_SECTION = {
  TITLE: `What is ${name}?`,
  LONG_DESCRIPTION: `Welcome to "Hack the Heart" – where innovation meets cardiology! 🚀 \n

  Dive into the world of our heart-themed hackathon, where brains collide, ideas spark, and solutions beat to a different rhythm. 
  
  Join us for a weekend packed with more than just code. Meet seasoned researchers, mingle with cutting-edge scientists, and network with industry professionals who are ready to share their expertise.
  
  But it's not all serious business! Expect a hackathon with a heartbeat – where fun games, electrifying workshops, and unexpected twists keep you on your toes.
  
  Are you ready to revolutionize the world of cardiology? `,
  LOGO: hackathonLogo
};

const FOOTER = {
  VOLUNTEERING_FORM: {
    required: true,
    src: 'https://forms.office.com/Pages/ResponsePage.aspx?id=DQSIkWdsW0yxEjajBLZtrQAAAAAAAAAAAAN__jZdNhdUNFBQME44TzJZWDc2UFgwTUtLN0xDQVYyUi4u'
  },
  JOIN_TEAM: {
    required: true,
    src: 'https://forms.office.com/Pages/ResponsePage.aspx?id=DQSIkWdsW0yxEjajBLZtrQAAAAAAAAAAAAN__jZdNhdUOUhEQkJSRk02OEU4SlBMTUdYOFIxOTNZSy4u'
  },
  Privacy_policy: {
    required: true,
    src: ''
  },
  Terms_of_use: {
    required: true,
    src: ''
  }
};

/** SCHEDULE
 *
 * INSTRUCTIONS
 *
 * Date format : 8-11-2021, 18-11-2021 (without trailing zeros)
 */

const calenderStartingDate = {
  month: 2,
  year: 2024
};

const schedule = [
  {
    day: '28-11-2023',
    events: [
      {
        title: 'Hack the Heart KICKOFF',
        timings: '6:30 PM - 9 PM',
        link: 'https://forms.gle/yMZaw13uPXrMTZU97'
      }
    ]
  },
  {
    day: '24-2-2024',
    events: [
      {
        title: 'Registration & Check-in',
        timings: '9:30 AM - 10 AM',
        link: ' '
      },
      {
        title: 'Opening Ceremony including Keynote Speaker: Dr. Craig Simmons',
        timings: '10:00 - 11:00 AM',
        link: ' '
      },
      {
        title: 'Workshop 1: MRI: The Gold Standard for Cardiac Imaging by Jay Patel',
        timings: '2:00 PM - 3:00 PM',
        link: ' '
      }, 
      {
        title: 'Workshop 2: Biorobotics and Rapid Prototyping by Katie Allison',
        timings: '3:00 PM - 4:00 PM',
        link: ' '
      }, 
      {
        title: 'Workshop 3: Wearable Tech in Cardiology by Megh Rathod',
        timings: '4:00 PM - 5:00 PM',
        link: ' '
      }, 
      {
        title: 'Workshop 4: Intro to Basic Hardware and Arduino by Craig Macsemchuk',
        timings: '6:00 PM - 7:00 PM',
        link: ' '
      }, 
      {
        title: 'Dinner',
        timings: '7:30 PM - 8:30 PM',
        link: ' '
      } 
    ]
  },
  {
    day: '25-2-2024',
    events: [
      {
        title: 'Breakfast',
        timings: '9:00 AM - 10:00 AM',
        link: ' '
      }, 
      {
        title: 'Submissions Close!',
        timings: '11:00 AM',
        link: ' '
      }, 
      {
        title: 'Presentations',
        timings: '12:00 PM - 2:00 PM',
        link: ' '
      },
      {
        title: 'Closing Ceremony',
        timings: '3:00 PM - 4:00 PM',
        link: ' '
      }
    ]
  }
];

/** ICON
 *
 * icons are from fontawesome visit = https://fontawesome.com
 * and just copy paste icon links and update icon in Prizeinfo
 *
 * INSTRUCTIONS
 *
 * Insert only 3 or less then 3 prizes per array in `Prizeinfo`, you can
 * create as many arrays you want all prizes will be rendered
 * in a group of 3.
 */

const Prizeinfo = [
  [
    //Array 2
    {
      icon: <i className="fa-solid fa-4x fa-stethoscope"></i>,
      type: 'Diagnostics',
      content:
        'Revolutionize cardiac diagnostics! Develop groundbreaking solutions, from advanced algorithms to wearable tech, that redefine how we detect heart diseases. Bring your innovation to the forefront and contribute to early detection for healthier hearts. '
    },
    {
      icon: <i className="fa-solid fa-4x fa-hospital-user"></i>,
      type: 'Patient Care',
      content:
        'Elevate the patient experience in healthcare! Craft solutions that enhance patient engagement and communication. Whether through app development or streamlined tools, participants in this stream will be the heartbeat of compassionate care for heart disease patients. '
    },
    {
      icon: <i className="fa-solid fa-4x fa-staff-snake"></i>,
      type: 'Treatment',
      content:
        'Tackle challenges related to therapies, medications, and interventions. Whether optimizing drug delivery systems, exploring virtual reality for rehabilitation, or pushing the boundaries of cardiovascular care, this stream is about shaping the future of heart disease treatment. '
    }
  ]
];

/** Instructions
 * Insert only 3 or less then 3 members per array in `TeamInfo`, you can
 * create as many arrays you want all team members will be rendered
 * in a group of 3.
 */

const TeamInfo = [
  [
    //Array 1
    {
      Name: 'Roseanna Liang',
      role: 'Roseanna Liang',
      github: '',
      linkedin: 'https://www.linkedin.com/in/roseanna-liang-90b4921b2/',
      img: RL
    },
    {
      Name: 'Shivang Mistry',
      role: 'Shivang Mistry',
      github: '',
      linkedin: 'https://www.linkedin.com/in/shivang-mistry-1119b818b/',
      img: SM
    },
    {
      Name: 'Jagriti Natraj',
      role: 'Jagriti Natraj',
      github: '',
      linkedin: 'https://www.linkedin.com/in/jagriti-natraj/',
      img: JN
    }
  ],
  [
    //Array 2
    {
      Name: 'Munisa Ganieva',
      role: 'Munisa Ganieva',
      github: '',
      linkedin: 'https://www.linkedin.com/in/munisa-ganieva-521a83202/',
      img: MG
    },
    {
      Name: 'Yvonne Ni',
      role: 'Yvonne Ni',
      github: '',
      linkedin: 'https://www.linkedin.com/in/yvonne-ni/',
      img: YN
    },
    {
      Name: 'Kristen Parmar',
      role: 'Kristen Parmar',
      github: '',
      linkedin: 'https://www.linkedin.com/in/kristenparmar/',
      img: KP
    }
  ],
  //Array 3
  [
    {
      Name: 'Manal Rammal',
      role: 'Manal Rammal',
      github: '',
      linkedin: 'https://www.linkedin.com/in/manal-rammal-327a9b275/',
      img: DEF
    },
    {
      Name: 'Christina Wang',
      role: 'Christina Wang',
      github: '',
      linkedin: 'https://www.linkedin.com/in/christinawang07/',
      img: DEF
    }
  ]
];

const JudgesInfo = [
  [
    //Array 1
    {
      Name: 'Rehan',
      role: 'Organizer',
      github: '',
      linkedin: '',
      img: SM
    },
    {
      Name: 'Moon',
      role: 'Organizer',
      github: '',
      linkedin: '',
      img: SM
    },
    {
      Name: 'Ryah Garcia',
      role: 'Organizer',
      github: '',
      linkedin: '',
      img: SM
    }
  ],
  [
    //Array 2
    {
      Name: 'Lyanola',
      role: 'Organizer',
      github: '',
      linkedin: '',
      img: SM
    },
    {
      Name: 'Zoheb',
      role: 'Organizer',
      github: '',
      linkedin: '',
      img: SM
    }
  ]
];

/** Instructions
 * Only put 3 logos per array inside `sponsorLogos`, you can
 * create as many arrays you want all logos will be rendered
 * in a group of 3.
 */

const sponsorLogos = [
  [{src: cfc}, {src: sublime}, {src: echoAR}], //Array 1
  [{src: taskade}, {src: Replit}, {src: qoom}], //Array 2
  [{src: interviewC}, {src: pass}, {src: glimpse}], //Array 3
  [{src: egg}, {src: ll}, {src: ACF}] //Array 4
];

/** Instructions
 * Follow the strcuture provided below to add as many as FAQ's you want
 */
const frequentlyAskedQuestions = [
  [
    [
      {
        label: 'What is a hackathon?',
        content:
          'A hackathon is a fun, collaborative event where hackers use their skills to create innovative solutions, often in the form of software or hardware projects, within a limited time frame.'
      },
      {
        label: 'Who can attend?',
        content:
          'Hack the Heart is open to all undergraduate students from all disciplines!'
      },
      {
        label: 'Do I need technical experience to join?',
        content:
          "While coding/hardware skills are beneficial, they're not mandatory. Hackathons embrace a range of talents, including life sciences, design, and project management. Teams often thrive with a mix of skills. We will also host workshops, and have mentors to help!"
      },
      {
        label: 'How does team formation work?',
        content:
          "You can form team with 4 members in it at maximum. Teams can be formed based on diverse skills. If you're a life science student, you might join forces with coders, designers, and others to create a well-rounded team. We'll also facilitate networking activities to help everyone connect."
      }
    ],
    [
      {
        label: 'Where do I sign up?',
        content: 'All you need is to fill our form above!'
      },
      {
        label: 'I have more questions?',
        content:
          'Reach us directly at cube@g.skule.ca we would be happy to help you.'
      },
      {
        label: "What if I don't have a project idea?",
        content:
          "No worries! Many participants come without specific project ideas. At the hackathon, you'll have the chance to join teams, contribute your skills, and work on exciting projects proposed by others."
      },
      {
        label: 'Is there a cost to attend?',
        content: 'Nope! Completely free!'
      }
    ]
  ]
];

export {
  TOP_SECTION,
  MIDDLE_SECTION,
  SOCIALS,
  FOOTER,
  Prizeinfo,
  sponsorLogos,
  TeamInfo,
  JudgesInfo,
  frequentlyAskedQuestions,
  schedule,
  calenderStartingDate
};

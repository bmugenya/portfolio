import React from 'react'
import FacebookIcon from '@material-ui/icons/Facebook'
import TwitterIcon from '@material-ui/icons/Twitter'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import GitHubIcon from '@material-ui/icons/GitHub'
import GradeIcon from '@material-ui/icons/Grade'
import LinkIcon from '@material-ui/icons/Link'

export default {
  name: 'Brian Mugenya',
  title: 'Software Developer',
  birthday: '26th November 1995',
  email: 'bmugenya26@gmail.com',
  phone: '+254 700577453',
  address: 'Nairobi, Kenya',

  socials: {
    facebook: {
      link: 'https://www.facebook.com/misty.builder',
      text: 'Friend me on Facebook',
      icon: <FacebookIcon />,
    },
    twitter: {
      link: 'https://twitter.com/BrianMugenya',
      text: 'Follow me on Twitter',
      icon: <TwitterIcon />,
    },
    linkedin: {
      link: 'https://www.linkedin.com/in/brian-mugenya-007/',
      text: 'Connect with me on Linkedin',
      icon: <LinkedInIcon />,
    },
    github: {
      link: 'https://www.github.com/bmugenya',
      text: 'View my work on Github',
      icon: <GitHubIcon />,
    },
    badges: {
      link: 'https://www.youracclaim.com/users/brian-mugenya/badges',

      text: 'Find my badges on Acclaim',
      icon: <GradeIcon />,
    },
 
  },

  about:"I am a software developer with a passion for building scalable and secure applications. I have developed several projects over the years, where I have gained experience in programming languages such as PHP, JavaScript and Python, as well as frameworks like React and Flask. I enjoy analyzing complex problems and breaking them down into smaller components to develop effective solutions. \n\n I am a team player who enjoys collaborating with others to achieve project goals. I understand the importance of clear communication and effective collaboration to ensure project success. I am strongly passionate about innovative ideas and problem-solving using programming technologies. I am a time conscious, self-driven Individual who is eager to learn and apply new skills and knowledge to the work place. My open minded nature allows me to work in a multi-cultural team and adapt to new cultures.",

  certifications: [
    {
      title: 'FreeCodeCamp',
      date: 'Feb 1st - (Pursuing)',
      description:
        'Front End Development Libraries\nJavaScript Algorithms and Data Structures\nResponsive Web Design',
    },
    {
      title: 'Internet Society',
      date: 'July 6th - August 19th 2018',
      description: 'Network Operations: UNIX/Linux,  Networking and DNS',
    },
    {
      title: 'Google',
      date: 'June 29th 2018',
      description: 'Google Digital Skills for Africa',
    },
  ],
  education: [
    {
      title: 'Andela',
      date: '2018 - 4 Weeks',
      description: 'Andela Cycle 35 Fellowship Bootcamp ',
    },
    {
      title: 'Africa Nazarene University',
      date: '2016 - To Date',
      description: 'Bsc. in Business Information Technology',
    },
    {
      title: 'Laiser Hill Academy ',
      date: '2013 - 2016',
      description: 'A – Level',
    },
  ],
  services: [
    {
      title: 'TEAM PLAYER',
      description:
        'I am able to build positive relationships.I am able to provide support, commit to team goals, and make others feel appreciated.',
      icon: 'https://secure.plum.io/static/common/dimensions/310/color/teamwork.svg',
    },
    {
      title: 'ADAPTIVE ACE',
      description:
        'I am excellent at overcoming obstacles.Im Strong at remaining calm and operating effectively under pressure and multiple demands.',
      icon: 'https://secure.plum.io/static/common/dimensions/301/color/adaptation.svg',
    },
    {
      title: 'OUTCOME OWNER',
      description:
        'I have the ability to set goals, monitor progress, and take the initiative to improve my work and persevering even when initially unsuccessful.',
      icon: 'https://secure.plum.io/static/common/dimensions/309/color/execution.svg',
    },
  ],
  skills: [
    {
      title: 'FRONT-END',
      description: ["I wrote my first code in javascript and along the way I developed a strong understanding of HTML and CSS.Since I already knew javascript I could make the websites interactive and engaing.I am have a big fan of React.js as it makes it easier to create dynamic user interfaces. I also follow the responsive design principles to ensure that the website looks great on desktop, tablet, and mobile devices."],
    },
    {
      title: 'BACK-END',
      description: ['I gained a good experience with PHP while I was in school.Some of the projects I did included a login form to an ecommerce platform.I also have a good foundation with python and javascript.I now design and create backend architecture that are secure and protect user data and prevents attacks. I am familiar with authentication and authorization protocols as well as security measures like encryption and tokenization.  '],
    },
    {
      title: 'DATABASE',
      description: ['I am skilled in database management,using SQL I can create and design efficient and effective database structures.I have created database managment systems that handles stores large amounts of data. I have also integrtated the database functionality with web applications. I am also  familiar with popular database management systems like MySQL and PostgreSQL'  ],
    },
    {
      title: 'Talent',
      description: ['I am able to build positive relationships by providing support, committing to team goals, and make others feel appreciated.I am excellent at overcoming obstacles.Im Strong at remaining calm and operating effectively under pressure and multiple demands. I have the ability to set goals, monitor progress, and take the initiative to improve my work and persevering even when initially unsuccessful.'  ],
    },
  ],
  projects: [
    {
      tag: 'Flask',
      image:
        'https://res.cloudinary.com/doammcpie/video/upload/v1627105594/tweet_olgnv5.webm',
      title: 'ZUP',
      caption: 'Zup is a Twitter sentiment analysis ',
      description:
        "Zup is a Twitter sentiment analysis that allows you to keep track of what's being said about a certain topic on twitter, and can help you detect sensentive topics",
      links: [
        {
          link: 'https://github.com/bmugenya/Zup',
          icon: <GitHubIcon />,
        },
        {
          link: 'https://tweetsenti.herokuapp.com/api/v1/',
          icon: <LinkIcon />,
        },
      ],
    },
    {
      tag: 'React',
      image:
        'https://res.cloudinary.com/doammcpie/video/upload/v1631423190/tough_gfioh6.mp4',
      title: 'Tough Arc',
      caption: 'Tough Arc is a kenyan based manga',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
      links: [
        { link: 'https://tough.netlify.app/', icon: <LinkIcon /> },
        {
          link: 'https://github.com/bmugenya/Tough-Arch',
          icon: <GitHubIcon />,
        },
      ],
    },

        {
      tag: 'React',
      image:
        'https://res.cloudinary.com/doammcpie/video/upload/v1630469462/chuckTopia_ggewmt.mp4',
      title: 'ChuckTopia',
      caption: 'A Single Page application that consumes API from chucknorris.io',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
      links: [
        { link: 'https://bmugenya.github.io/DAP/', icon: <LinkIcon /> },
        {
          link: 'https://github.com/bmugenya/DAP',
          icon: <GitHubIcon />,
        },
      ],
    },
    {
      tag: 'React',
      image:
        'https://res.cloudinary.com/doammcpie/video/upload/v1627105042/narutopia_kbxwqx.mp4',
      title: 'TrailerPeak',
      caption: 'TrailerPeak offers a personalized and immersive movie trailer experience',
      description: 'TrailerPeak offers a personalized and immersive movie trailer experience, catering to the diverse tastes and preferences of film enthusiasts. The website utilizes advanced recommendation algorithms to curate a tailored selection of trailers based on users viewing history, genre preferences, and ratings. By delivering highly relevant and intriguing trailers, TrailerPeak ensures users discover new movies that resonate with their individual interests.',
      links: [
        { link: 'https://trailerpeak.app', icon: <LinkIcon /> },
        {
          link: 'https://github.com/bmugenya/trailerpeak',
          icon: <GitHubIcon />,
        },
      ],
    },

    {
      tag: 'React',
      image:
        'https://res.cloudinary.com/doammcpie/video/upload/v1630620457/rafiki_l2tdwj.mp4',
      title: 'Rafiki',
      caption: 'anonymous communication',
      description:
        "Rafiki offers a haven for anonymous communication inorder to eradicate fear of judgment and encourage openness. Rafiki's existence was brought about due to the alarming rate of internal suffering . Rafiki consist of highly experienced counsellors and occupational health therapists as well as friends who will listen because its time you let someone know",

      links: [{ link: 'https://rafiki.netlify.app/', icon: <LinkIcon /> }],
    },

    {
      tag: 'React',
      image:
        'https://res.cloudinary.com/doammcpie/video/upload/v1685289303/Juliarts_pdjtbw.webm',
      title: 'JuliArt',
      caption: 'JuliArt',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
      links: [{ link: 'https://juliarts.vercel.app/', icon: <LinkIcon /> }],
    },

        {
      tag: 'Flask',
      image:
        'https://res.cloudinary.com/doammcpie/video/upload/v1680690846/Alsmotors_wtsojl.webm',
      title: 'Alsmotors',
      caption: 'Alsmotors a car dealership',
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      links: [
     
        {
          link: 'https://alsmotors.onrender.com',
          icon: <LinkIcon />,
        },
      ],
    },



        {
      tag: 'React',
      image:
        'https://res.cloudinary.com/doammcpie/video/upload/v1684459120/Diani_Konnect_2_hpmmxb.mp4',
      title: 'Diani Konnect',
      caption: 'Diani Konnect',
      description:
        "Diani Beach is a stunning South Coast destination in Kwale County, known for its vast coastline and breathtaking beaches.",
      links: [
     
        {
          link: 'https://dianikonnect.vercel.app/',
          icon: <LinkIcon />,
        },
      ],
    },

          {
      tag: 'React',
      image:
        'https://www.awesomescreenshot.com/video/18980538?key=0545706188190d43fbc42bbd7293aecd',
      title: 'Schoolia',
      caption: 'Schoolia',
      description:
        "Schoolia is a comprehensive and user-friendly school management system designed to optimize administrative processes and automate essential tasks. With a range of essential functionalities, this software empowers educational institutions in Kenya to efficiently manage student information, admissions, timetables, attendance tracking, fee management, staff information, and more.",
      links: [
     
        {
          link: 'https://schoolnett.netlify.app/',
          icon: <LinkIcon />,
        },
      ],
    },
    
  ],
}

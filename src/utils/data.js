import React from 'react'
import FacebookIcon from '@material-ui/icons/Facebook'
import TwitterIcon from '@material-ui/icons/Twitter'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import GitHubIcon from '@material-ui/icons/GitHub'
import GradeIcon from '@material-ui/icons/Grade'
import StarsIcon from '@material-ui/icons/Stars'
import LinkIcon from '@material-ui/icons/Link'
export default {
  name: 'Brian Mugenya',
  title: 'Full stack developer',
  birthday: '26th November 1995',
  email: 'bmugenya26@gmail.com',
  phone: '+254 700577453',
  address: 'Nairobi, Kenya',

  socials: {
    talents: {
      text: 'Three of my top Talents.',
      link: 'https://secure.plum.io/en/p/g5Wx3lfhJjj_JR-YvTmjMg',
      icon: <StarsIcon />,
    },
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
  about:
    'I have a proficiency of bringing others together to resolve conflicts and reconciling differences through negotiation. I am calm and collected even under stressful situations .I am strongly passionate about innovative ideas and problem-solving using programming technologies.conscious\nI am a time conscious, self-driven Individual who is eager to learn and apply new skills and knowledge to the work place. My open minded nature allows me to work in a multi-cultural team and adapt to new cultures.',

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
      description: ['ReactJs', 'Javascript', 'Bootsrap', 'Material UI'],
    },
    {
      title: 'BACK-END',
      description: ['Flask', 'ExpressJS', 'Javascript', 'Php'],
    },
    {
      title: 'DATABASE',
      description: ['PostgreSQL', ' MySQL', 'SqlAlchemy', ' MongoDB'],
    },
  ],
  projects: [
    {
      tag: 'Flask',
      image:
        'https://res.cloudinary.com/doammcpie/video/upload/v1627105121/rafiki_oa6tqk.webm',
      title: 'Rafiki',
      caption: 'Rafiki offers a haven for anonymous communication',
      description:
        "Rafiki offers a haven for anonymous communication inorder to eradicate fear of judgment and encourage openness. Rafiki's existence was brought about due to the alarming rate of internal suffering . Rafiki consist of highly experienced counsellors and occupational health therapists as well as friends who will listen because its time you let someone know",
      links: [
        {
          link: 'https://rafiki-app.herokuapp.com/rafiki/',
          icon: <LinkIcon />,
        },
        {
          link: 'https://github.com/bmugenya/Rafiki',
          icon: <GitHubIcon />,
        },
      ],
    },
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
        'https://res.cloudinary.com/doammcpie/video/upload/v1627445117/tough_dzvoox.webm',
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
      title: 'Narutopia',
      caption: 'Narutopia is a netflix clone that streams Naruto epsiodes',
      description: 'Narutopia is a netflix clone that streams Naruto epsiodes',
      links: [
        { link: 'https://narutopia.netlify.app/', icon: <LinkIcon /> },
        {
          link: 'https://github.com/bmugenya/Narutopia',
          icon: <GitHubIcon />,
        },
      ],
    },

    {
      tag: 'React',
      image:
        'https://res.cloudinary.com/doammcpie/video/upload/v1630620457/rafiki_l2tdwj.mp4',
      title: 'Rafiki V2',
      caption: 'anonymous communication',
      description:
        "Rafiki offers a haven for anonymous communication inorder to eradicate fear of judgment and encourage openness. Rafiki's existence was brought about due to the alarming rate of internal suffering . Rafiki consist of highly experienced counsellors and occupational health therapists as well as friends who will listen because its time you let someone know",

      links: [{ link: 'https://rafiki.netlify.app/', icon: <LinkIcon /> }],
    },

    {
      tag: 'React',
      image:
        'https://res.cloudinary.com/doammcpie/video/upload/v1627104964/art_dk9juw.webm',
      title: 'Digital Gallery',
      caption: 'Digital Gallery',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
      links: [{ link: 'https://ngallery.netlify.app/', icon: <LinkIcon /> }],
    },
  ],
}

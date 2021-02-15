import React from 'react'
import FacebookIcon from '@material-ui/icons/Facebook'
import TwitterIcon from '@material-ui/icons/Twitter'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import GitHubIcon from '@material-ui/icons/GitHub'
export default {
  name: 'Brian Mugenya',
  title: 'Full stack developer',
  birthday: '26th November 1995',
  email: 'bmugenya26@gmail.com',
  phone: '+254 700577453',
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
  },
  about:
    'I have a proficiency of bring others together to resolve conflicts and reconciling differences through negotiation. I am calm and collected even under stressful situations .I am strongly passionate about innovative ideas and problem-solving using programming technologies.\n\nI am a time conscious, self-driven Individual who is eager to learn and apply new skills and knowledge to the work place. My open minded nature allows me to work in a multi-cultural team and adapt to new cultures.',
}

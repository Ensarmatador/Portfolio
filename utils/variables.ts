import { IconType } from 'react-icons';
import { BsDiscord, BsGithub, BsInstagram, BsTiktok, BsTwitterX, BsYoutube, BsTwitch } from 'react-icons/bs';
import { DiNodejsSmall } from 'react-icons/di';
import { SiCss3, SiExpress, SiFirebase, SiPhp ,SiHtml5, SiHtmlacademy, SiJavascript, SiMongodb, SiNextdotjs, SiPython, SiTailwindcss, SiTypescript, SiVercel } from 'react-icons/si';
import { TbBrandCSharp, TbBrandNextjs, TbBrandVercel, TbFileTypeJsx } from 'react-icons/tb';
import { jsx } from 'react/jsx-runtime';  

export const projects: { name: string; description: string; iconURL: string; link: string; }[] = [
  {
    name: 'Rtk Boom',
    description: 'Sunucunuzun Güvenli Genel Botu.',
    link: '',
    iconURL: 'https://cdn.discordapp.com/avatars/1234085623619653685/a_86f0f28e4d0938d03f6dc3ebc0e27f4b.webp',
  },
  {
    name: 'WizyX Music',
    description: 'Kesintisiz Müzik Keyfini Çıkarın!',
    link: 'https://wizyxmusic.vercel.app/',
    iconURL: 'https://cdn.discordapp.com/avatars/1243599943352975450/a6e944472ae2054ca2ce26241e9d3053.webp?size=1024',
  },
];

export const githubUsername = 'RtkMash';
export const discordId = '883251785656070154';

export const socialMediaAccounts: { name: string; link: string; iconURL: IconType }[] = [
  {
    name: 'Github',
    link: 'https://github.com/' + githubUsername,
    iconURL: BsGithub,
  },
  {
    name: 'Discord',
    link: 'https://discord.com/users/' + discordId,
    iconURL: BsDiscord,
  },
  {
    name: 'Instagram',
    link: 'https://www.instagram.com/ensarszzr',
    iconURL: BsInstagram,
  },
  {
    name: 'Twich  ',
    link: 'https://www.twitch.tv/xfmorg_',
    iconURL: BsTwitch,
  },
  {
    name: 'TikTok',
    link: 'https://tiktok.com/@rtk.mash',
    iconURL: BsTiktok,
  },
];

export const technologiesAndLanguages: { name: string; iconURL: IconType }[] = [
  {
    name: 'Javascript',
    iconURL: SiJavascript,
  },
  {
    name: 'Vercel.app',
    iconURL: SiVercel,
  },
  {
    name: 'Next.js',
    iconURL: TbBrandNextjs,
  },
  {
    name: 'Node.js',
    iconURL: DiNodejsSmall,
  },
  {
    name: 'Python',
    iconURL: SiPython,
  },
  {
    name: 'MongoDB',
    iconURL: SiMongodb,
  },
  {
    name: 'Html',
    iconURL: SiHtml5,
  },
  {
    name: 'Express',
    iconURL: SiExpress,
  },
  {
    name: 'Php',
    iconURL: Siphp,
  },
    {
    name: 'Css',
    iconURL: SiCss3,
  },
];

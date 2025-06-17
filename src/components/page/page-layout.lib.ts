import type { User } from '@/types';

// Some default user data mostly used for basic app
export const user = {
  name: 'SjimBolSlice',
  email: 'Sjim@bol.com',
  imageUrl: 'https://github.com/Sjimdemunck.png',
} satisfies User;

export const navigation = [{ name: 'Home', href: '#', current: true }];

export const userNavigation = [
  { name: 'Your Profile', href: '#' },
  { name: 'Settings', href: '#' },
  { name: 'Sign out', href: '#' },
];
export const UserSocial = [
  { name: 'Email', href: 'mailto:sjim@codecapi.nl', icon: 'Mail' },
  { name: 'GitHub', href: 'https://github.com/Sjimdemunck', icon: 'GitHub' },
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/in/sjim-de-munck/',
    icon: 'Linkedin',
  },
];

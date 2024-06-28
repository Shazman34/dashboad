import { NavItem } from './nav-item/nav-item';

export const navItems: NavItem[] = [
  // {
  //   navCap: 'Home',
  // },
  {
    displayName: 'Dashboard',
    iconName: 'home',
    route: '/',
  },
  {
    navCap: 'Other',
  },
  // {
  //   displayName: 'Menu Level',
  //   iconName: 'box-multiple',
  //   route: '/menu-level',
  //   children: [
  //     {
  //       displayName: 'Menu 1',
  //       iconName: 'point',
  //       route: '/menu-1',
  //       children: [
  //         {
  //           displayName: 'Menu 1',
  //           iconName: 'point',
  //           route: '/menu-1',
  //         },

  //         {
  //           displayName: 'Menu 2',
  //           iconName: 'point',
  //           route: '/menu-2',
  //         },
  //       ],
  //     },

  //     {
  //       displayName: 'Menu 2',
  //       iconName: 'point',
  //       route: '/menu-2',
  //     },
  //   ],
  // },
  {
    displayName: 'Schedule',
    iconName: 'calendar-event',
    route: '/schedule',
    
  },
  {
    displayName: 'Jobs',
    iconName: 'briefcase',
    route: '/jobs',
    
  }, {
    displayName: 'Recurring',
    iconName: 'recharging',
    route: '/recurring',
    
  }, {
    displayName: 'Payments',
    iconName: 'cash',
    route: '/payments',
    
  }, {
    displayName: 'Customers',
    iconName: 'users',
    route: '/customers',
    
  }, {
    displayName: 'Team',
    iconName: 'users-group',
    route: '/team',
    
  }, {
    displayName: 'Services',
    iconName: 'settings-star',
    route: '/services',
    
  }, {
    displayName: 'Coupons',
    iconName: 'ticket',
    route: '/coupons',
    
  }, {
    displayName: 'Territories',
    iconName: 'map-pin',
    route: '/territories',
    
  }, {
    displayName: 'Online Booking',
    iconName: 'brand-appgallery',
    route: '/onlinebookings',
    
  }, {
    displayName: 'Settings',
    iconName: 'settings',
    route: '/settings',
    
  },
  // {
  //   displayName: 'Chip',
  //   iconName: 'mood-smile',
  //   route: '/',
  //   chip: true,
  //   chipClass: 'bg-primary text-white',
  //   chipContent: '9',
  // },
  // {
  //   displayName: 'Outlined',
  //   iconName: 'mood-smile',
  //   route: '/',
  //   chip: true,
  //   chipClass: 'b-1 border-primary text-primary',
  //   chipContent: 'outlined',
  // },
  // {
  //   displayName: 'External Link',
  //   iconName: 'star',
  //   route: 'https://www.google.com/',
  //   external: true,
  // },
];

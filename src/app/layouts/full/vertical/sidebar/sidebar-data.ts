import { NavItem } from './nav-item/nav-item';

export const navItems: NavItem[] = [
  // {
  //   navCap: 'Home',
  // },
  {
    displayName: 'Dashboard',
    iconName: 'home',
    route: '/dashboard',
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
    route: 'dashboard/schedule',
    
  },
  {
    displayName: 'Jobs',
    iconName: 'briefcase',
    route: 'dashboard/jobs',
    
  }, {
    displayName: 'Recurring',
    iconName: 'recharging',
    route: 'dashboard/recurring',
    
  }, {
    displayName: 'Payments',
    iconName: 'cash',
    route: 'dashboard/payments',
    
  }, {
    displayName: 'Customers',
    iconName: 'users',
    route: 'dashboard/customers',
    
  }, {
    displayName: 'Team',
    iconName: 'users-group',
    route: 'dashboard/team',
    
  }, {
    displayName: 'Services',
    iconName: 'settings-star',
    route: 'dashboard/services',
    
  }, {
    displayName: 'Coupons',
    iconName: 'ticket',
    route: 'dashboard/coupons',
    
  }, {
    displayName: 'Territories',
    iconName: 'map-pin',
    route: 'dashboard/territories',
    
  }, {
    displayName: 'Online Booking',
    iconName: 'brand-appgallery',
    route: 'dashboard/onlinebookings',
    
  }, {
    displayName: 'Settings',
    iconName: 'settings',
    route: 'dashboard/settings',
    
  },
 
];

export default
  [
    {
      _name: 'CSidebarNav',
      _children: [
        {
          _name: 'CSidebarNavItem',
          name: 'Dashboard',
          to: '/dashboard',
          icon: 'cil-speedometer',
          _authentication: 'ROLE_USER'
        },
        {
          _name: 'CSidebarNavDropdown',
          name: 'Manage Organization',
          route: '/base1',
          icon: 'cilLayers',
          _authentication: 'ROLE_USER',
          items: [
            // {
            //   name: 'Address',
            //   to: '/base/addressform'
            // },
            {
              name: 'New Organization',
              to: '/base/addorganization'
            },
            // {
            //   name: 'View Organization',
            //   to: '/base/vieworganization'
            // },
            {
              name: 'View Organization',
              to: '/base/users'
            },
            // {
            //   name: 'Employees',
            //   to: '/base/employees'
            // }
          ]
        },
        {
          _name: 'CSidebarNavItem',
          name: 'Vehicle',
          to: '/vehicle',
          icon: 'cilChartPie',
          _authentication: 'ROLE_USER'
        },
        {
          _name: 'CSidebarNavItem',
          name: 'Device',
          to: '/device',
          icon: 'cilDollar',
          _authentication: 'ROLE_USER'
        },
        {
          _name: 'CSidebarNavItem',
          name: 'Driver',
          to: '/driver',
          icon: 'cilDollar',
          _authentication: 'ROLE_USER'
        },
       
        {
          _name: 'CSidebarNavDropdown',
          name: 'Manage Employee',
          route: '/base2',
          icon: 'cil-People',
          _authentication: 'ROLE_USER',
          items: [
            {
              name: 'Employees',
              to: '/base/employees'
            }
          ]
        }
        
      ]
    }
  ]

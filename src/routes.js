const routes = [
  {
    path: '/',
    label: 'Home',
    routes: [
      {
        path: '/computer-systems',
        label: 'Computer Systems',
        routes: [
          {
            path: '/desktop',
            label: 'Desktop',
            routes: [
              {
                path: '/gaming',
                label: 'Gaming Computer',
              },
              {
                path: '/desktop-computer',
                label: 'Desktop Computer',
              },
              {
                path: '/server-systems',
                label: 'Server Systems',
              },
              {
                path: '/workstation-systems',
                label: 'Workstation Systems',
              },
            ],
          },
          {
            path: '/laptops',
            label: 'Laptops',
            routes: [
              {
                path: '/dell',
                label: 'Dell',
              },
              {
                path: '/hp',
                label: 'HP',
              },
            ],
          },
        ],
      },
      {
        path: '/office',
        label: 'Office',
      },
      {
        path: '/sport',
        label: 'Sport',
        routes: [
          {
            path: '/wearable-tech',
            label: 'Wearable Tech',
          },
          {
            path: '/running',
            label: 'Running',
            routes: [
              {
                path: '/footwear',
                label: 'Footwear',
              },
              {
                path: '/shirts',
                label: 'Shirts',
                routes: [
                  {
                    path: '/red',
                    label: 'Red',
                  },
                  {
                    path: '/blue',
                    label: 'Blue',
                  },
                ],
              },
            ],
          },
          {
            path: '/golf',
            label: 'Golf',
          },
        ],
      },
    ],
  },
];

export default routes;

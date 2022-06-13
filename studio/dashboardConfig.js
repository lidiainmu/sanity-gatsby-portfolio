export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '62a736e3e4f861494eee624b',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-7exjczag',
                  apiId: 'e6f5ed1a-870b-4638-aeb4-e4f1afeb5dc7'
                },
                {
                  buildHookId: '62a736e3e0748443507d1a28',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-5fws7cx8',
                  apiId: '7a91856c-f58a-4134-a681-1022dfc88117'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/lidiainmu/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-5fws7cx8.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}

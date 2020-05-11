export default {
  widgets: [
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
                  buildHookId: '5eb8aeb5dfd2a07057e250ca',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-4qm1swko',
                  apiId: '543691af-6b3c-4b18-b8fd-9526a70a9af2'
                },
                {
                  buildHookId: '5eb8aeb5dfd2a03b34e254f2',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-co6jyipa',
                  apiId: '9d738103-4e15-4e09-8f19-80a3a48f8690'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/sandcastle/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-co6jyipa.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}

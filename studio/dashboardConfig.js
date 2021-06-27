export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nuxt-events'
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
                  buildHookId: '',
                  title: 'Sanity Studio',
                  name: 'vector-test-studio',
                  apiId: '093230f7-5a8a-47e9-9483-c43beee63939'
                },
                {
                  buildHookId: '60d87960322868ccd0d17e7a',
                  title: 'Events Website',
                  name: 'vector-test',
                  apiId: '6c5566ea-64c9-4202-9f83-c55dfc1bbad7'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/rabbitdan/vector-test',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://vector-test.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently created sessions', order: '_createdAt desc', types: ['session']},
      layout: {width: 'medium'}
    }
  ]
}

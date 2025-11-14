 const projectsData = [
    {
      id: 1,
      title: 'Magic Brain App',
      imageSrc: 'magic_brain_app.jpg',
      description: 'React app using artificial intelligence to find faces on pictures and to detect the main picture color. Creation of user account is required to use the app. Using Firebase and AWS Lambda. Deployed with Render.',
      liveUrl: 'https://magic-brain-app.onrender.com/',
      sourceUrl: 'https://github.com/laurabaluchova/magic-brain-app'
    },
    {
        id: 2,
        title: 'Web for SONRISA, z.ú.',
        imageSrc: 'sonrisa.png',
        description: 'New web for non-profit organization SONRISA. Created with React, styled with React Bootstrap. Deployed with Render. Work in progress.',
        liveUrl: 'https://test-sonrisaprevence.onrender.com/',        
      },
      {
        id: 3,
        title: 'Digital gallery for Kosmas',
        imageSrc: 'kosmas.png',
        description: 'Interactive digital gallery created in collaboration with organization eKultura. Based on Emilian Kasemi tutorial. Uses Three.js. Deployed on-premises. Automatic deploy based on GitHub push command created with Amazon EC2 instance.',
        liveUrl: 'https://test.digitalni-muzeum.cz/',
        sourceUrl: 'https://github.com/laurabaluchova/robofriendshttps://github.com/eKultura/digitalni-muzeum.cz'      
      },
      {
        id: 4,
        title: 'Robofriends',
        imageSrc: 'robofriends.jpg',
        description: 'Simple project with search function. It demonstrates calling rest API and processing of received data. Tachyons is used for styling. Deployed with GitHub Pages.',
        liveUrl: 'https://laurabaluchova.github.io/robofriends/',
        sourceUrl: 'https://github.com/laurabaluchova/robofriends'
      },
      ];

export default projectsData;
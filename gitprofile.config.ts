// gitprofile.config.ts

const CONFIG = {
  github: {
    username: 'ti4g', // Your GitHub org/user name. (This is the only required config)
  },
  /**
   * If you are deploying to https://<USERNAME>.github.io/, for example your repository is at https://github.com/arifszn/arifszn.github.io, set base to '/'.
   * If you are deploying to https://<USERNAME>.github.io/<REPO_NAME>/,
   * for example your repository is at https://github.com/arifszn/portfolio, then set base to '/portfolio/'.
   */
  base: '/',
  projects: { 
    github: {
      display: true, // Display GitHub projects?
      header: 'My Projects',
      mode: 'automatic', // Mode can be: 'automatic' or 'manual'
      automatic: {
        sortBy: 'updated', // Sort projects by 'stars' or 'updated'
        limit: 10, // How many projects to display.
        exclude: {
          forks: false, // Forked projects will not be displayed if set to true.
          projects: ["ti4g", "ti4g.github.io"], // These projects will not be displayed. example: ['arifszn/my-project1', 'arifszn/my-project2']
        },
      },
    },
  },
  seo: {
    title: 'Portfólio',
    description: '',
    imageURL: '',
  },
  social: {
    website: '',
    phone: '5563999614831',
    email: 'tiagosousaquixabaaa@gmail.com',
  },
  resume: {
    // fileUrl:
//'https://www.tiago.github.io',
  },
  skills: [
    'HTML',
    'CSS',
    'JavaScript',
    'Python' 
  ],
  experiences: [
     {
       company: 'Sede Administrativa SESC Palmas',
       position: 'Assistente Administrativo',
       from: 'Julho 2023',
       to: 'Abril 2024',
       companyLink: 'https://www.sescto.com.br',
     },
  ],
  certifications: [
    // {
    //   name: 'Lorem ipsum',
    //   body: 'Lorem ipsum dolor sit amet',
    //   year: 'March 2022',
    //   link: 'https://example.com',
    // },
  ],
  educations: [
    {
      institution: 'Instituto Federal do Tocantins',
      degree: 'Tecnólogo em Sistemas para Internet',  
      from: '2023', 
      to: 'Present',
    },
  ],
  themeConfig: {
    defaultTheme: 'dark',
    disableSwitch: true,
    respectPrefersColorScheme: false,
    displayAvatarRing: true,
    themes: ['dark']
  },
  enablePWA: false
};

export default CONFIG;

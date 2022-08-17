import webDevelopmentImage from '../public/images/webIcon.png'
import wordPressDevelopmentImage from '../public/images/wordpressIcon.png'
import devOpsImage from '../public/images/devops.png'
import scrapingImage from '../public/images/scrapingIcon.png'
import pythonExpertImage from '../public/images/pythonIcon.png'
import mobileAppDevImage from '../public/images/mobileIcon.png'
import pwaImage from '../public/images/pwaIcon.png'
import reactDevImage from '../public/images/reactIcon.png'
import homeHeaderImage from '../public/images/headerImage.png'
import wall1 from '../public/images/wall1.jpg'
import news1 from '../public/images/news1.svg'
import news2 from '../public/images/news2.svg'
import news3 from '../public/images/news3.svg'
import news4 from '../public/images/news4.svg'
import youtubeIcon from '../public/images/youtubeIcon.png'
// eslint-disable-next-line
import InstagramIcon from '../public/images/instagram-icon.png'
import FacebookIcon from '../public/images/facebook-icon.png'
// eslint-disable-next-line
import TwitterIcon from '../public/images/twitter-icon.png'
import LocationIcon from '../public/images/location-icon.png'
import PhoneIcon from '../public/images/phone-icon.png'
import MailIcon from '../public/images/mail-icon.png'
import TestimonialLeft from '../public/images/testimonial-left.svg'
import TestimonialRight from '../public/images/testimonial-right.svg'
import AboutUsVision from '../public/images/about-us-vision.png'
import LinkdeinIcon from '../public/images/linkdein-icon.png'
import aboutUsp1 from '../public/images/aboutUs-p1.png'
import aboutUsp2 from '../public/images/aboutUs-p2.png'
import aboutUsp3 from '../public/images/aboutUs-p3.png'
import aboutUsp4 from '../public/images/aboutUs-p4.png'
import aboutUsp5 from '../public/images/aboutUs-p5.png'

/*********          Header Menu Data            ********** */
export const pages = [
  {
    path: '/about-us',
    text: 'About Us',
  },
  {
    path: '/services',
    text: 'Services',
  },
  // {
  //   path: '/blogs',
  //   text: 'News & Blogs',
  // },
  {
    path: '/contact-us',
    text: 'Contact Us',
  },
]

export const siteName = 'Prixite'

/***********            Home Page Main Data             *********** */
export const homeData = {
  title: `${siteName}`,
  header: 'Transform Your Business With Us',
  headerImage: homeHeaderImage,
  heading: 'One-stop Solution to Your Business Needs',
  homeAim:
    'We aim to constantly bring innovative solutions to cater to our client’s requirements and expectations.',
  contactUsButtonText: 'Contact Us',
  videoButtonText: 'Watch Video',
  youtubeIcon: youtubeIcon,
  paragraphs: [
    {
      para: `Prixite is one online technology solutions provider company that is
            considered as a new breed of thinkers who is driven to create
            effective business solutions for its clients. We aspire to become
            our client’s first choice when it comes to being a world leader in
            the progress and advancement of businesses through digital
            platforms.`,
    },
    {
      para: `Our goal is to offer our clients complete customer satisfaction,
            growth, innovation, and a continuous path to evolve and grow within
            their industry. We aim to constantly bring innovative solutions to
            cater to our client’s requirements and expectations.`,
    },
    {
      para: `Our team of professionals is always on our client’s side offering
            them alluring and tailor-made solutions to the ever-changing
            landscape of their business industry to achieve innovative,
            scalable, customized, and cost-effective solutions to your business
            needs.`,
    },
  ],
}

/**********           News and Blogs Data             ********* */
export const newsAndBlogs = {
  title: `${siteName} - Blogs`,
  header: 'News & Blogs',
  heading:
    'We aim to constantly bring innovative solutions to cater to our client’s requirements and expectations.',
  viewButtonText: 'View All',
  mainBlog: {
    image: news1,
    title: 'In-house versus agency UX design',
    description:
      'Lorem ipsum is a placeholder text commonly used to demonstrate the visual. Text commonly used to demonstrate the visual',
    chipLabel: 'UX Design',
    readTime: '5 Mins Read',
  },
  blogs: [
    {
      image: news4,
      title: 'In-house versus agency UX design',
      description:
        'Lorem ipsum is a placeholder text commonly used to demonstrate the visual.',
      chipLabel: 'UX Design',
      readTime: '5 Mins Read',
    },
    {
      image: news2,
      title: 'Fastest Growing IT Company',
      description:
        'Lorem ipsum is a placeholder text commonly used to demonstrate the visual.',
      chipLabel: 'Startup',
      readTime: '5 Mins Read',
    },
    {
      image: news2,
      title: 'Fastest Growing IT Company',
      description:
        'Lorem ipsum is a placeholder text commonly used to demonstrate the visual.',
      chipLabel: 'Startup',
      readTime: '5 Mins Read',
    },
    {
      image: news4,
      title: 'Welcome to Prixite - Fastest Growing IT Company',
      description:
        'Lorem ipsum is a placeholder text commonly used to demonstrate the visual.',
      chipLabel: 'React Development',
      readTime: '5 Mins Read',
    },
    {
      image: news4,
      title: 'In-house versus agency UX design',
      description:
        'Lorem ipsum is a placeholder text commonly used to demonstrate the visual.',
      chipLabel: 'UX Design',
      readTime: '5 Mins Read',
    },
    {
      image: news2,
      title: 'Fastest Growing IT Company',
      description:
        'Lorem ipsum is a placeholder text commonly used to demonstrate the visual.',
      chipLabel: 'Startup',
      readTime: '5 Mins Read',
    },
    {
      image: news3,
      title: 'Welcome to Prixite - Fastest Growing IT Company',
      description:
        'Lorem ipsum is a placeholder text commonly used to demonstrate the visual.',
      chipLabel: 'Mobile App Development',
      readTime: '5 Mins Read',
    },
    {
      image: news4,
      title: 'Welcome to Prixite - Fastest Growing IT Company',
      description:
        'Lorem ipsum is a placeholder text commonly used to demonstrate the visual.',
      chipLabel: 'React Development',
      readTime: '5 Mins Read',
    },
  ],
}

/**********           Testimonials Data             ********** */
export const testimonialsData = {
  heading: 'Our Testimonials',
  leftImg: TestimonialLeft,
  rightImg: TestimonialRight,
  testimonials: [
    {
      image: 'https://www.tutorialrepublic.com/examples/images/clients/1.jpg',
      text: 'Prixite is one online technology solutions provider company that is considered as a new breed of thinkers who is driven to create effective business solutions for its clients. We aspire to become our client’s first choice when it comes to being a world leader in the progress and advancement of businesses through digital platforms.',
      name: 'Brandon Dorwart',
      designation: 'CEO Dupe Tech',
    },
    {
      image: 'https://www.tutorialrepublic.com/examples/images/clients/2.jpg',
      text: 'Prixite is one online technology solutions provider company that is considered as a new breed of thinkers who is driven to create effective business solutions for its clients. We aspire to become our client’s first choice when it comes to being a world leader in the progress and advancement of businesses through digital platforms.',
      name: 'Brandon Dorwart',
      designation: 'CEO Dupe Tech',
    },
    {
      image: 'https://www.tutorialrepublic.com/examples/images/clients/3.jpg',
      text: 'Prixite is one online technology solutions provider company that is considered as a new breed of thinkers who is driven to create effective business solutions for its clients. We aspire to become our client’s first choice when it comes to being a world leader in the progress and advancement of businesses through digital platforms.',
      name: 'Brandon Dorwart',
      designation: 'CEO Dupe Tech',
    },
  ],
}

/**********            Home Page Services Data          ********* */
export const servicesData = {
  servicesPageTitle: 'Services',
  servicesPageHeader: 'We are Offering the Amazing Services 🚀',
  servicesHeading: 'Our Services',
  servicesAim:
    'We aim to constantly bring innovative solutions to cater to our client’s requirements and expectations.',
  services: [
    {
      title: 'Web App Development',
      desc: 'Prixite being the exquisite web development brands offers innovative solutions to your web development needs in today’s dynamics.',
      img: webDevelopmentImage,
      path: '/web-development',
      buttonText: 'Learn More',
    },
    {
      title: 'Wordpress Development',
      desc: 'Prixite offers its clients superior quality WordPress solutions that helps them to create a compelling impact in the business world.',
      img: wordPressDevelopmentImage,
      path: '/wordpress-development',
      buttonText: 'Learn More',
    },
    {
      title: 'DevOps',
      desc: 'Prixite DevOps practices help clients achieve their goals without compromising on product environment and infrastructure capabilities.',
      img: devOpsImage,
      path: '/devops',
      buttonText: 'Learn More',
    },
    {
      title: 'Scraping',
      desc: "Prixite is one of the leading digital marketing service providers that believe in creating value-added solutions for our potential client's web data extraction needs.",
      img: scrapingImage,
      path: '/scraping',
      buttonText: 'Learn More',
    },
    {
      title: 'Python Experts',
      desc: 'Prixite is one of the top companies to provide full-stack python web development services to its clients worldwide.',
      img: pythonExpertImage,
      path: '/python-programming',
      buttonText: 'Learn More',
    },
    {
      title: 'Mobile App Development',
      desc: 'Prixite has extensive experience when it comes to creating digitally transformative and high-performing mobile apps.',
      img: mobileAppDevImage,
      path: '/mobile-application-development',
      buttonText: 'Learn More',
    },
    {
      title: 'Progressive Web App',
      desc: 'Prixite is one of the top PWA service providers to its clients with progressive tools and approaches to their business needs.',
      img: pwaImage,
      path: '/progressive-web-application',
      buttonText: 'Learn More',
    },
    {
      title: 'React Development',
      desc: 'Prixite is one of the top PWA service providers to its clients with progressive tools and approaches to their business needs.',
      img: reactDevImage,
      path: '/react-development',
      buttonText: 'Learn More',
    },
  ],
}

/**********             About Us Page Data            *************/
export const aboutUsPageData = {
  title: 'About Us',
  header: 'We are Changing the Whole Game',
  heading: 'Fastest Growing IT Company',
  aim: 'We aim to constantly bring innovative solutions to cater to our client’s requirements and expectations.',
  description: `Prixite is one online technology solutions provider company that is
  considered as a new breed of thinkers who is driven to create
  effective business solutions for its clients. We aspire to become
  our client’s first choice when it comes to being a world leader in
  the progress and advancement of businesses through digital
  platforms.`,
  visionTitle: 'Our Vision',
  visionAim:
    'We aim to constantly bring innovative solutions to cater to our client’s requirements and expectations.',
  visionImage: AboutUsVision,
  visionData: [
    {
      value: '30+',
      text: 'Years of Experience',
    },
    {
      value: '27',
      text: 'Offices Worldwide',
    },
    {
      value: '150',
      text: 'National Markets',
    },
    {
      value: '2M+',
      text: 'Clients a Year',
    },
  ],
}

/**********             About US Card Data               *********** */
export const aboutUsCardData = {
  aboutUsHeader: 'About Us',
  aboutUsHeading: 'Fastest Growing IT Company',
  aboutUsDescription:
    'Prixite is one online technology solutions provider company that is considered as a new breed of thinkers who is driven to create effective business solutions for its clients. We aspire to become our client’s first choice when it comes to being a world leader in the progress and advancement of businesses through digital platforms.',
  images: [
    {
      img: aboutUsp1,
      className: 'img-p1',
    },
    {
      img: aboutUsp2,
      className: 'img-p2',
    },
    {
      img: aboutUsp3,
      className: 'img-p3',
    },
    {
      img: aboutUsp4,
      className: 'img-p4',
    },
    {
      img: aboutUsp5,
      className: 'img-p5',
    },
  ],
}

/**********             Portfolio Page Data         ************** */
export const portfolioData = {
  title: `${siteName} - Portfolio`,
  header: 'PORTFOLIO',
  heading: 'Projects',
  projects: [
    {
      name: 'Project',
      description: 'Project Description',
      image: mobileAppDevImage,
    },
    {
      name: 'Project',
      description: 'Project Description',
      image: mobileAppDevImage,
    },
    {
      name: 'Project',
      description: 'Project Description',
      image: mobileAppDevImage,
    },
    {
      name: 'Project',
      description: 'Project Description',
      image: mobileAppDevImage,
    },
    {
      name: 'Project',
      description: 'Project Description',
      image: mobileAppDevImage,
    },
    {
      name: 'Project',
      description: 'Project Description',
      image: mobileAppDevImage,
    },
  ],
}

/*********          Clients Data                    ************* */
export const clientsData = {
  title: 'Prixite - Clients',
  header: 'Clients',
  heading: 'All Clients',
  clients: [
    {
      image: wall1,
      clientName: 'Client',
      projectName: 'Project',
      description: 'Description',
    },
    {
      image: wall1,
      clientName: 'Client',
      projectName: 'Project',
      description: 'Description',
    },
    {
      image: wall1,
      clientName: 'Client',
      projectName: 'Project',
      description: 'Description',
    },
    {
      image: wall1,
      clientName: 'Client',
      projectName: 'Project',
      description: 'Description',
    },
    {
      image: wall1,
      clientName: 'Client',
      projectName: 'Project',
      description: 'Description',
    },
    {
      image: wall1,
      clientName: 'Client',
      projectName: 'Project',
      description: 'Description',
    },
  ],
}

/**********             Portfolio Page Data         ************** */
export const blogData = {
  title: `${siteName} - Blog`,
  header: 'Blog',
  heading: 'All Blogs',
  blogs: [
    {
      name: 'Blog',
      description: 'Blog Description',
      image: mobileAppDevImage,
    },
    {
      name: 'Blog',
      description: 'Blog Description',
      image: mobileAppDevImage,
    },
    {
      name: 'Blog',
      description: 'Blog Description',
      image: mobileAppDevImage,
    },
    {
      name: 'Blog',
      description: 'Blog Description',
      image: mobileAppDevImage,
    },
  ],
}

/*********          Contact Us Page Data            ************* */
export const contactUs = {
  title: `${siteName} - Contact Us`,
  heading: 'Contact Us & Start Build Amazing Products',
}

/**********             Careers Page Data           ************* */
export const careersData = {
  title: `${siteName} - Careers`,
  heading: 'JOIN US',
  buttonText: 'Search Jobs',
}

//*********                 Jobs Page Data              ********** */
export const jobsData = {
  title: `${siteName} - Jobs`,
  heading: 'Jobs',
  jobs: [
    {
      name: 'Job name',
      image: mobileAppDevImage,
      description: 'Job Description',
    },
    {
      name: 'Job name',
      image: mobileAppDevImage,
      description: 'Job Description',
    },
    {
      name: 'Job name',
      image: mobileAppDevImage,
      description: 'Job Description',
    },
    {
      name: 'Job name',
      image: mobileAppDevImage,
      description: 'Job Description',
    },
    {
      name: 'Job name',
      image: mobileAppDevImage,
      description: 'Job Description',
    },
  ],
}

/*******        Web Development Data            ************* */
export const webDevelopment = {
  title: `${siteName} - Web Development`,
  header: 'Web App Development',
  heading:
    'Prixite being the exquisite web development brands offers innovative solutions to your web development needs in today’s dynamics.',
  description: [
    'To be a distinctive and top-notch brand in the competitive business world, every business requires a sound website that can leave an impact on the customer’s mind. A sound website is the need of the hour for the rapid progress and sustainability of the business. Prixite aims to utilize its expertise in understanding our potential customer’s vision and turning it into a believable output in the form of a compelling website that generates revenues and traffic for each of our worthy clients.',
    'Prixite truly understands the importance of a well-constructed website that may exceed your expectations when it comes to usability and performance. Having a team of experienced and professional full-stack web developers and designers, we offer our clients a variety of web development services such as UX expertise, inventive UI designs, updated programming language, incomparable DevOps, and the best full-stack developers to ensure the provision of cost-effective solutions to our clients. Our website development process is thoroughly systematic and streamlines according to the need and expectations of our clients.',
    'It starts with understanding the requirements and queries related to the business of our clients based on which we create the suitable timeline and plan of the project. Then comes the entire focus on creating a unique user experience and sophisticated web interface that truly resonates with the brand image of the clients. The third step involves developing and designing a custom-coded website with an innovative interface that conveniently covers your business need into a reliable brand image. And final steps involve the quality check, deploying, and maintenance of your website.',
    'We offer our clients progressive web development solutions that truly contribute to expanding their business by removing marketing obstacles and focusing on the leading key performance indicators of our client’s business that sets them apart from their competitors.',
  ],
}

/*************          WordPress Development Data      ***************  */
export const wordPressDevelopment = {
  title: `${siteName} - WordPress Development`,
  header: 'WordPress Development',
  heading:
    'Prixite offers its clients superior quality WordPress solutions helping them create a compelling impact in the business world.',
  para1:
    'WordPress is one of the extensively used tools for the content management system (CMS). It is quite easy to use and can be utilized to meet a variety of content-related requirements that includes event calendars, media management, news and blogging, and much more. Prixite is one platform that provides innovative and advanced WordPress services to its clients catering to their content management needs to large extent.',
  para2:
    'Prixite having a strong clientele all over the world provides advanced and innovative solutions to the WordPress development needs of its customers. Whether you want assistance with existing WordPress website customization and support or want to develop a new one Prixite is the one-stop solution for your WordPress development needs. Our experienced professionals are fully aware of the latest trends, tools, and technologies in the field of WordPress development delivering high-quality output to meet the expectations of our potential clients. By offering premium quality WordPress solutions to cater to our client’s business needs, we have helped so many businesses to create a significant impact in the digital world. Our key focus is to align our WordPress solutions to client’s objectives to help them achieve the desired business outcome and milestone.',
  serviceHeading:
    'Our WordPress service comes with a variety of built-in tools and options that allows the clients to experience easier and rapid content management. Some of the inventive WordPress tools and services involve:',
  services: [
    'Content Management with a user-friendly experience',
    'Integrations and WordPress Plugins',
    'Tailormade and Flexible Designs',
    'Responsive web design with mobile compatibility',
    'Search Engine Optimization',
    'WordPress Webhosting and Support',
    'WordPress Theme Built out',
    'WordPress Migration Services',
    'WordPress Web Maintenance and Security',
    'WordPress Web Project Management',
    'Customized Theme Coding such as (HTML, CSS, jQuery/JavaScript)',
    'Information Architecture and Website Designing',
  ],
}

/*************          DevOps Data      ***************  */
export const devOps = {
  title: `${siteName} - DevOps`,
  header: 'DevOps',
  heading:
    'Prixite DevOps practices help clients achieve their goals without compromising on product environment and infrastructure capabilities.',
  description: [
    'At Prixite, we help organizations to build efficient software and saying goodbye to manual processes. By embracing updated, automated, and agile ways of proceeding with your business processes we assist you in the progress of your business. Our DevOps consulting services will not only let make your business processes effective, speedy, reliable, and efficient but also will optimize your entire business structure more effectively. We take pride in offering our clients innovative DevOps assistance which enhances their business potential in terms of continuous integration, infrastructure automation, consistent delivery of outcomes. We aim to make it all possible for you by innovating faster and in a reliable way. Prixite allows you to stay in control, save money, and easily overcome the complexity of the dexterous culture of the DevOps world by offering you advanced and integrated solutions to your business needs.',
    'We offer our clients from all around the world DevOp services helping them to transform their IT value creation chain for their business by anchor aging the complete DevOp universe to our hands with utmost trust and dependability. Our team of expert professionals of DevOp will truly accelerate your software optimization chain. We make sure that with a thorough understanding of your business industry and processes we allow you to have sustained growth and continuous flow of operations smoothly and efficiently. If you are a new business and you are ready to transform the IT industry with your innovative business offerings guided by market-driven, skilled, and experienced DevOp experts, feel free to consult Prixite.',
  ],
  paraHeading:
    'Our advanced and inventive services being offered to clients includes:',
  paraList: [
    'DevOp as a full-fledged service',
    'Infrastructure Automation',
    'AWS consultation',
    'Consistent Integration and Delivery Assessment',
    'Designing and Strategy Planning',
    'Security Assessment',
    'Cloud Migration',
    'Training and Implementation',
    '24/7 Support Services',
  ],
}

/*************          Scraping Data      ***************  */
export const scrapingData = {
  title: `${siteName} - Scraping`,
  header: 'Scraping',
  heading: `Prixite is one of the leading digital marketing service providers that believe in creating value-added solutions for our potential client's web data extraction needs.`,
  description: `Prixite is one of the top digital marketing service providers to its extensive clientele all around the world.  The key to our success is providing customized solutions that fit your business needs by thoroughly understanding your target market and offering you a customized plan to achieve your goals. One of the most inventive and cost-effective solutions the business needs of our client when it comes to web data extraction is data scarping. Our entire objective is to make data scraping simple and accessible for our clients. We offer various services when it comes to data scrapping that can truly innovate and bring value to their business dynamics. These services include:`,
  paraList: [
    'Configuring and utilizing the data scrapper services by just clicking and pointing at the elements. There is no requirement for coding at all.',
    'Our data scraping software allows you to extract data from various websites having multiple-level navigation such as categories and subcategories, product pages, pagination, and much more.',
    'Our data scraping tool is designed in a way to deal with modern interfaced websites that use JavaScript frameworks and also allows clients to experience page scroll down, pagination handlers, Ajax requests, and much more.',
    'Our inventive data scrapping software also allows you to develop site maps from various types of selectors to experience tailored data extraction from different sites having different structures.',
    'Another amazing feature of our data scraping software is that it allows users to export the extracted data in CSV, XLSV, and JSON formats directly from the browser which you can easily access via API and webhooks. Or you may also use Dropbox to export the extracted data.',
  ],
}

/*************          Python Programming Data      ***************  */
export const pythonProgramming = {
  title: `${siteName} - Python Programming`,
  header: 'Python Programming',
  heading: `Prixite is one of the top companies to provide full-stack python web development services to its clients worldwide.`,
  details: [
    `Python is one of the greatest tools in the technology industry embodying the power of building inventive, faster, real-time, and scalable applications. Strengthen your back end with speedy and advanced Python programming languages offered by Prixite. We are being one of the leading python service providers all over the world aim to deliver world-class services to our clients in developing quality websites and mobile applications using innovative and advanced Python Development using Django framework and incentive cutting edge tools. Our team of expert professionals at Prixite believes in offering its potential clients superior quality customer service by establishing premium quality, advanced and collaborative project management systems, and operations. We help our clients in handling immense and high-speed data while enhancing the data exchange and retrieval performance via advanced and innovative enterprise solutions to their business requirements.`,
    `We anchorage the strength and advancement of our Python programming language services by establishing superior and high-quality performing web applications. Prixite takes pride in offering its clients advanced python services and solutions which are widely used and are considered a high-level programming language. It has a huge selection of preexisting libraries, frameworks, and simplicity that makes it quite a great fit for highly complicated web projects and applications. It is considered one of the most important and popular technology among business developers.`,
  ],
  description: `Prixite understands the importance of IT in the business industry and offers a full range of python services that includes Django development, Pyramid development, Flask development, and Zope development. In addition to this, We offer our potential clients with up to date and range of python services that includes`,
  paraList: [
    'Prototype Development',
    'Python Migration',
    'Python Independent Testing',
    'Python Application Development',
    'Machine Learning',
    'Python Backend Development and Support',
    'Data Science',
    'Python Maintenance and Support',
    'Internet of Things (IoT)',
  ],
}

/*************          Mobile Application Data      ***************  */
export const mobileAppDevelopment = {
  title: `${siteName} - Mobile Application Development`,
  header: 'Mobile Application Development',
  heading: `To improve your digital strategy and benefit from all the advantages of the mobile digital age, the mobile application`,
  details: [
    `Whether you are looking to develop a mobile application for tablets, smartphones or both Prixite got your back when it comes to mobile application development no matter which platform you want it to build on which smart device it is to be used on. We are a team of experts and offer our clients a wide range of innovative and advanced services to optimize their business processes and achieve the desired outcome and objective. We aim to provide our customers with cross-platform mobile applications that can perform on any smart device or platform. Clients who choose to work with us can be truly assured that their customized mobile application needs will be truly met and executed and their outcome will be completely secure, measurable, advanced, and inventive and entirely sustainable no matter on which platform it is developed and hosted.`,
    `We develop, design, and deliver mobile applications across all major and required platforms such as Android, BlackBerry, iOS (iPhone & iPad), and also Windows Mobile. Our expert professionals are there to understand your business needs and help you with an aspect of your need such as customized UX/UI design, business analysis, project management, custom codes, and most importantly quality assurance for complete end to end mobile application development solution to be truly delivered and experienced by its required audience in the world of technology.`,
  ],
  description: `In addition to these we offer our client a wide range of services associated with mobile app development involving:`,
  paraList: [
    'Complete business requirement analysis and interpretation',
    'UX testing and Quality User Experience',
    'Customized Design architecture and Wire Framing',
    'Advanced Project Management',
    'Professional Development Process and Extensive Integration Expertise',
    'Cross-Platform Mobile Application Development',
    'Vigilant Quality Check and Control',
    'Timely Delivery and Budget Friendly Services',
    'Complete Assistance in launching your app in App Store, Play Store, and other marketplaces.',
  ],
}

/*************          Progressive Web App Data      ***************  */
export const progressiveWebApp = {
  title: `${siteName} - Progressive Web Application`,
  header: 'Progressive Web Application',
  heading: `Prixite is one of the top PWA service providers to its clients with progressive tools and approaches to their business needs.`,
  details: [
    `Progressive web applications (PWA) are one of the most innovative solutions that are used by many business leaders in their relative industry. The development and progress of PWA allow businesses to have the effect of native mobile application experience in a browser. With the help of which your applications related to business and e-commerce websites perform relatively faster, gives better UX which results in the growth of your conversions. Prixite takes pride in developing a lot of successful PWA implementations for its clients according to their business model, requirements, and expectations and in return helped them generate more sales via the website.`,
    `PWA is an inventive solution to the dynamic business needs of our clients and it’s truly cost-effective and highly performant. It is indeed a great combination of highly performing sides of websites and native mobile apps. We completely understand the fact that no client and project are the same and require the utmost attention to details and expertise to solve their business needs. From the very beginning of the project, we tend to develop a relationship of trust and understanding with our clients and our team of experts make sure to understand the requirements of our clients quite intuitively.`,
  ],
  description: `We believe in offering our potential clients worldwide advanced, innovative, and updated PWA solutions that will truly enhance the efficiency and effectiveness of their business functions. Our wide variety of services includes:`,
  paraList: [
    'Customized Progressive Web Application for our clients',
    'Progressive Web Application for e-commerce business',
    'Initiating Migration to Progressive Web Application',
    'Complete UX Optimization',
  ],
  para: 'The technology, tools, and frameworks we use to ensure the quality service delivery of progressive web application to our clients includes Laravel, Angular, Vue, Lighthouse, and Workbox which makes us an ideal choice for our customer’s business needs.',
}

/*************          React Development Data      ***************  */
export const reactDevelopment = {
  title: `${siteName} - React Development`,
  header: 'React Development',
  heading: `Prixite is one of the top PWA service providers to its clients with progressive tools and approaches to their business needs.`,
  details: [
    `Progressive web applications (PWA) are one of the most innovative solutions that are used by many business leaders in their relative industry. The development and progress of PWA allow businesses to have the effect of native mobile application experience in a browser. With the help of which your applications related to business and e-commerce websites perform relatively faster, gives better UX which results in the growth of your conversions. Prixite takes pride in developing a lot of successful PWA implementations for its clients according to their business model, requirements, and expectations and in return helped them generate more sales via the website.`,
    `PWA is an inventive solution to the dynamic business needs of our clients and it’s truly cost-effective and highly performant. It is indeed a great combination of highly performing sides of websites and native mobile apps. We completely understand the fact that no client and project are the same and require the utmost attention to details and expertise to solve their business needs. From the very beginning of the project, we tend to develop a relationship of trust and understanding with our clients and our team of experts make sure to understand the requirements of our clients quite intuitively.`,
  ],
  description: `We believe in offering our potential clients worldwide advanced, innovative, and updated PWA solutions that will truly enhance the efficiency and effectiveness of their business functions. Our wide variety of services includes:`,
  paraList: [
    'Customized Progressive Web Application for our clients',
    'Progressive Web Application for e-commerce business',
    'Initiating Migration to Progressive Web Application',
    'Complete UX Optimization',
  ],
  para: 'The technology, tools, and frameworks we use to ensure the quality service delivery of progressive web application to our clients includes Laravel, Angular, Vue, Lighthouse, and Workbox which makes us an ideal choice for our customer’s business needs.',
}

/**************             Footer Data         ************ */
export const footerData = {
  copyright: 'Prixite © 2022. All Rights Reserved',
  details: [
    {
      icon: LocationIcon,
      desc: '4 Mozang Road, Near Family Hospital, Lahore, Pakistan',
    },
    {
      icon: PhoneIcon,
      desc: '042 37114925',
    },
    {
      icon: MailIcon,
      desc: 'hi@prixite.com',
    },
  ],
  info: {
    title: 'More Information',
    contactUs: [
      {
        text: 'About Us',
        path: '/about-us',
      },
      {
        text: 'Contact us',
        path: '/contact-us',
      },
    ],
  },
  joinUs: {
    title: 'Join Us On',
    links: [
      {
        icon: FacebookIcon,
        path: 'https://web.facebook.com/prixite/',
      },
      {
        icon: LinkdeinIcon,
        path: 'https://www.linkedin.com/company/prixite/mycompany/',
      },
    ],
  },
}

export const contactForm = {
  success: 'Submitted',
  error: 'Not submitted. Please try again!',
}

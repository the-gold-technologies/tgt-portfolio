import { Service, Technology, Project, TeamMember } from './types';

export const SERVICES: Service[] = [
  {
    id: 'custom-web',
    number: '01',
    title: 'Custom Website Development',
    description: 'Fully responsive, high-performance websites built from scratch tailored specifically to your target conversion flow.',
    details: [
      'Lead Generation Oriented Layouts',
      'High-Speed Loading & Core Web Vitals Optimization',
      'SEO-Friendly Architectural Layouts',
      'WhatsApp & Multi-channel Action Integrations',
      'Integrated Contact & Submission Dashboards'
    ]
  },
  {
    id: 'wordpress-cms',
    number: '02',
    title: 'WordPress & CMS Solutions',
    description: 'Manage your entire website content easily without any technical or coding knowledge.',
    details: [
      'WordPress Theme & Architecture Development',
      'Easy-to-use Blog & Post Customizers',
      'Content Updates & Dashboard Administration Panel',
      'Google Analytics Setup',
      'Custom Training Sessions'
    ]
  },
  {
    id: 'ecommerce-shopify',
    number: '03',
    title: 'E-commerce & Shopify Development',
    description: 'Start selling online instantly with secure checkout systems and catalog control panels.',
    details: [
      'Shopify & Custom E-commerce Builds',
      'Shopping Cart & Product Catalog Setup',
      'Payment Gateway Integration (Stripe, PayPal, etc.)',
      'Shipping & Local Delivery Integrations',
      'Inventory Control & Client Management Dashboards'
    ]
  },
  {
    id: 'web-apps',
    number: '04',
    title: 'Web Applications & Portals',
    description: 'Build enterprise-grade platforms to automate your workflow, connect databases, and scale operations.',
    details: [
      'Custom Client & Supplier Portals',
      'Internal Workflow Automation Platforms',
      'Integrated CRM & ERP Platforms',
      'Real-time Reporting & Business Intelligence Systems',
      'Highly-Secure Access Controls'
    ]
  },
  {
    id: 'ui-ux',
    number: '05',
    title: 'UI/UX Design',
    description: 'Intuitive layouts, interactive prototypes, and premium graphics designed to engage visitors.',
    details: [
      'Interactive Prototyping & Wireframes',
      'Custom Interface Elements',
      'Modern Harmonious Color Layouts',
      'User Journey & Conversion Rate Architecture'
    ]
  },
  {
    id: 'seo-architecture',
    number: '06',
    title: 'SEO-Friendly Architecture',
    description: 'Optimize page structure, speeds, schema markup, and meta-descriptions to rank higher on Google search results.',
    details: [
      'Basic On-Page SEO Configuration',
      'Google Search Console & Sitemap Indexing',
      'Optimized Loading Times & Code Splitting',
      'Mobile-First Layout Audits'
    ]
  },
  {
    id: 'support-maintenance',
    number: '07',
    title: 'Ongoing Support & Maintenance',
    description: 'Dedicated post-launch assistance keeping your servers, security certificates, and codes secure.',
    details: [
      '30-60 Days Post-Launch Support Packages',
      'Server Deployment & Monitoring Assistance',
      'Security Certificate Maintenance',
      'Minor Feature Updates'
    ]
  }
];

export const TECHNOLOGIES: Technology[] = [
  // Web & Software
  { name: 'Laravel', category: 'Web & Software', iconName: 'Php' },
  { name: 'Zend', category: 'Web & Software', iconName: 'Code' },
  { name: 'CodeIgniter', category: 'Web & Software', iconName: 'Flame' },
  { name: 'Flask', category: 'Web & Software', iconName: 'Terminal' },
  { name: 'Django', category: 'Web & Software', iconName: 'Python' },
  { name: 'Express', category: 'Web & Software', iconName: 'Server' },
  { name: 'Nest JS', category: 'Web & Software', iconName: 'Cpu' },
  { name: 'jQuery', category: 'Web & Software', iconName: 'Layers' },
  { name: 'React JS', category: 'Web & Software', iconName: 'Atom' },
  { name: 'Vue JS', category: 'Web & Software', iconName: 'Hexagon' },
  { name: 'Node.js', category: 'Web & Software', iconName: 'Code' },
  { name: 'PostgreSQL', category: 'Web & Software', iconName: 'Database' },
  { name: 'MongoDB', category: 'Web & Software', iconName: 'FolderOpen' },
  { name: 'Ruby on Rails', category: 'Web & Software', iconName: 'Gem' },
  { name: 'Bootstrap', category: 'Web & Software', iconName: 'Grid' },

  // CMS
  { name: 'Shopify', category: 'CMS & Platforms', iconName: 'ShoppingBag' },
  { name: 'Wordpress', category: 'CMS & Platforms', iconName: 'Globe' },

  // Mobile & BI & IoT
  { name: 'iOS Swift', category: 'Mobile, BI & IoT', iconName: 'Smartphone' },
  { name: 'Android Kotlin', category: 'Mobile, BI & IoT', iconName: 'Smartphone' },
  { name: 'Sensors & Actuators', category: 'Mobile, BI & IoT', iconName: 'Settings' },
  { name: 'Cloud Computing', category: 'Mobile, BI & IoT', iconName: 'Cloud' },
  { name: 'Wireless Protocols', category: 'Mobile, BI & IoT', iconName: 'Wifi' },
  { name: 'AI & ML', category: 'Mobile, BI & IoT', iconName: 'Bot' },
  { name: 'Power BI', category: 'Mobile, BI & IoT', iconName: 'BarChart' },
  { name: 'Tableau', category: 'Mobile, BI & IoT', iconName: 'PieChart' },

  // Staff Augmentation
  { name: 'MERN Architects', category: 'Staff Augmentation', iconName: 'Users' },
  { name: 'MEAN Stack Specialists', category: 'Staff Augmentation', iconName: 'Users' },
  { name: 'Flutter Devs', category: 'Staff Augmentation', iconName: 'Smartphone' },
  { name: 'React Native Devs', category: 'Staff Augmentation', iconName: 'Smartphone' },
  { name: '.NET Engineers', category: 'Staff Augmentation', iconName: 'Code' },
  { name: 'Java Engineers', category: 'Staff Augmentation', iconName: 'Coffee' },
  { name: 'Python Scientists', category: 'Staff Augmentation', iconName: 'Binary' },
  { name: 'SAP Consultants', category: 'Staff Augmentation', iconName: 'Network' },
  { name: 'Data Engineers', category: 'Staff Augmentation', iconName: 'Database' },
  { name: 'QA Engineers', category: 'Staff Augmentation', iconName: 'ShieldCheck' }
];

export const PROJECTS: Project[] = [
  {
    title: 'Corporate Websites',
    category: 'Lead Gen',
    description: 'Build credibility, present corporate profiles, and generate high-quality business inquiries organically.',
    details: [
      'Tailored corporate profile architecture',
      'Advanced Lead generation capture nodes',
      'Integrated maps, analytics, and contact systems',
      'Optimized loading times'
    ],
    mockupType: 'laptop',
    features: ['Lead Generation', 'Fast Loading', 'SEO Optimized']
  },
  {
    title: 'E-Commerce Stores',
    category: 'E-commerce',
    description: 'Turn visitors into active customers with optimized, seamless shopping and checkout flows.',
    details: [
      'Frictionless shopping checkout panels',
      'Integrated payment gateways (Stripe, PayPal, etc.)',
      'Custom inventory and orders controller',
      'Admin catalog management panel'
    ],
    mockupType: 'laptop',
    features: ['Shopify', 'Secure Checkout', 'Product Catalog']
  },
  {
    title: 'Custom Portals & Web Applications',
    category: 'Business Apps',
    description: 'Automate manual business processes, improve workplace efficiency, and scale operations.',
    details: [
      'Centralized client & supplier portals',
      'Secure document sharing vaults',
      'Real-time reporting metrics dashboard',
      'Workflow trigger automations'
    ],
    mockupType: 'laptop',
    features: ['Workflow Automation', 'Client Portal', 'Custom API']
  },
  {
    title: 'Enterprise Solutions',
    category: 'Enterprise Tech',
    description: 'Bespoke ERPs, custom CRMs, BI Dashboards, Inventory Control systems, and AI-powered automation platforms.',
    details: [
      'Integrated enterprise resource controllers',
      'Custom CRM customer dashboards',
      'Advanced Business Intelligence dashboards',
      'Inventory control and real-time alerts tracking'
    ],
    mockupType: 'laptop',
    features: ['ERP / CRM', 'BI Dashboards', 'AI Automations']
  },
  {
    title: 'Mobile Apps & IoT',
    category: 'Mobile Apps',
    description: 'High-performance native and cross-platform mobile applications integrated with smart device ecosystems.',
    details: [
      'Native iOS (Swift) & Android (Kotlin) development',
      'Cross-platform Flutter & React Native apps',
      'Hardware integration & IoT sensor connectivity',
      'Seamless UI/UX for touch interfaces'
    ],
    mockupType: 'laptop',
    features: ['iOS & Android', 'Cross-Platform', 'Smart Devices']
  }
];

export const TEAM: TeamMember[] = [
  {
    name: 'Meghna Tiwari',
    role: 'Founder & CEO',
    tagline: 'The fuel that runs the company',
    bio: 'Guiding TGTs strategic vision with a decade of leadership in building next-gen technological infrastructure.',
    initials: 'MT',
    email: 'meghna@tgt.company',
    avatar: 'https://api.dicebear.com/7.x/micah/svg?seed=Meghna&backgroundColor=b6e3f4'
  },
  {
    name: 'Saubhagyaa R Swain',
    role: 'Co-Founder / Director',
    tagline: 'The Powerhouse of the company',
    bio: 'Overseeing global operations, strategic alliances, and commercial strategy to ensure scalable growth.',
    initials: 'SS',
    email: 'saubhagyaa@tgt.company',
    avatar: 'https://api.dicebear.com/7.x/micah/svg?seed=Saubhagyaa&backgroundColor=c0aede'
  },
  {
    name: 'Mitali Gulati',
    role: 'CGO',
    tagline: 'Ensures business grows consistently',
    bio: 'Championing global scaling programs, partnership models, and strategic client onboarding across continents.',
    initials: 'MG',
    email: 'mitali@tgt.company',
    avatar: 'https://api.dicebear.com/7.x/micah/svg?seed=Mitali&backgroundColor=ffdf00'
  },
  {
    name: 'Chetan Saini',
    role: 'CTO',
    tagline: 'Chief Developer, handles all projects',
    bio: 'Architecting ultra-secure code, directing engineering teams, and supervising multi-platform rollouts.',
    initials: 'CS',
    email: 'chetan@tgt.company',
    avatar: 'https://api.dicebear.com/7.x/micah/svg?seed=Chetan&backgroundColor=ffd5dc'
  },
  {
    name: 'Parusha',
    role: 'Manager - Pre Sales',
    tagline: 'Bridging client needs with solutions',
    bio: 'Translating client ideas into sound technical blueprints, managing early scope definition.',
    initials: 'PR',
    email: 'parusha@tgt.company',
    avatar: 'https://api.dicebear.com/7.x/micah/svg?seed=Parusha&backgroundColor=d1d4f9'
  },
  {
    name: 'Ayush',
    role: 'Tech Lead - IT',
    tagline: 'Leads end-to-end technical architecture',
    bio: 'Leading developer pods and building robust backends with bulletproof architecture.',
    initials: 'AY',
    email: 'ayush@tgt.company',
    avatar: 'https://api.dicebear.com/7.x/micah/svg?seed=Ayush&backgroundColor=c0aede'
  },
  {
    name: 'Varun',
    role: 'Tech Lead - Mobile App',
    tagline: 'Handles all things Technical & Mobile',
    bio: 'Architecting swift native and cross-platform apps with premium UI elements.',
    initials: 'VR',
    email: 'varun@tgt.company',
    avatar: 'https://api.dicebear.com/7.x/micah/svg?seed=Varun&backgroundColor=ffdf00'
  },
  {
    name: 'Sudeesh',
    role: 'Developer - React',
    tagline: 'Delivering robust, user-centric web solutions',
    bio: 'Refining complex frontends with premium styling, smooth micro-animations, and fast page speeds.',
    initials: 'SK',
    email: 'sudeesh@tgt.company',
    avatar: 'https://api.dicebear.com/7.x/micah/svg?seed=Sudeesh&backgroundColor=b6e3f4'
  }
];

export const CLIENTS = [
  { name: 'Kumar Power' },
  { name: 'Cinemac Animations' },
  { name: 'Centrok' },
  { name: 'Vastu Experts' },
  { name: 'Counsel India' },
  { name: 'PCT Suite' },
  { name: 'Encotec' },
  { name: 'Quanidata' },
  { name: 'BirCredit Solution' },
  { name: 'UnivDatos' },
  { name: 'The Net Gallery' },
  { name: 'Label' },
  { name: 'NewGen IT' },
  { name: 'Great Water' },
  { name: 'Vincitore' },
  { name: 'The Golden Tree' },
  { name: 'Beacon' },
  { name: 'My Weekend Trip' }
];

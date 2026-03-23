export const projectsData = [
  {
    id: "myeiksagar",
    title: "Myeiksagar_web",
    year: "2024",
    tech: "Web / Python",
    description: "A dynamic web application built using Python to showcase resources, culture, or services related to Myeik. It features a responsive layout and robust backend integration optimized for seamless content delivery.",
    image: "/projects/new_myeiksagar_banner.webp",
    color: "bg-slate-100",
    demoUrl: "https://myeik.vercel.app/",
    githubUrl: "https://github.com/hanzayarsoe/Myeiksagar_web",
    details: { role: "Full Stack Developer", architecture: "MVC", packages: ["Django", "PostgreSQL", "Bootstrap", "Gunicorn"], businessLogic: "Handles user authentication, content management for Myeik's local resources, and dynamic serving of cultural information through a scalable web backend." }
  },
  {
    id: "hr",
    title: "HR System",
    year: "2025",
    tech: "Flutter / Dart",
    description: "An efficient human resources management system engineered in Flutter. It focuses on high-performance state management and secure handling of personnel records for internal business administration.",
    image: "/projects/hr_system_banner_1773819395260.webp",
    color: "bg-[#FFD6A5]",
    details: { role: "Mobile Developer", architecture: "Clean Architecture", packages: ["riverpod", "dio", "freezed", "go_router", "flutter_secure_storage"], businessLogic: "Manages employee lifecycles, payroll integrations, attendance tracking via geofencing, and leave requests. It uses offline-first capabilities for uninterrupted HR management." }
  },
  {
    id: "point_plus",
    title: "Point Plus",
    year: "2025",
    tech: "Flutter / Dart",
    description: "A high-speed utility application designed for point-of-sale calculations or reward systems. Utilizing Flutter enables beautiful cross-platform UI and extremely low latency processing for real-time transactions.",
    image: "/projects/new_point_plus_banner.webp",
    color: "bg-[#2C2B29]",
    playStoreUrl: "https://play.google.com/store/apps/details?id=app.digitalbase.point_plus&hl=en",
    appStoreUrl: "https://apps.apple.com/us/app/point-plu%24/id6757375059",
    details: { role: "Lead Mobile App Developer", architecture: "MVVM", packages: ["provider", "sqflite", "http", "shared_preferences", "qr_code_scanner"], businessLogic: "Processes loyalty points securely, integrates with POS hardware APIs, generates localized QR codes for customer rewards, and syncs transaction data securely with the backend." }
  },
  {
    id: "merchant",
    title: "Merchant System",
    year: "2025",
    tech: "Flutter / Dart",
    description: "A robust back-office application built for inventory and merchant management. Leveraging Flutter, it effectively handles cross-platform merchant interfaces and intricate business logic optimizations.",
    image: "/projects/new_merchant_system_banner.webp",
    color: "bg-[#FF6B6B]",
    playStoreUrl: "https://play.google.com/store/apps/details?id=app.digitalbase.merchant&pcampaignid=web_share",
    appStoreUrl: "https://apps.apple.com/us/app/point-plus-merchant/id6757380373",
    details: { role: "Mobile Developer", architecture: "Clean Architecture (BLoC)", packages: ["flutter_bloc", "equatable", "graphql_flutter", "cached_network_image"], businessLogic: "Provides merchants with detailed analytics dashboards, real-time inventory tracking, order fulfillment workflows, and multi-branch management using complex state management." }
  },
  {
    id: "myay_agent_web",
    title: "Myay Agent Web",
    year: "2025",
    tech: "Flutter / Dart (Web)",
    description: "A comprehensive property and land management web application. It features GPS-based property mapping, user authentication, team/member group management, and real-time syncing of property listings from a backend API.",
    image: "/projects/new_myay_agent_banner_v2.webp",
    color: "bg-[#FF9800]",
    githubUrl: "https://github.com/hanzayarsoe/myay_agent_web",
    details: { 
      role: "Lead Frontend Developer", 
      architecture: "Clean Architecture", 
      packages: ["flutter_bloc", "google_maps_flutter", "geolocator", "dio", "shared_preferences"], 
      businessLogic: "Integrates precise GPS measuring points for land, manages complex member and property group states, securely handles auth, and builds highly interactive responsive map UIs for web." 
    }
  }
];

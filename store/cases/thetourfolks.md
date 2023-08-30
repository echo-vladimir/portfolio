---
title: "The Tour Folks"
date: "2023-07-30"
lang: "en"
size: "L"
tags: ["Full-Cycle Development", "UX/UI Design"]
country: "Italy"
cover: "https://res.cloudinary.com/dlwvibxw6/image/upload/q_auto,f_auto/v1693401905/cover_nczgbg"
description: "Milan Tours Booking System"
stack:
  [
    "TypeScript",
    "TRPC",
    "Yarn",
    "Zod",
    "React.js",
    "React Query",
    "Next.js",
    "Tailwind",
    "Ant Design",
    "PostCSS",
    "PrismaORM",
    "PostgreSQL",
    "ESlint",
    "Prettier",
    "Figma",
    "Photoshop",
  ]
---

- This app is the result of intensive work over the course of four to five
  months, with a focal point on creating an efficient booking system for tours
  in and around Milan. The main objective was to craft a bespoke booking system
  from scratch, addressing the client's distinct requirements. Initially, an
  optimized static RWD site for bookings was established. To enhance
  functionality, various payment methods were integrated using the Stripe
  adapter, and a specialized CRM system was set up, designed for roles such as
  editor, promoter, manager, and others. This system not only simplifies order
  handling but also enables the team to promptly cater to client needs.
  Promoters have the convenience to add tourists to groups right from the
  streets, ensuring that both street sign-ups and online reservations merge
  seamlessly into the same tour groups. On top of these features, an advanced
  WYSIWYG tool was introduced for effortless content management.
- Another distinctive feature of the platform is the ability for clients, after
  choosing a specific tour, to decide on the time group of the tour. This
  allows, for example, families or friends to choose times when there are fewer
  people, ensuring a more individual and comfortable travel experience. Why was
  this mechanism included? It adds flexibility to the booking process, allowing
  customers to maximize their experience according to their preferences.

</br>

- **Planning**
  - After thorough discussions and understanding the client's requirements for
    the Milan tour booking app, a specific strategy was laid out to provide an
    intuitive and efficient service. A technology stack was chosen that best
    suited the project's goals, the timeframe, and the fact that I was the sole
    developer. Additionally, a brief competitive analysis was undertaken to
    gauge the market landscape and key competitors. Based on this, a clear
    development roadmap was drafted.

</br>

- **Design**
  - In many sites catering to small and medium businesses, there's often an
    unnecessary plethora of features. Instead, we championed minimalism, with
    design cues like the unique marble fractures. We started with paper sketches
    but quickly transitioned to a low-fidelity prototype due to time
    constraints, which allowed the client to grasp the information structure.
    From there, we transitioned directly to coding, making design adjustments
    during the development phase. While we had numerous innovative ideas,
    prioritizing a swift launch meant deferring some to future updates.

</br>

- **Frontend**
  - Rapid Evolution: Given the time constraints, the design process was agile.
    Transitioning swiftly from initial paper sketches to low-fidelity prototypes
    ensured the client's early engagement. Subsequent stages focused on direct
    web design, accommodating iterative feedback and immediate adjustments.
  - To maintain consistency and ensure a seamless user interface, the CRM
    benefited from the structured Ant Design system. The main website,
    meanwhile, was crafted using TailwindCSS, ensuring a fluid and modern
    aesthetic.

</br>

- **Development**
  - TypeScript: Chosen for its robust type-checking capabilities and a
    preference for solo development. TypeScript minimizes runtime errors, making
    it easier to debug and maintain as a solo developer.
  - tRPC: Valued for its dual-sided type usage, enhancing efficiency in solo
    development environments. Its integration with React Query optimizes remote
    procedure calls, streamlining the development process.
  - Next.js: Recognized for SEO pre-rendering, this framework offers a
    harmonious blend of SSR and SPA, ideal for the CRM's admin panel where
    performance takes precedence over SEO.
  - Prisma & PostgreSQL: Opting for Prisma ORM ensured seamless interaction with
    PostgreSQL. This selection was also influenced by Prisma's convenient
    model-to-type import system.

</br>

- **Quality**
  - In the project, I used tools like ESLint and Prettier, combined with
    TypeScript helped to make the code safer by catching errors early. With
    these tools, the code quality improved, making it more reliable.

</br>

- **Deployment**
  - Set up the application on a Linux-based environment.
  - Employed Nginx as a reverse proxy to facilitate faster response times and
    accommodate larger traffic influx.
  - Configured DNS settings for streamlined domain-to-IP mapping and enhanced
    access speed.
  - Prioritized server security with robust configurations to ward off potential
    threats.
  - Established a CI/CD pipeline via GitHub, allowing for continuous and
    seamless updates in line with the evolving codebase.

</br>

<a href="https://thetourfolks.com/" target="_blank" >Release</a>

<figure>
    <img alt="Landing page with layered video elements creating a dynamic visual experience." src="https://res.cloudinary.com/dlwvibxw6/image/upload/q_auto,f_auto/v1693402517/TheTourFolks1_okxmqw.png"/>
    <figcaption>Dynamic Landing Page</figcaption>
</figure>

<figure>
    <img alt="Design sample with marble fractures intertwined with minimalist accents." src="https://res.cloudinary.com/dlwvibxw6/image/upload/q_auto,f_auto/v1693402562/TheTourFolks2_g51mlf.png"/>
    <figcaption>Marble & Minimalism RWD Design Showcase</figcaption>
</figure>

<figure>
    <img alt="Blog posts with clean formatting and visual emphasis." src="https://res.cloudinary.com/dlwvibxw6/image/upload/q_auto,f_auto/v1693402562/TheTourFolks3_pbllss.png"/>
    <figcaption>Blog Posts</figcaption>
</figure>

<figure>
    <img alt="In-depth view of a single blog post showcasing its layout and content." src="https://res.cloudinary.com/dlwvibxw6/image/upload/q_auto,f_auto/v1693402562/TheTourFolks4_rrrzrx.png"/>
    <figcaption>Hover Blog Post View</figcaption> 
</figure>

<figure>
    <img alt="Interactive WYSIWYG editor for crafting content." src="https://res.cloudinary.com/dlwvibxw6/image/upload/q_auto,f_auto/v1693402562/TheTourFolks5_npeygp.png"/>
    <figcaption>WYSIWYG Post Editor</figcaption>
</figure>

<figure>
    <img alt="Interface samples for ticket purchasing experience." src="https://res.cloudinary.com/dlwvibxw6/image/upload/q_auto,f_auto/v1693402562/TheTourFolks6_d8uz1s.png"/>
    <figcaption>Ticket Purchase Interface</figcaption>
</figure>

<figure>
    <img alt="CRM screens tailored for a specific user role." src="https://res.cloudinary.com/dlwvibxw6/image/upload/q_auto,f_auto/v1693402562/TheTourFolks7_lfxyox.png"/>
    <figcaption> Role-Specific CRM Screens</figcaption>
</figure>

<figure>
    <img alt="Tour group status tracking interface for a particular role." src="https://res.cloudinary.com/dlwvibxw6/image/upload/q_auto,f_auto/v1693402566/TheTourFolks8_lcfccv.png"/>
    <figcaption> Tour Group Tracking</figcaption>
</figure>

<figure>
    <img alt="Tabular representation for order management." src="https://res.cloudinary.com/dlwvibxw6/image/upload/q_auto,f_auto/v1693402581/TheTourFolks9_lxh8yn.png"/>
    <figcaption>Order Control Table</figcaption>
</figure>

<figure>
    <img alt="Interface for creating tours with user role settings in RBAC." src="https://res.cloudinary.com/dlwvibxw6/image/upload/q_auto,f_auto/v1693402581/TheTourFolks10_iokwwt.png"/>
    <figcaption>Tour Creation & RBAC Options</figcaption>
</figure>

<figure>
    <img alt="Distinctive UI elements and widgets." src="https://res.cloudinary.com/dlwvibxw6/image/upload/q_auto,f_auto/v1693402588/TheTourFolks12_fpksyg.png"/>
    <figcaption>Some Interface Components</figcaption>
</figure>

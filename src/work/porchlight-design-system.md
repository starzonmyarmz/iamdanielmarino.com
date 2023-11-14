---
title: Porchlight Design System
blurb: A case study detailing detailing the creation of a design system to unite individuals at Harvest on a common visual language.
order: 1
---

Recognizing the need for a unified design strategy across its product line, Harvest tackled challenges such as disparate user interfaces, extended design cycles, and the struggle to maintain a consistent brand identity.

Over the span of a year, we established processes, introduced new work tools, and laid the groundwork for the Porchlight design system. This initiative was implemented with dedicated design and engineering resources specifically allocated to the design system. Our journey involved developing a systematic approach, facilitating ongoing progress amidst a substantial flow of concurrent tasks and evolving priorities.

![](/img/work/pds-logo.png)

My responsibility was to spearhead the creation of the design system, overseeing a dedicated team to bring it to fruition. I played a key role in UX/UI design, engineering, management, and documentation of the design system, ensuring its accessibility in design, and successfully integrating it across our product portfolio.

## The Problem

The absence of a comprehensive design system has resulted in a disjointed user experience. Ad-hoc approaches to website technology and design have led to fragmented workflows and inconsistent brand encounters. Here are the identified issues:

### Lack of Guidelines and Direction

- **Objective:** Align our teams by providing a structured and guided approach to product development.
- **Solution:** Introduce comprehensive guidelines to streamline the creation of products.

### Elimination of Component Duplication

- **Objective:** Expedite the design and development process by reducing redundancy in common components.
- **Solution:** Implement a ready-made library and standardized patterns to enable teams to create and test layouts more efficiently.

### Poor Accessibility

- **Objective:** Enhance the accessibility and inclusivity of our products.
- **Solution:** Integrate accessibility features into our component libraries, addressing both design and code repositories to ensure a more universally accessible user experience.

### Inconsistencies Across Products

- **Objective:** Improve brand perception and user trust through consistent experiences.
- **Solution:** Establish uniform experiences that cater to everyone, enabling users to achieve their goals seamlessly.

By addressing these concerns and implementing a robust design system, we aim to create a more cohesive and user-friendly environment, fostering better collaboration among teams and elevating our overall brand image.

## The Challenges

While the incorporation of a Design System holds significant potential for enhancing Harvest, our team faces several notable challenges in its adoption:

- **Complex Migration Process:** Transitioning to a design system poses a formidable challenge due to the extensive number of components distributed across various products and toolchains. The sheer scale of this migration demands careful planning and execution.
- **Ongoing Commitment to Maintenance:** Recognizing that a design system is a dynamic entity, sustained commitment from leadership is crucial. Regular maintenance, requiring dedicated time within our project cadence, is imperative to ensure the system's continued relevance and effectiveness.
- **Decision-Making for System Evolution:** The maintenance process includes decisions about incorporating new patterns, modifying existing ones, and potentially phasing out outdated patterns. Apart from the actual implementation, significant time and effort are required to facilitate team discussions and secure buy-in for these decisions. This collaborative aspect is integral to the system's evolution.

Addressing these hurdles strategically will pave the way for a smoother integration of the Design System into our workflow, ultimately optimizing our design and development processes.

## UI Inventory

To gain deeper insights into the current landscape of our design ecosystem, we initiated a comprehensive UI Inventory focusing on our key interface components. We meticulously documented unique instances of critical design assets, encompassing elements such as typography, buttons, icons, input forms, drop-downs, etc., and centralized them within a collaborative Figma file.

This meticulous examination uncovered a multitude of inconsistencies within our design assets, underscoring the imperative for a more methodical approach to documenting, communicating, and sustaining our design system.

![](/img/work/pds-inventory.png)

The inventory process proved instrumental in highlighting discrepancies and incongruities throughout our site and product, establishing a robust foundation for our subsequent design system endeavors. Armed with the audit findings, we curated a list of core components that would form the cornerstone of our design system.

Key activities in this phase included:

- **Researching Best Practices:** Delving into other design systems and interfaces to glean insights into common practices and draw inspiration.
- **Analyzing Audit Instances:** Scrutinizing the instances and use cases identified during the audit, engaging in thoughtful ideation to formulate solutions aligned with our overarching goals.
- **Standardization of Components:** Unifying diverse variations of components, retaining only the essential elements. For instance, we found over 60 variations of buttons!

This approach not only enhances the cohesiveness of our design elements but also positions us to cultivate a more efficient and harmonized design system.

## Foundations

Critical to the success of the system was the alignment of all our teams on the foundations. Porchlight is structured to be scaled, meaning that our foundational system needed to account for every potential UI element. Our foundations include a grid system, breakpoints, spacing, and color systems.

![](/img/work/pds-foundations.png)

In addition, we introduced a typescale based on display headings, utility headings, paragraph styles, and supporting styles. This comprehensive approach ensures scalability and consistency.

![](/img/work/pds-colors.png "Our color scale enables a branded palette that remains flexible with light and dark color variations while adhering to WCAG AA minimum contrast accessibility standards.")

## Components

We've created a comprehensive set of reusable interface elements for integration throughout Harvest products. These elements are constructed on a solid foundation to ensure consistency and durability. They prioritize accessibility, responsiveness, and adherence to Harvest branding, thereby maintaining a uniform experience across our product range. Notable examples include buttons, form inputs, grids, and tables.

![](/img/work/pds-buttons.png)

To enhance user understanding, each component comes with detailed interaction examples, clearly illustrating expected interactive states. These are complemented by specific specifications covering tab stops, keyboard control requirements, spacing, and application.

Moreover, each component undergoes meticulous refinement to accommodate additional breakpoints. This meticulous process ensures our components perform seamlessly across a diverse range of devices, allowing for a consistent and reliable user experience without the need for unnecessary adjustments.

![](/img/work/pds-responsive.png)

## Accessibility

One of Harvest's design principles is _Treat customers like real humans_. We were insistent on making sure we built components to be accessible to customers with disabilities. Each component was designed with accessibility in mind, striving to comply with WCAG AA accessibility standards.

![](/img/work/pds-a11y.png)

We aimed to involve all internal teams in the process by offering transparent explanations, comprehensive documentation, and educational materials about the UX team's initiatives to develop an inclusive system.

## Workshop Environment

Brad Frost emphasizes the significance of establishing and sustaining a design system in a workshop setting, as discussed in his article on creating a [frontend workshop environment](https://bradfrost.com/blog/post/a-frontend-workshop-environment/). Our firsthand experience revealed the challenges of maintaining design and code consistency across various products, prompting us to develop Porchlight in its dedicated environment.

Our choice was to construct Porchlight using [Storybook](https://storybook.js.org/), an open-source, versatile tool enabling the creation of an interactive pattern library for code in isolation. Storybook is compatible with all major frontend frameworks, facilitating the documentation of use cases as stories and offering seamless sharing and reuse.

Within our workshop environment, we seamlessly incorporate integration tests using Puppeteer, perform visual regression testing through Chromatic, and implement code linting with Prettier and Stylelint. These tools collaborate harmoniously, ensuring that our work consistently meets and surpasses high-quality standards. This allows us to feel confident in using Porchlight in our products.

## Documentation

Effective component documentation is pivotal for a functional library, enabling swift and uniform decision-making for everyone involved. Our aim was to produce comprehensive documentation covering every facet of our design system, ensuring it is well-organized, consistent, and user-friendly.

Working closely with our design and engineer partners, we created and maintain documentation resources in Storybook, ensuring that we included our design principles, quick start guides, accessibility standards and best practices for designing and testing.

![](/img/work/pds-principles.png "**Design principles** serve as a guiding force in the development of new features or products using Porchlight. This ensures a unified direction, enabling everyone to work towards the same goal, facilitated by the design system.")

![](/img/work/pds-guidelines.png "**Guidelines** serve as essential knowledge for Harvesters, detailing optimal utilization of the design system. They explain our approach to crafting and constructing Harvest products. These encompass topics such as accessibility, voice and tone, icons, printing, and more.")

## Tracking Progress

To efficiently manage and communicate the progress of tasks related to the implementation of Porchlight into our products, we leveraged GitHub Projects, providing universal accessibility within the Harvest team. GitHub Issues were generated to categorize and address specific tasks, and these were then assigned based on their priority. This streamlined approach allowed us to report real-time progress to stakeholders, providing them with access to all pertinent information. This comprehensive system ensured a smooth transition and enhanced visibility into the implementation process.

![](/img/work/pds-coverage.png "During the rollout phase of Porchlight into our products, a [custom script](https://gist.github.com/starzonmyarmz/204fbabbbe586788db2649e7181443d5) was developed to facilitate the comparison of outdated implementations against Porchlight components. This data was integrated into a Mode dashboard, providing us with consumption metrics.")

## The Future

Harvest has successfully implemented a design system that not only tackled the challenges we encountered but also strategically positioned us to deliver a seamless and user-friendly experience across all our products.

Our design system remains an evolving project. We continuously iterate, adapt, and glean valuable insights from the ongoing process. This dynamic approach has established a robust foundation, significantly enhancing our team's efficiency, maintaining consistency, and promoting standardization.

Ongoing maintenance efforts encompass several key aspects:

- Expanding our component library by incorporating more intricate components.
- Nurturing processes and adhering to best practices for documentation maintenance to ensure our library remains current and synchronized, bridging the design and code aspects seamlessly.
- Advocating awareness among teams and encouraging widespread adoption and contribution to the documentation.

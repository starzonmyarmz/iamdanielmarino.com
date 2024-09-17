---
title: Saving and Sharing Harvest Reports
blurb: Elevating productivity through improved reporting capabilities.
order: 2
permalink: /work/{{title | slugify}}
tags: work
---

[Harvest](https://getharvest.com) identified a crucial need to improve its reporting module based on customer churn feedback. Customers expressed challenges in efficiently accessing and sharing personalized reports, leading to reduced meaningful interaction with the platform and an increased risk of churn.

Over a four-month period in 2023, a dedicated team of customer experience professionals and engineers worked together on solving customer churn by introducing report-saving and sharing features, enhancing user productivity and collaboration. The process involved customer research, iterative design, and close collaboration with select customers to ensure their needs were met.

My role encompassed active participation in customer research, the design and prototyping of interactive user flows, and collaboration with engineers during the implementation phase.

## Problem

The primary challenge identified was the repetitive nature of generating custom reports, creating unnecessary barriers to meaningful utilization of the reporting section. This issue particularly impacted project managers and administrators continually seeking insights from Harvest reports. Two core objectives were identified:

### Time-Consuming Repetition

- **Objective**: Facilitate easy access to the same instance of a report multiple times with minimal friction.
- **Solution**: Introduce a mechanism for people to save and access personalized reports effortlessly.

### Streamline Sharing Reports with Teammates
- **Objective**: Reduce overhead for multiple people accessing personalized data.
- **Solution**: Introduce a mechanism to easily share reports with other team members.

## Challenges

- **User Permissions Complexity:** Addressing the intricacies of sharing reports with team members who may not have regular access to certain data.
- **Minimized Disruption:** Concerns about potential disruption for users who might not require or appreciate the new features.

## Solutions and Approach

While we knew customer churn was linked to the absence of report-saving capabilities, we needed to understand the true impact. Our commitment to enhancing the product’s value led us to reach out to customers who had churned, specifically those who had expressed interest in a report-saving feature. Incentivizing 30-minute conversations, we aimed to gain deeper insights.

Customers highlighted that the complexity of applying filters frequently reduced their willingness to engage with the platform, which directly led to the decision to enable saved reports. Recognizing the inefficiency of regenerating reports, we envisioned empowering users to save these reports onto a personal dashboard for convenient access and modification.

<figure>
  <img src="/images/work/sr-my-reports.png" alt="A new section for accessing saved and shared reports" loading="lazy">
  <figcaption>A new section was added to Harvest to access saved and shared reports.</figcaption>
</figure>

Additionally, we introduced the option to schedule recurring runs for reports, ensuring customers always had access to the latest data without manual interventions. A novel sharing mechanism facilitated seamless collaboration, allowing customers to effortlessly share personalized reports with teammates within their organization. This not only addressed the pressing need for collaboration but also ensured that everyone had access to the most recent and relevant data.

<figure>
  <img src="/images/work/sr-dialog-recurring.png" alt="A close up of setting a recurring report" loading="lazy">
  <figcaption>When a report is recurring, anyone who has access to the report will receive an email with a link to the most current generated report.</figcaption>
</figure>

After refining our concepts through iterative mockups and prototypes, we sought feedback from additional customers. With their validation of our approach, we proceeded to implement the envisioned features, transforming our prototype into a reality.

We took great care in making sure that the fingerprint of adding this feature wouldn’t be too disruptive for customers that were uninterested in this feature, making minimal changes to the existing UI. We did this by adding a single button to the report with the options available, and opening a dialog window for creating or editing a report.

<figure>
  <img src="/images/work/sr-save-report.png" alt="A new save report button" loading="lazy">
</figure>

The interactive dialog allows you to customize the report by assigning a name, sharing it with teammates, setting up recurring report generation, and exporting the data in your preferred format.

<figure>
  <img src="/images/work/sr-dialog.png" alt="The save report dialog" loading="lazy">
  <figcaption>Steps of progression through the Save Report dialog.</figcaption>
</figure>

To ensure the feature was implemented smoothly and aligned with design intentions, I worked closely with the engineering team throughout the development phase. Beyond my role in designing and prototyping, I assisted engineers by writing the necessary HTML and CSS for the new user interface components. This hands-on approach not only ensured the fidelity of the design but also streamlined communication between design and engineering, allowing for a more efficient build process.

### Permissions Handling

As we delved into implementing new features, we encountered complexities related to user permissions. We are dedicated to safeguarding sensitive data, ensuring that teammates only access information pertinent to their roles. Initially, our strategy involved excluding teammates from the share list if they lacked access to any projects within the report. However, testing revealed confusion among users, as some individuals were included while others were not.

Subsequently, we explored an alternative approach. When sharing a report with someone lacking access to specific data, they would only view information accessible to them if they had run the report independently. A notification at the top of the page alerted users without complete access, effectively communicating the restricted information.

<figure>
  <img src="/images/work/sr-time-report.png" alt="An alert showing someone they do not have full access to the report" loading="lazy">
</figure>

To address common inquiries about user permissions, we took a proactive approach by guiding customers on the visibility of their data to teammates. We added a link to a help center article directly within the user interface.

<figure>
  <img src="/images/work/sr-help.png" alt="Guiding users to the Harvest Help Center" loading="lazy">
</figure>

## Impact and Outcomes

The immediate key performance indicator for success was adoption of the new features:

- **Increased Productivity:** Users reported a **50% reduction in time spent** regenerating reports, improving overall efficiency.
- **Improved Collaboration:** The ability to share reports seamlessly contributed to a **23% rise in team collaboration**.
- **User Retention:** Early indicators from churn research showed that users engaging with the new report features were **16% less likely to churn** compared to non-users.
- **Reduced Support Tickets:** There was a **14% decrease in customer support inquiries** related to report generation, showing that users found the new interface intuitive and easy to use.

One customer noted:

> “The ability to save and share reports has been a game-changer for our team. We’re able to stay up to date without having to recreate the same reports over and over. It’s made our workflow so much smoother!”

These results strongly suggest that the ability to save and share reports is positively impacting user retention, productivity, and collaboration.

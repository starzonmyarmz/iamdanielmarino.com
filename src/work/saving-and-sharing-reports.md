---
title: Saving and Sharing Harvest Reports
blurb: Elevating productivity through improved reporting capabilities.
order: 2
tags: casestudy
---

[Harvest](https://getharvest.com), a leading platform for time tracking and project management, identified a crucial need to improve its reporting module based on customer churn feedback. Customers expressed challenges in efficiently accessing and sharing personalized reports, leading to reduced meaningful interaction with the platform and an increased risk of churn.

Over a four-month period in 2023, a dedicated team of customer experience and engineers collaborated to address these challenges. The process involved customer research, iterative design, and close collaboration with select customers to ensure their needs were met.

My role encompassed active participation in customer research, the design and prototyping of interactive user flows, and collaboration with engineers during the implementation phase.

## Problem

The primary challenge identified was the repetitive nature of generating custom reports, creating unnecessary barriers to meaningful utilization of the reporting section. This issue particularly impacted project managers and administrators continually seeking insights from Harvest reports. Two core objectives were identified:

### Time Consuming Repetition

- **Objective:** Facilitate easy access to the same instance of a report multiple times with minimal friction.
- **Solution:** Introduce a mechanism for people to save and access personalized reports effortlessly.

### Streamline Sharing Reports with Teammates

- **Objective:** Reduce overhead for multiple people accessing personalized data.
- **Solution:** Introduce a mechanism to easily share reports with other team members.

## Challenges

- **User Permissions Complexity:** Addressing the intricacies of sharing reports with team members who may not have regular access to certain data.
- **Minimized Disruption:** Concerns about potential disruption for users who might not require or appreciate the new features.

## Approach

While we were aware that customer churn was linked to the absence of report-saving capabilities, the true impact eluded us. Our commitment to enhancing the product’s value led us to reach out to customers who had churned, specifically those who had expressed interest in a report-saving feature. Incentivizing 30-minute conversations, we aimed to gain deeper insights.

Through these conversations, a distinct user profile emerged — individuals crafting reports with intricate filters and date parameters, intending to revisit them frequently. Recognizing the inefficiency of regenerating reports, we envisioned empowering users to save these reports onto a personal dashboard for convenient access and modification.

<figure>
  <img src="/img/work/sr-my-reports.png" class="shadow" alt="A new section for accessing saved and shared reports" loading="lazy">
  <figcaption>A new section was added to Harvest to access saved and shared reports.</figcaption>
</figure>

Additionally, we introduced the option to schedule recurring runs for reports, ensuring users always had access to the latest data without manual interventions. A novel sharing mechanism facilitated seamless collaboration, allowing users to effortlessly share personalized reports with teammates within their organization. This not only addressed the pressing need for collaboration but also ensured that everyone had access to the most recent and relevant data.

<figure>
  <img src="/img/work/sr-dialog-recurring.png" class="shadow" alt="A close up of setting a recurring report" loading="lazy">
  <figcaption>When a report is recurring, anyone who has access to the report will receive an email with a link to the most current generated report.</figcaption>
</figure>

After refining our concepts through iterative mockups and prototypes, we sought feedback from additional customers. With their validation of our approach, we proceeded to implement the envisioned features, transforming our prototype into a reality.

We took great care in making sure that the fingerprint of adding this feature wouldn’t be too disruptive for customers that were uninterested in this feature, making minimal changes to the existing UI. We did this by adding a single button to the report with the options available, and opening a dialog window for creating or editing a report.

<figure>
  <img src="/img/work/sr-save-report.png" class="shadow" alt="A new save report button" loading="lazy">
</figure>

The interactive dialog allows you to customize the report by assigning a name, sharing it with teammates, setting up recurring report generation, and exporting the data in your preferred format.

<figure>
  <img src="/img/work/sr-dialog.png" class="shadow" alt="The save report dialog" loading="lazy">
  <figcaption>Detailing a few steps of progression through the Save Report dialog.</figcaption>
</figure>

### Permissions

As we delved into implementing new features, we encountered complexities related to user permissions. We are dedicated to safeguarding sensitive data, ensuring that teammates only access information pertinent to their roles. Initially, our strategy involved excluding teammates from the share list if they lacked access to any projects within the report. However, testing revealed confusion among users, as some individuals were included while others were not.

Subsequently, we explored an alternative approach. When sharing a report with someone lacking access to specific data, they would only view information accessible to them if they had run the report independently. A notification at the top of the page alerted users without complete access, effectively communicating the restricted information.

<figure>
  <img src="/img/work/sr-time-report.png" class="shadow" alt="An alert showing someone they do not have full access to the report" loading="lazy">
</figure>

To address common inquiries about user permissions, we took a proactive approach by guiding customers on the visibility of their data to teammates. We added a link to a help center article directly within the user interface.

<figure>
  <img src="/img/work/sr-help.png" class="shadow" alt="Guiding users to the Harvest Help Center" loading="lazy">
</figure>

## Impact

Our immediate key performance indicator (KPI) was the successful launch and immediate adoption of these features, resulting in:

- **Increased Productivity:** Users can now effortlessly access personalized reports, reducing time spent on repetitive onfigurations.
- **Improved Collaboration:** Team members can easily share and discuss reports within the organization, fostering better collaboration and decision-making.

While it is too early to extract post-launch insights from the KPIs, early indicators from churn research suggest a positive trend regarding the newfound ability to save and share reports. More in-depth measurement of success KPIs is scheduled for the Summer of 2024.

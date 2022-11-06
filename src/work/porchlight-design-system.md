---
title: Porchlight Design System
blurb:
order: 1
---

## Why are We Evaluating a Design System
As part of Harvest’s Product Vision, we want to be a first-in-class design-focused product—meaning our products should be thoughtfully and intentionally designed. Having a design system would push this objective forward in a variety of ways:

- Following the 6-week project cycle—while great for continually shipping new features—limits the amount of time teams have to explore design. We often find ourselves having to settle on the implemented design. A design system would elevate our design. Having a set of common patterns/components takes some of the mundane busy-work out of the design process—leaving more time to focus on exploring design as it relates to user experience.
- As Harvest begins making products responsive to devices, a design system would greatly simplify implementation and development. Having predefined responsive patterns in place means we don’t have to spend extra time thinking through these implementations on a project-by-project basis.
- As Harvest continues to grow its team, a design system will greatly reduce confusion and adoption surrounding UI patterns we use within Harvest, and how they’re implemented. A design system will help reduce onboarding overhead for new teammates, and provide reference in the long term.
- Having multiple products, there’s a lot of opportunity to have them share common UI patterns. A shared design system would reduce overhead, resulting in less code to maintain. This would lead to faster development, more consistent experiences for our customers, strengthen the Harvest brand, and allow for time to explore design solutions.
- In an effort to make Harvest more accessible for our customers, we can bake accessibility patterns into our UI components. This will make our products much more accessible across the board which will result in a more inclusive experience without having to invest unnecessary extra resources.

## Problems Solved by a Design System

### Speed

Historically, we’ve been limited to the amount of time we have to explore design considerations, and have often found ourselves having to settle. A design system would provide Harvest a set of modular components, taking some of the time-consuming busy-work out of the design process—leaving more time to focus on exploring design as it relates to user experience. These components would also have code counterparts which would lead to faster development.

### Consistency

We often find ourselves creating and dealing with “snowflake” implementations. This results in an inconsistent UI/UX, which increases cognitive load when customers use our products. Creating consistency is like making small promises throughout the interface. When people can be confident of what will happen, they can rely on the product which helps build trust.

### Simplicity

This is the glue that bonds Speed and Consistency. Having to regularly tackle time-consuming, low-level designing and coding tasks, as well as dealing with snowflake implementations just makes our jobs more difficult in general. Taking some of these complications out of the equation allows us to spend more time and energy into creating the best experiences for our customers.

### Accessibility

While we’ve made leaps and bounds in the last few years, lack of accessible experiences still remain. Part of the problem is lack of awareness and education internally, but not having pre-baked accessible solutions is also an issue. A design system would address this by containing the knowledge our consumers need to make accessible UIs, as well as modular components with accessibility built-in. By building accessible experiences, we’ll create a more inclusive UI.

### Responsive

Currently, Harvest’s mobile story is fragmented. Mobile/Desktop apps don’t provide all the same functionality or experience as our web app. Our web app doesn’t respond to mobile/tablet devices. The combination of these issues makes it extremely difficult for individuals to achieve certain tasks. As Harvest begins embarking in making our products responsive, having a design system would greatly simplify implementation and development, by having predefined responsive patterns in place and ready to go. This would result in less time thinking through certain implementations on a project-by-project basis.

### Principles and Guidelines

There are a lot of “guidelines” that we try to follow at Harvest, however a lot of these are undocumented or are assumed. This makes it difficult for us to reach the same goal in how we solve problems for our customers. Having an agreed upon set of principles, guidelines, and best practices will unify our teams in building new, and improving existing features.

Did we meet our success state hypotheses?

Hypothesis 1 – By introducing modular components, we’ll be able to build designs faster, more consistently/predictably, and have a simpler codebase.

Goal: 20% reduction in design time spent in Figma
Actual: Goal met — 50% reduction in design spent when using the Porchlight Figma library
Goal: 30% reduction in engineer time spent in HTML, CSS, and JS
Actual: Goal met — A little over 50% reduction when using Porchlight code patterns. The amount of resulting custom code is also significantly reduced leaving less overhead in code maintenance. In reality, over the lifetime of an interface, the reduction in engineering time is probably much larger than 50%.
Goal: 90% Porchlight coverage in harvestapp
Actual: Goal met — 95% Porchlight coverage in harvestapp

With the company rebrand, we were able to update Porchlight Foundations to use rebranded colors, type, and other tokens—which trickle down into Porchlight Utilities and Components. Then when pulling in the updated version of Porchlight into our products (with these rebranded tweaks) these changes propagate to all instances of Porchlight components.

We spent a couple of weeks updating Porchlight to use rebranded styles, and about six weeks updating our products’ UI. Because the vast majority of Harvestapp and Harvest ID (and others) consume Porchlight at such a large percentage, we were able to spend the vast majority of that time to focus on areas that cannot consume Porchlight—overall site layout, navigation, running timer aura, logos and favicons, etc.

As a bonus, we also added the Harvest and Forecast/API Help Centers as consumers of Porchlight, bringing the number of Porchlight consumers up to a total of seven!

Hypothesis 2 – By focusing on accessibility, we’ll meet the needs of customers with certain disabilities.

Goal: 90/100 aggregate Lighthouse score of all Porchlight components
Actual: Goal met — 96/100 aggregate score

A lot of this work happened before rebranding, but overall we’ve put a lot of work into making sure colors meet minimum contrast requirements, and making sure Components use properly accessible markup. Shortly after making Timesheets day view responsive, as well as swapping out old Chosen components, we got this email from our friends at Accessible 360:

I wanted to say thank you for deploying some improvements to Harvest. Many of our employees use screen readers and these changes improve their experience many times a day. I'm not sure exactly what you changed but heard:
Improvements to the previously inaccessible project/task drop downs on the "day view". It is now much easier to add rows when using the day view in Harvest.
An issue was corrected where each row in the "day view" was marked up as a separate table. All of the rows you have added to your day now reads as a nice single table on the day view.

— Kelly Heikkila, CTO, Accessibile360

As we continue to use accessible patterns, we’ll also continue to monitor customer feedback in relation to accessibility. We’re also putting effort into educating the Harvest team about accessibility-related topics. Karla has been focused on auditing and improving accessibility within harvestapp, and a group of us has been in communication with A360 about running an Accessibility Workshop for the entire Harvest team!

Hypothesis 3 – By introducing responsive components, we’ll improve and increase usage across our mobile/tablet web experience.

Goal: Make Harvest App and Harvest ID responsive
Actual: Goal met — both apps among others are responsive

This outcome is primarily a pass/fail grade. Wherever Porchlight components are used, those components will function properly, and look decent on mobile devices. Porchlight also gave us the tools necessary to make more complex sections responsive, such as Timesheets and Expenses.

By meeting this goal, we set Harvest up for success by working where our customers work (mobile/tablet devices) and setting ourselves up for future work in the mobile space.

It should also be noted that this ties back to our first hypothesis about reduction in engineer time. Not only are we saving time from using Porchlight components, but we also save a lot of time from not having to create one-off mobile solutions.

Hypothesis 4 – By creating documented principles and guidelines, we’ll be more unified in how we approach design.

A short survey was sent to Harvesters that are involved in Design Club—a recurring meeting where Designers and PMs come together to discuss design work-in-progress. The questions were focused on gauging how we feel as a team how useful Porchlight is in guiding our work.

- https://3.basecamp.com/3059193/buckets/16105760/messages/3121136981
- https://3.basecamp.com/3059193/buckets/18397372/messages/4921034373

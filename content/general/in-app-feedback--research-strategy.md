---
title: "In App Feedback"
description: "When collecting In App Feedback, it's important to align on a research objective before choosing UI patterns to use. Each In App Feedback pattern element serves a different function, and some elements"
category: "general"
slug: "in-app-feedback--research-strategy"
status: "published"
lastModified: "2026-03-11"
---

## Introduction

| When collecting In App Feedback, it's important to align on a research objective before choosing UI patterns to use. Each In App Feedback pattern element serves a different function, and some elements are better than others for specific research objectives.**<strong>Steps for creating your feedback mechanism**<ol><li>Translate your research need into user centric questions.</li><li>Choose In App Feedback pattern elements that align with the user centric questions you would like to ask the user.</li><li>Choose an appropriate container that aligns with your research objective and delivers a smooth, consistent, and positive experience for your users.</li></ol> | <h3>Start using our Design Kits</h3> [ * ](https://www.figma.com/@salesforce) <button type="button" aria-label="Open image lightbox"><i color="#ffffff" size="4" style="margin-right: 0px;"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"></svg>*</button> <input type="file" accept=".jpg, .jpeg, .png, .svg, .gif, .webp" aria-label="File"> [Open in Figma](https://www.figma.com/@salesforce) |
| --- | --- |


1. Translate your research need into user centric questions.
2. Choose In App Feedback pattern elements that align with the user centric questions you would like to ask the user.
3. Choose an appropriate container that aligns with your research objective and delivers a smooth, consistent, and positive experience for your users.


### Start using our Design Kits

## Translating Research Needs into User Centric Questions

The quality of the data you capture through feedback mechanisms directly correlates to the quality of questions you ask. Once you settle on a research objective, it's important to translate the objective into questions that capture the nuance of user behavior and intent. Keeping questions open ended will allow the user to give honest feedback without limiting the substance of what they may talk about. If you ask a star rating question or a binary yes or no question, be sure to follow up with an additional open text field or multiple choice option to help inform rating selections. Referencing specific moments during the experience such as the last time you used this feature also helps to ground the user in their experience rather than rely on subjective memory or opinions of your product.

| **Research Need** | **User Centric Questions** |
| --- | --- |
| Does a user like or dislike a feature | What do you think about this feature? Based on your visit today, how would you rate your overall experience using this feature? |
| Why did a user make a decision? | What were you hoping to have happen there? |
| Was something helpful? | Did you find what you were looking for? |
| What was something useful? | What was your goal today? Were you able to achieve it? |
| Was something accurate? | How helpful was this recommendation? Is there any information missing from this page? |
| What do you want to improve? What would you like us to know? | What's working well for you? Thinking about the last time you used this feature, what could have been improved? |
| What is the bug or factual error that a user would like to report? | What went wrong here? Help us understand what you were trying to do. |
| What is the idea that a user would like to share? | if you could change, add or improve just one thing about our product, what would it be? |


Was something accurate?

How helpful was this recommendation? Is there any information missing from this page?

What do you want to improve? What would you like us to know?

What's working well for you? Thinking about the last time you used this feature, what could have been improved?

What is the bug or factual error that a user would like to report?

What went wrong here? Help us understand what you were trying to do.

What is the idea that a user would like to share?

if you could change, add or improve just one thing about our product, what would it be?

## General Best Practices

- **Limit length to 3-5 questions.** Optimally, the full range of questions should be viewable without scrolling. The priority should be to collect any feedback at all rather than collecting the most comprehensive or detailed. If the user notices at first glance there are too many questions, the user may quickly close or abandon the mechanism before leaving feedback.
- **Choose a mix of open text, rating or multiple choice questions to collect more actionable feedback.**In App Feedback mechanisms should generally leverage a mix of question types when appropriate. Ensure questions are open ended enough to capture user sentiment. Try to build your mechanism to collect multidimensional data—a mix of a multiple choice, open text etc, usage data, etc.<ul><li>**Verbatim/open ended:** Generally, these are best written as non specific prompts for the user to describe their experience. **It is best to avoid asking the user to provide suggestions for improving the system, as this is quite different than asking them to describe their experience.** Phrasing could take some of the following forms: (1) *Tell us about your experience with our [system/site/app].*; (2) Is there any feedback you would like to share?</li><li>**System or brand level satisfaction rating:** These are best asked in the context of general proactive surveys or user invoked surveys, not task based proactive surveys.</li><li>**Task or feature level ease/effort/satisfaction:** These are best asked in the context of task based proactive surveys.</li><li>**Reasons for satisfaction/dissatisfaction:** If you're using a star or numerical rating question, follow up with a set of multiple choice options that include possible reasons for someone's rating, to contextualize the score.</li></ul>
- **Verbatim/open ended:** Generally, these are best written as non specific prompts for the user to describe their experience. **It is best to avoid asking the user to provide suggestions for improving the system, as this is quite different than asking them to describe their experience.** Phrasing could take some of the following forms: (1) *Tell us about your experience with our [system/site/app].*; (2) Is there any feedback you would like to share?
- **System or brand level satisfaction rating:** These are best asked in the context of general proactive surveys or user invoked surveys, not task based proactive surveys.
- **Task or feature level ease/effort/satisfaction:** These are best asked in the context of task based proactive surveys.
- **Reasons for satisfaction/dissatisfaction:** If you're using a star or numerical rating question, follow up with a set of multiple choice options that include possible reasons for someone's rating, to contextualize the score.


- **Verbatim/open ended:** Generally, these are best written as non specific prompts for the user to describe their experience. **It is best to avoid asking the user to provide suggestions for improving the system, as this is quite different than asking them to describe their experience.** Phrasing could take some of the following forms: (1) *Tell us about your experience with our [system/site/app].*; (2) Is there any feedback you would like to share?
- **System or brand level satisfaction rating:** These are best asked in the context of general proactive surveys or user invoked surveys, not task based proactive surveys.
- **Task or feature level ease/effort/satisfaction:** These are best asked in the context of task based proactive surveys.
- **Reasons for satisfaction/dissatisfaction:** If you're using a star or numerical rating question, follow up with a set of multiple choice options that include possible reasons for someone's rating, to contextualize the score.


## Sampling and Segmentation Strategy

**Identify your target audience.** Once you have aligned on a research objective, work with your engineering team to understand what data may be available to inform more targeted sampling and segmentation of your user base. Ensure your audience can be targeted by the feedback mechanism. For example, if you want to hear specifically from users who work on cases every day, ensure that data or instrumentation in the product supports segmenting the user base by role type. Explore other methods if your target audience cannot be reached via an In App Feedback mechanism.

**Outline a segmentation and sampling strategy.** While collecting massive amounts feedback may sound exciting at first, this route can make analysis broad and cumbersome. Segmenting your users in specific ways enables you to collect more informed, actionable feedback. Take a look below for a few examples of potential sampling and segmentation strategies.

| **Target Sample** | **Possible Strategies** | **Advantages** | **Disadvantages** |
| --- | --- | --- | --- |
| A group of users who have completed a task or flow | Trigger popup to 10% of users at first loginDisplay mechanism to all users on the final page of a difficult flow or taskTrigger model 25% of users who have used a feature 5 times | Used to address feature specific research questionsRefine and beta test new versions of a release or feature | Resource intensive, requires more engineering work to implement the correct triggersPotentially small sample size if for a very specific set of tasks |
| A random sample of the entire user base | Trigger mechanism to 20% of all usersTrigger mechanism to 10% of users who have logged in during the past month | Large sample size and diversity of responses can make your data highly representative of overall audienceCan collect lots of other usage data to support broader open-ended answers | Sample may be too broad to address narrow research questionsPossible to oversample or burn through sample without collecting meaningful information |
| All users | User inititiated mechanism behind an icon or menu item | A user can give feedback at any timeBuilds trust and makes the user feel heard | You will get a lot of responses, and if you don't have a plan to analyze all of the feedback, it is not worth the effort to build something like thisIt takes a lot of work post implementation to continue to derive value from the mechanism |


Resource intensive, requires more engineering work to implement the correct triggers

Potentially small sample size if for a very specific set of tasks

A random sample of the entire user base

Trigger mechanism to 20% of all users

Trigger mechanism to 10% of users who have logged in during the past month

Large sample size and diversity of responses can make your data highly representative of overall audience

Can collect lots of other usage data to support broader open-ended answers

Sample may be too broad to address narrow research questions

Possible to oversample or burn through sample without collecting meaningful information

All users

User inititiated mechanism behind an icon or menu item

A user can give feedback at any time

Builds trust and makes the user feel heard

You will get a lot of responses, and if you don't have a plan to analyze all of the feedback, it is not worth the effort to build something like this

It takes a lot of work post implementation to continue to derive value from the mechanism

**Identify additional data you want to collect.** In addition to collecting feedback provided by the user, you could also collect a series of data points available through product instrumentation. For example, it may be useful to collect what version of a feature the user is using, how long the user has been using a specific feature or product, or how many clicks the user made on a specific page. Collecting additional data will make the feedback more actionable and facilitate deeper exploration of the data.

## Monitor, Analyze, and Revise

After you launch your feedback mechanism, monitor incoming feedback and response rate while the mechanism is active. Be careful to not over sample your users. Have an intended sample size in mind before deploying the mechanism.

Take the time to synthesize the feedback into meaningful, actionable insights, and share with relevant functional teams. Work with you research partners to align on insights and recommendations.

After analysis, gather your insights and revisit your research objective. Determine whether it's necessary to revise the mechanism, keep it enabled as is, or disable the mechanism. When revising the mechanism, be sure to incorporate insights from past feedback.

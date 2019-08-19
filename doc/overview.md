# Summary of kick-off meeting

**Date**: Aug 5, 2019, 10:46 AM  
**From**: Jakub Skoczen <jakub@indexdata.com>  
**To**: Mike Taylor <mike@indexdata.com>  
**Cc**: Mike Gorrell <mdg@indexdata.com>, Kelly Drake <kelly@flo.org>, Heikki Levanto <heikki@indexdata.dk>  
**Subject**: Re: Invitation: Course Reserves Kickoff @ Fri Aug 2, 2019 17:00 - 17:45 (CEST) (jakub@indexdata.com)  

Hey Mike,

Hope you had good vacation! No worries -- the meeting happened on Friday because Heikki is off Mondays and Kelly was booked for Tuesday. Here are the highlights:

* Kelly briefly sumarized the context for Course Reserves for our benefit. In a nutshell, the CR app (modules) allow the staff to "reserve" certain materials in the inventory for the benefit of teachers (professors) and students. Those reservations can take different forms and e.g influence how items are circulated. CR is a stand-alone module wth it's own storage model (courses, schedules and relationships with professors, students, items, etc) but must deeply integrate with FOLIO's Inventory, Circulation (loan and, possibly, request rules) and Users. There is also an important aspect for the integration with third-party course management software like Atlas Systems’ Ares and, what will be quite important here, discovery layers like VuFind (exporting the information so students can browse courses and materials). I have probably butchered this desription quite a bit but Kelly can you give you a proper one, I am sure.

* Kelly is working on organizing user stories for CR, here is the top-level Epic: https://issues.folio.org/browse/UXPROD-791. Those stories were originally created by another PO, who is no longer involved in this project, and they require a bit of clean up but should give an idea about context and requirements.

* Kelly has some additional documentation in the form of Google Docs and will share it on the Slack channel we have created for the purpose of communication in the project: #course-reseves-dev (on FOLIO).

* We decided it makes sense to get familiar with those stories and CR documentation before the next meeting.

* Heikki has asked what 2 days would work for you to work on this. He's proposed Thursday and Friday but I guess Tuesday and Wednesday are also an option (Heikki doesn't work on Mondays). Once you know plese let Kirsten know so she understands youre ReShare availabiltiy.

* In terms of Project Management: since it's a small group (essentially You and Heikki + Kelly as the PO) we have agreed that there's no need for formalities like Scrum. So whatever works for all you guys works for Mike and I. Once you knnow what days you will be working on please plan the time time for a regular meeting with Kelly. I'd like to be on the meeting but with my availability it wil be a pain to find time that works for everyone so plan for what works for the 3 of you and I will join whenever I can.

* Since this is a FOLIO project, the ask is to make sure development process (architecture, code styles, quality metrics, unit coverage, etc) is compatible with the rest of FOLIO modules so we can ship it in the core platform. Once we know what repos should be created I'll ask David to do it (plus CI setup).

I guess that was it?


# Message from Kelly Drake, Monday 5 August 2019, 23:19

Here's the list of Course Reserves documentation - to date - along with some explanation.  Hopefully, this will get us started.

Best documentation of Course Reserves to date is Course Reserves - current FOLIO work 3/2019 https://docs.google.com/document/d/1PcggPYlu-Y3YksUXA54ljfqvZbgfEjJ99al_Ouw8CFM/edit

This compiles the info in the Features associated with the Courses Epic (UXPROD-791) with screen mockups.

So far, the screen mockups seem pretty consistent with other documentation I've found and represent a good to great, visual starting point. There is, however, some missing requirements, that can't be conveyed by the pictures.

Another doc that may be informative is Reserves Outcomes: https://docs.google.com/document/d/1QxL_Uojg54eRYTsnTvDeeX5f-xFZl2IV0C2isktZ9Sk/edit

This document identifies many of the fields and functionality represented in the previous doc, but also contains additional 'user story' type info and well as manditory and repeating field identification (or discussion).  There is also a workflow section that may be helpful.

This Reserves Outcomes doc also delves into API and LTI issues and other things.  ...but it's more a working doc, than an outcome.

In the meantime I'm working to combine both of those (and some other info and requirements) into this doc.  Course Reserves 2.0 - https://docs.google.com/document/d/1Ti4v4NF0V9Hhgo8UknX-nXH6d9eQplHAFlFbft1uUwI/edit?usp=sharing

The doc is arranged by UXPROD feature, which will then be broken down into Mockups (with notes regarding variations), Assumptions, Story, FOLIO App integration, Reporting Requirments, Standards and Interop.

My hope is we can use this doc for comments, questions, discussion, etc. But if you have any thing, or any ideas about another way to go about this I'm open.



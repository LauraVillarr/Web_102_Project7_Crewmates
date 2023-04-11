# Web Development Project 7 - *Crewmates*

Submitted by: **Laura Villarreal**

This web app: **Allows the user to create crewmates that are saved in a Supabase database. The user can look at their created crewmates, update them, delete them,
and click on a unique detailed page for them**

Time spent: **7** hours spent in total

## Required Features

The following **required** functionality is completed:

- [X] **A create form allows users to add new cremates**
- [X] **Users can name the crewmate and set the crewmate's attributes by clicking on one of several values**
- [X] **The site displays a summary page of all the user's added crewmates**
- [X] **A previously created crewmate can be updated and deleted from the crewmate list**
- [X] **Each crewmate has a direct, unique link to an info page about them**

The following **optional** features are implemented:

- [ ] A crewmate can be given a category upon creation which restricts their attributes
- [ ] The site displays summary statistics about a user's crew on their crew page 
- [ ] The site displays a custom "success" metric about a user's crew which changes the look of the crewmate list

The following **additional** features are implemented:

* [X] added a home page to describe what the application is about briefly

## Video Walkthrough

Here's a walkthrough of implemented user stories:

Walkthrough of user stories:

<img src='https://github.com/LauraVillarr/Web_102_Project7_Crewmates/blob/master/project7_crewmates_walkthrough.gif' title='Video Walkthrough' width='' alt='Video Walkthrough' />

Verification that each crewmate page is unique:

<img src='https://github.com/LauraVillarr/Web_102_Project7_Crewmates/blob/master/project7_crewmates_unique_detail_page.gif' title='Video Walkthrough' width='' alt='Video Walkthrough' />

<!-- Replace this with whatever GIF tool you used! -->
GIF created with ...  
[ScreenToGif](https://www.screentogif.com/) for Windows

## Notes

I had a lot of issues with CSS and trying to get some parts where I wanted them to, particularly in the gallery page
where I struggled to get the cards to display properly. There were also some issues trying to get the update page to display the crewmate's original data. I had
particular trouble trying to get the radio button to be checked on the color that the crewmate had. However, I really wanted the old data to display in the input so that the
user would be able to use it for reference whenever they were updating the crewmate's attributes, so I persisted until I got it to work. Finally, I had some issues with accessing a specific crewmate's data
in the update page, since I had made my links in main.jsx and could not directly pass anything. I decided to get around this issue by,
instead of passing the crewmate data into the update page, to instead query my database to grab the specific crewmate's data based on the id provided in the url.

## License

    Copyright [2023] [name of copyright owner]

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.

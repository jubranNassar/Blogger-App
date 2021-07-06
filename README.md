<!-- CODENAME: BANANA -->

# Project Overview

## Project Name

Blogger-App

## Project Description

The Blogger-App will allow you to create and upload posts and save them for later.

## Wireframes

![Imgur](https://i.imgur.com/6Yoe5zl.png)

![Imgur](https://i.imgur.com/pWmpNXK.png)

![Imgur](https://i.imgur.com/iQEgZWu.png)

![Imgur](https://i.imgur.com/wixmgrV.png)

![Imgur](https://i.imgur.com/VbQ7HKg.png)

![Imgur](https://i.imgur.com/zOD4Qlp.png)


## Component Hierarchy
![Imgur](https://i.imgur.com/GK6BOfW.png)

## API and Data Sample



```json
{
    "records": [
        {
            "id": "recFg4nUv50lWtsZm",
            "fields": {
                "name": "Savannah",
                "post": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque at commodo nunc. Nam ligula ipsum, hendrerit eget consectetur vitae, fermentum ac mag..."
            },
            "createdTime": "2021-06-29T00:16:57.000Z"
        },
        {
            "id": "recMQFS7XqQWDzXxE",
            "fields": {
                "name": "Roman",
                "post": "Sed facilisis mi nulla, ac fermentum enim sollicitudin sed. In cursus nec dolor eu facilisis. Fusce congue ex risus, ut egestas leo pellentesque at. D..."
            },
            "createdTime": "2021-06-29T00:16:57.000Z"
        },
        {
            "id": "recui9jXIgVdnrvS3",
            "fields": {
                "name": "Ford",
                "post": "Sed dictum condimentum dolor id rhoncus. Fusce sit amet placerat diam, maximus porta massa. Sed fringilla lacus sem, vel mattis orci scelerisque eget...."
            },
            "createdTime": "2021-06-29T00:16:57.000Z"
        }
    ],
    "offset": "recui9jXIgVdnrvS3"
}

```

### MVP/PostMVP
  

#### MVP 

- Be able to GET posts 
- Be able to make POST requests to upload data to the page  
- Create a comment button to comment on specific pots
- Save posts to a Saved Posts page

#### PostMVP  


- Add more styling
- add additional features such as: date and time components for when the post was uploaded

## Project Schedule


|  Day | Deliverable | Status
|---|---| ---|
|Day 1 | Lay down boiler plate and Work on GET and POST requests| Complete
|Day 2 | Work on Comment component| Complete
|Day 3 | Work on save Component and Saved Posts page | Complete
|Day 4 | complete MVP and begin styling | Complete
|Day 5 | review and debugging, cleaning up code | Complete
|Day 6 | Work on post MVP | Incomplete
|Day 7 | Final touches and styling and debugging | Complete

## Timeframes


| Component | Priority | Estimated Time | Time Invested |
| --- | :---: |  :---: | :---: |
| useState&useEffect | H |  3hrs | 1hrs |
| GET requests | H | 3hrs| 20mins |
| POST requests| H | 3hrs| 40mins |
| Save Component | H | 3hrs | 5hrs |
| Comment Component | H | 3hrs | 1hr |
| Rendering data | H | 3hrs | 1hrs |
| basic CSS layout | H | 3hrs | 2hrs |
| media quaries | H | 3hrs | 3hrs |
| detailed styling | H | 3hrs | 4hrs |
| Total | H | 33hrs| 18hrs |

## SWOT Analysis

### Strengths:
axios: GET&POST requests

### Weaknesses:
When and when not to pass props

### Opportunities:
Main features are axios calls which i feel pretty comfortable in 

### Threats:
Not too comfortable with comment and save components 
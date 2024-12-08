# PromoCHATor web client

![Solvro banner](https://github.com/Solvro/backend-topwr-sks/blob/main/assets/solvro_dark.png#gh-dark-mode-only)
![Solvro banner](https://github.com/Solvro/backend-topwr-sks/blob/main/assets/solvro_dark.png#gh-light-mode-only)

### Api response

```jsonc
{
  "output": {
    "faculty": "Wydział informatyki", //faculty - it may improve response from model (need to wait for ml team decision) - we may assume we'll need to add a select for it
    "question": "Web development", //user's prompt - we store it with saved supervisor to give context to user
    "retrieved_docs": [], //no idea what's that
    "prompt": "", //prompt for model, we don't care about it
    "recommendation": {
      // most important stuff
      "hello_message": "Here are some recommended supervisors for your thesis on web development:", //clear I think
      "recommended_supervisors": [
        {
          "name": "Dr. Anna Kowalska",
          "faculty": "Faculty of Computer Science",
          "papers": [
            {
              "title": "Modern Web Development Frameworks",
              "description": "This paper discusses various frameworks used in modern web development, comparing their performance and usability.",
            },
            {
              "title": "Responsive Design Techniques",
              "description": "An exploration of techniques for creating responsive web applications that work on various devices.",
            },
          ],
        },
        {
          "name": "Prof. Jan Nowak",
          "faculty": "Faculty of Information Technology",
          "papers": [
            {
              "title": "User Experience in Web Applications",
              "description": "A study on the importance of user experience in web application development and its impact on user retention.",
            },
            {
              "title": "Security Challenges in Web Development",
              "description": "This paper highlights the common security issues faced in web development and strategies to mitigate risks.",
            },
          ],
        },
        {
          "name": "Dr. Piotr Wiśniewski",
          "faculty": "Faculty of Computer Science",
          "papers": [
            {
              "title": "Web Development Best Practices",
              "description": "An overview of best practices in web development to improve code quality and maintainability.",
            },
            {
              "title": "Framework Comparison: Angular vs. React",
              "description": "A comparative analysis of Angular and React frameworks for building modern web applications.",
            },
          ],
        },
        {
          "name": "Dr. Maria Nowicka",
          "faculty": "Faculty of Information Technology",
          "papers": [
            {
              "title": "Progressive Web Apps: The Future of Web Development",
              "description": "Discusses the concept of progressive web apps and their benefits for developers and users.",
            },
            {
              "title": "API Design for Web Applications",
              "description": "Best practices in designing APIs for web applications to enhance integration and usability.",
            },
          ],
        },
        {
          "name": "Prof. Krzysztof Zieliński",
          "faculty": "Faculty of Computer Science",
          "papers": [
            {
              "title": "The Role of CSS in Web Development",
              "description": "An insightful look at how CSS affects the development and design of web applications.",
            },
            {
              "title": "JavaScript Frameworks: An Overview",
              "description": "An overview of popular JavaScript frameworks and their applications in web development.",
            },
          ],
        },
      ],
    },
  },
  "metadata": {
    //don't care about this
    "run_id": "",
    "feedback_tokens": [],
  },
}
```

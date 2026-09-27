# rails7withReactJS

A question-and-answer app with a React front end on Rails 7. Users post
questions with a title and tag, and browse them in a list.

- Rails API for questions, React components for the list, detail and form
- Form state managed with a single `useState` object
- Loading spinner, an empty-state view and a server-error component
- Error messages that don't flicker on reload

**Stack:** Ruby 2.7, Rails 7.0, React, esbuild, SQLite

## Run it

```bash
bundle install
bin/rails db:setup
bin/rails server
```

---

An early learning project from 2023, kept for reference and archived. My current work is on [my profile](https://github.com/gaganggoyal) and at [gagan.indiaoffers.in](https://gagan.indiaoffers.in).

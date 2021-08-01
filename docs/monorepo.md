# Why Monorepo?

Juggling a multi module project over multiple repos is like trying to teach a newborn baby how to ride a bike.

This is quite taboo but let's look at the pros and cons:

**Pros:**

- Easy to coordinate changes across modules
- Single place to report issues
- Easier to setup a development environment
- Tests across modules are run together which finds bugs that touch multiple modules easier

**Cons:**

- Codebase looks more intimidating
- Repo is bigger in size

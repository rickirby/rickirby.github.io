---
prev:
  text: 'Portfolio'
  link: '/portfolio'
next: false
---

# SwiftLint Quarantine Strategy

Company Related: **Stockbit**<br>
Created At: **9 Sep 2024**<br>

### Background
We detect numerous `SwiftLint` violations scattered accross hundreds of files in our project. We've employed a strategic approach to manage and resolve them efficiently. One of the strategies we're utilizing is the [`Boy Scout Rule`](https://deviq.com/principles/boy-scout-rule) - *"Leave your code better than you found it"*. However, we would like to enhance our efforts further.

### Plan
I introduce **SwiftLint Quarantine Strategy** to enhance our efforts in solving numerous `SwiftLint` violations. The concept is described in image below.<br>

![Quarantine Diagram](/assets/portfolio/port_sb_swiftlint_quarantine_diagram.png)

The whole files in our project are separated into two categories: *Healthy Files*, and *Infected Files*. Healthy Files are files that don't have any `SwiftLint` violations within it, while Infected Files are files that have `SwiftLint` violations at least one within it.<br>

### Execution

#### Separation of Healthy Files and Infected Files

I create a `shell` script to get the list of infected files. I format it with a dash on every line to facilitate copying it into exclusion list inside `.swiftlint.yml` file. Here is the result example.<br>

![Result Example](/assets/portfolio/port_sb_swiftlint_quarantine_infected_list.png){width=500}

Those infected files are now quarantined, it means that they're being excluded from the `SwiftLint` check. Since then, if we're now scanning the project using `SwiftLint`, there's no violation found.<br>

#### Healthy Files Handling

I implement the `SwiftLint` check in every Pull Request in our project. This will make sure that the changes in existing files or the addition of new files doesn't contain any `SwiftLint` violation. It will keep the integrity of remaining healthy files. This step is done with the help of [`danger-swiftlint`](https://github.com/ashfurrow/danger-ruby-swiftlint). See also how I enable `danger-swiftlint` in Gitlab-CI using a Linux runner [here](/portfolio/stockbit/linux_runner_danger_swiftlint). It runs significantly faster than Xcode Cloud.<br>

Image below shows the `Danger` result of SwiftLint check in every Pull Request.<br>

![Danger Result](/assets/portfolio/port_sb_swiftlint_quarantine_mr.png){width=400}

As you can see, there are two sections from linter results: `SwiftLint Result` and `SwiftLint Full Config Result - Including Quarantined Files`.<br>

For the `SwiftLint Result` section, it **only** scan the healthy files. The quarantined files are skipped by the system. This part should not find any `SwiftLint` error before anyone merge their Pull Request. This is intended to keep the integrity of healthy files. Any code changes or new files should be healthy too.<br>

For the `SwiftLint Full Config Result - Including Quarantined Files`, the `Danger` scan all files including quarantined files. This part is to keep the `Boy Scout Rule` still be implemented by our engineers. If any `SwiftLint` error found in this section, it may comes from changes in quarantined files. Pull Request can be still merged as long as the CI job is green (I don't fail the CI job if error is found here). However even this section result is discardable, Pull Request owner is encouraged to fix the `SwiftLint` error together with their code changes - `Boy Scout Rule`.

#### Infected Files Handling

I create an agreement with other Engineer that anyone can cure the quarantined files and can be marked as an improvement task. On Pull Request, we still implement `Boy Scout Rule` which still scan quarantined files but won't fail the CI job. Anyone making changes on infected files are highly encouraged to cure the linter error.<br>

To track our progress in decreasing the number of `SwiftLint` error, we've set up a scheduled workflow that monitors and count the remaining infected files. This count is regularly posted to our Slack channel to keep the team informed and motivated.

![Bot Cepu](/assets/portfolio/port_sb_swiftlint_quarantine_cepu.png){width=500}<br>
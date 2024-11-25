# Testing automation project for sharp dev

## :pushpin: Content:

- [Technologies and tools](#earth_africa-Technologies-and-tools)
- [Implemented checks](#earth_africa-Implemented-checks)
- [Build parameters in Jenkins](#earth_africa-Build-parameters-in-Jenkins)
- [Launching from the terminal](#earth_africa-Launching-from-the-terminal)
- [MochaAwesome report](#earth_africa-MochaAwesome-report)

## :rocket: Technologies and tools

<p align="center">
<a href="https://code.visualstudio.com/"><img src="images/visual-studio-code.png" width="50" height="50"  alt="VSCODE"/></a>
<a href="https://www.java.com/"><img src="images/java.png" width="50" height="50"  alt="Java"/></a>
<a href="https://github.com/"><img src="images/github.png" width="50" height="50"  alt="Github"/></a>
<a href="https://junit.org/junit5/"><img src="images/junit.png" width="50" height="50"  alt="JUnit 5"/></a>
<a href="https://www.jenkins.io/"><img src="images/jenkins.png" width="50" height="50"  alt="Jenkins"/></a>
<a href="https://www.jenkins.io/"><img src="images/javascript.svg" width="50" height="50"  alt="Javascript"/></a>
</p>

## :scroll: Implemented checks

- ✓ Checking the learn more button.
- ✓ Click on the learn more button and enter Software Development page.
- ✓ Checking title pricing.
- ✓ Checking and validating contact us form.

## Jenkins job

<a><img src="images/jenk_success.png" alt="Jenkins"/></a>

<a><img src="images/jenk_param.png" alt="Jenkins"/></a>

</p>

### Build parameters in Jenkins:

- triggerAllTests-headless (npx cypress run)
- triggerAllTests-headed (npx cypress run --headed)
- triggerAllTests-chrome (npx cypress run --browser chrome)

## :computer: Launching from the terminal

Local launch:

```bash
npm run triggerAllTests-headless
```

Remote launch:

```bash
npm run %Script%
```

## MochaAwesome <a>report</a>

### Основное окно

<p align="center">
<img title="mochaawesome" src="images/mochaawesome.png">
</p>

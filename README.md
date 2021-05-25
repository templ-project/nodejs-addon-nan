# Templ Node.js Addon Nan

<!-- https://hits.seeyoufarm.com/ -->
[![Hits](https://hits.seeyoufarm.com/api/count/incr/badge.svg?url=https%3A%2F%2Fgithub.com%2Ftempl-project%2Fnode&count_bg=%2379C83D&title_bg=%23555555&icon=&icon_color=%23E7E7E7&title=hits&edge_flat=false)](https://hits.seeyoufarm.com)
[![Contributions welcome](https://img.shields.io/badge/contributions-welcome-brightgreen.svg?style=flat)](https://github.com/templ-project/node/issues)

![JSCPD](.jscpd/jscpd-badge.svg?raw=true)

<!-- [![TravisCI](https://travis-ci.org/templ-project/node.svg?branch=master)](https://travis-ci.org/templ-project/node) -->
<!-- CI Badges -->
<!-- [![CircleCI](https://circleci.com/gh/templ-project/node.svg?style=shield)](https://circleci.com/gh/templ-project/node) -->

[![Sonarcloud Status](https://sonarcloud.io/api/project_badges/measure?project=templ-project_node&metric=alert_status)](https://sonarcloud.io/dashboard?id=templ-project_node)
[![Code Smells](https://sonarcloud.io/api/project_badges/measure?project=templ-project_node&metric=code_smells)](https://sonarcloud.io/dashboard?id=templ-project_node)
[![Maintainability Rating](https://sonarcloud.io/api/project_badges/measure?project=templ-project_node&metric=sqale_rating)](https://sonarcloud.io/dashboard?id=templ-project_node)
[![Reliability Rating](https://sonarcloud.io/api/project_badges/measure?project=templ-project_node&metric=reliability_rating)](https://sonarcloud.io/dashboard?id=templ-project_node)
[![Security Rating](https://sonarcloud.io/api/project_badges/measure?project=templ-project_node&metric=security_rating)](https://sonarcloud.io/dashboard?id=templ-project_node)

[![Lines of Code](https://sonarcloud.io/api/project_badges/measure?project=templ-project_node&metric=ncloc)](https://sonarcloud.io/dashboard?id=templ-project_node)
[![SonarCloud Coverage](https://sonarcloud.io/api/project_badges/measure?project=templ-project_node&metric=coverage)](https://sonarcloud.io/component_measures/metric/coverage/list?id=templ-project_node)
[![SonarCloud Bugs](https://sonarcloud.io/api/project_badges/measure?project=templ-project_node&metric=bugs)](https://sonarcloud.io/component_measures/metric/reliability_rating/list?id=templ-project_node)
[![Technical Debt](https://sonarcloud.io/api/project_badges/measure?project=templ-project_node&metric=sqale_index)](https://sonarcloud.io/dashboard?id=templ-project_node)
[![SonarCloud Vulnerabilities](https://sonarcloud.io/api/project_badges/measure?project=templ-project_node&metric=vulnerabilities)](https://sonarcloud.io/component_measures/metric/security_rating/list?id=templ-project_node)

<!-- Donation Badges -->
[![Donate to this project using Patreon](https://img.shields.io/badge/patreon-donate-yellow.svg)](https://patreon.com/dragoscirjan)
[![Donate to this project using Paypal](https://img.shields.io/badge/paypal-donate-yellow.svg)](https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=QBP6DEBJDEMV2&source=url)
<!--
[![Donate to this project using Flattr](https://img.shields.io/badge/flattr-donate-yellow.svg)](https://flattr.com/profile/balupton)
[![Donate to this project using Liberapay](https://img.shields.io/badge/liberapay-donate-yellow.svg)](https://liberapay.com/dragoscirjan)
[![Donate to this project using Thanks App](https://img.shields.io/badge/thanksapp-donate-yellow.svg)](https://givethanks.app/donate/npm/badges)
[![Donate to this project using Boost Lab](https://img.shields.io/badge/boostlab-donate-yellow.svg)](https://boost-lab.app/dragoscirjan/badges)
[![Donate to this project using Buy Me A Coffee](https://img.shields.io/badge/buy%20me%20a%20coffee-donate-yellow.svg)](https://buymeacoffee.com/balupton)
[![Donate to this project using Open Collective](https://img.shields.io/badge/open%20collective-donate-yellow.svg)](https://opencollective.com/dragoscirjan)
[![Donate to this project using Cryptocurrency](https://img.shields.io/badge/crypto-donate-yellow.svg)](https://dragoscirjan.me/crypto)
[![Donate to this project using Paypal](https://img.shields.io/badge/paypal-donate-yellow.svg)](https://dragoscirjan.me/paypal)
[![Buy an item on our wishlist for us](https://img.shields.io/badge/wishlist-donate-yellow.svg)](https://dragoscirjan.me/wishlist)
-->

<img alt="JavaScript Logo" src="https://github.com/templ-project/nodejs-addon-nan/blob/master/javascript.svg?raw=true" width="20%" align="right" />

<!-- Project Description Starts Here -->


> *Any fool can write code that a computer can understand. Good programmers write code that humans can understand.* – Martin Fowler

> **node-addon-nan** is a template project, designed by [Templ Project](http://templ-project.github.io).
>
> **node-addon-nan** includes instructions for initializing a new
> **JavaScript/[TypeScript](https://www.typescriptlang.org/)** project, and configuring it for development, unit
> testing as well as code linting and analysis.
>
> **javascript** implements:
>
> - [jscpd](https://github.com/kucherenko/jscpd), [dependency-cruiser](https://github.com/sverweij/dependency-cruiser) for code analisys
> - [prettier](https://prettier.io/) for code formatting
> - [eslint](https://eslint.org/) for linting
>
> By default, this implementation uses [npm](https://www.npmjs.com/), but you can easily change it to [yarn](https://yarnpkg.com/) or [pnpm](https://pnpm.js.org/) or any other package manager.

## Getting Started

### Prerequisites / Dependencies

##### For Windows

- Please install [git-scm](https://git-scm.com/download/win) tool.
- Please install a form of make
  - Install [Make for Windows](http://gnuwin32.sourceforge.net/packages/make.htm)
  - Install [make](https://sourceforge.net/projects/ezwinports/files/) from [ezwinports](https://sourceforge.net/projects/ezwinports/files/)
  - Install [chocolatey](https://chocolatey.org/), run `choco install make`

##### For Linux/Unix/OSX

- Please install `git` and `make`

```bash
# i.e debian
sudo apt-get install git make -y
# i.e mac OS
brew install make git
```

<!-- #### Known Issues / Troubleshooting

None for now. -->

### Installation

```bash
git clone https://github.com/templ-project/nodejs-addon-nan your_project
cd your_project
rm -rf .git
git init
git add remote origin https://url/to/your/project/repository
git add .
git commit -am "init"
git push origin master
npm run change:language -- javascript # to use javascript
# or
# npm run change:language -- typescript # to use typescript
npm install
# yarn install
# pnpm install
```

### Development

#### Requirements

Please install:
- [NodeJs](https://nodejs.org/en/). We support version 10.x and above.
- [windows-build-tools](https://www.npmjs.com/package/windows-build-tools) package: `npm install --global windows-build-tools`
- [LLVM Clang](https://releases.llvm.org/download.html) (this will handle C++ lint and prettier)
- a C++ IDE
  - [Visual Studio Code](https://code.visualstudio.com/) with [ITMCDev C++ Extension Pack](https://marketplace.visualstudio.com/items?itemName=itmcdev.node-cpp-extension-pack)
  - Any other IDE you trust.
- a JavaScript/TypeScript IDE
  - [Visual Studio Code](https://code.visualstudio.com/) with [ITMCDev Node Extension Pack](https://marketplace.visualstudio.com/items?itemName=itmcdev.node-extension-pack)
  - [Jetbrains WebStorm](https://www.jetbrains.com/webstorm/)
  - [Vim](https://www.vim.org/) with [neoclide/coc.nvim](https://github.com/neoclide/coc.nvim) and [HerringtonDarkholme/yats.vim](https://github.com/HerringtonDarkholme/yats.vim) extensions.
  - Any other IDE you trust.

##### VSCode Configuration

- Configuring `.vscode/c_cpp_properties.json`:
  - Run `node .scripts/vscode-config.js`. 
    This will configure all paths for both this file and the `clangd.arguments` property found in `.vscode/settings.json`
- Configuring the [llvm-vs-code-extensions.vscode-clangd](https://marketplace.visualstudio.com/items?itemName=llvm-vs-code-extensions.vscode-clangd):
  - Part of the configuration is done through the module above, and it's contained in the project's local config
  - Second part is to make sure that in your master config of VSCode, the `clangd.path` argument points to the correct binary.
    (Usually this happens when you install the module.)

<!-- ##### CLion Configuration -->

<!-- TODO:  -->

### Testing

Run unit tests using `npm run test`.

Testing is currently set to use unittest.

#### Single Tests

Run single unit tests file, by calling `npm run test:single -- test/path/to/file.test.js`

```bash
npm test:single -- test/index.test.js
```

### Deployment

Please check [release-it](https://www.npmjs.com/package/release-it) for making releases to [npmjs.com](https://www.npmjs.com/) or any other repository tool, then run:

```bash
npm run release
```

## Authors

* [Dragos Cirjan](mailto:dragos.cirjan@gmail.com) - Initial work

## Issues / Support

Add a set of links to the [issues](/templ-project/nodejs-addon-nan/issues) page/website, so people can know where to add issues/bugs or ask for support.

## License

(If the package is public, add licence)
This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

<!-- ## Changelog

Small changelog history. The rest should be added to [CHANGELOG.md](CHANGELOG.md).

See here a template for changelogs: https://keepachangelog.com/en/1.0.0/

Also see this tool for automatically generating them: https://www.npmjs.com/package/changelog -->

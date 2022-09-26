# Discord Invite API
The Discord bot and API server accosiated with [JoshMerlino/react-discord-invite](https://github.com/JoshMerlino/react-discord-invite).

### Checks
* [![Code Style Analysis](https://github.com/JoshMerlino/discord-invite-api/actions/workflows/code-style-analysis.yml/badge.svg)](https://github.com/JoshMerlino/discord-invite-api/actions/workflows/code-style-analysis.yml)
* [![Code Quality Analysis](https://github.com/JoshMerlino/discord-invite-api/actions/workflows/code-quality-analysis.yml/badge.svg)](https://github.com/JoshMerlino/discord-invite-api/actions/workflows/code-quality-analysis.yml)
* [![Test CI](https://github.com/JoshMerlino/discord-invite-api/actions/workflows/test-ci.yml/badge.svg)](https://github.com/JoshMerlino/discord-invite-api/actions/workflows/test-ci.yml)

# Getting Started
## Prerequisites
* Docker

## Installation
```bash
docker pull jmer05/discord-invite-api:latest
docker run -eDISCORD_TOKEN='...' -d jmer05/discord-invite-api:latest
docker update --restart always ...
```
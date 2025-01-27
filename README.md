# Discord Server-Boost Bot 🚀

A Discord bot that automatically responds to server boosts and sends a nice embed message.

## ✨ Features

- Automatically detects new server boosts
- Sends a personalized embed message with:
    - Mention of the booster
    - Current number of server boosts
    - Server name
    - Timestamp
    - Customizable boost image

## 📦 Installation

1. **Clone the repository:**
        ```bash
        git clone [repository-url]
        cd github-boost-bot
        ```

2. **Install dependencies:**
        ```bash
        npm install
        ```

3. **Set up configuration:**
        - Open `config.js`
        - Enter your values:
                ```js
                token: 'YOUR_BOT_TOKEN'      // Discord Bot Token
                clientId: 'YOUR_CLIENT_ID'   // Bot Client ID
                guildId: 'YOUR_SERVER_ID'    // Server ID
                boostChannelId: 'CHANNEL_ID' // Channel for boost messages
                ```

4. **Start the bot:**
        ```bash
        npm start
        ```

## ⚙️ Configuration

In `config.js`, you can adjust the following settings:

- `token`: Your Discord bot token
- `clientId`: Your bot's client ID
- `guildId`: Your Discord server ID
- `boostChannelId`: The channel ID for boost messages
- `embedColor`: The color of the embed (#f47fff by default)
- `boostImage`: URL of the image displayed in the embed

## 🛠️ Required Permissions

The bot needs the following permissions:
- `Send Messages`
- `Embed Links`
- `View Server Members`
- `View Presence`

## 🆘 Support

If you have questions or issues, you can:
1. Create an issue in the repository
2. Consult the Discord.js documentation: [Discord.js Docs](https://discord.js.org/)

## 📄 License

This project is licensed under the MIT License.
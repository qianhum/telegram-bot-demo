# telegram-bot-demo

A telegram bot demo using your own domain name and certificate.

1. Create a bot from [BotFather](https://core.telegram.org/bots#3-how-do-i-create-a-bot).

2. Clone this repo.

3. Create a `.env` file in repo and add your configuration to it:

    ```zsh
    # Your bot token
    BOT_TOKEN="123456yourbottoken"

    # Path to your certificate key
    KEY_PATH="/path/to/your/certificate/key"

    # Path to your full chain certificate
    FULLCHAIN_CERT_PATH="/path/to/your/full/chain/certificate"

    # Your domain, must includes "https://" and port
    DOMAIN="https://my.telegram.bot:8443"

    # Your port, can be one of the following: 443, 80, 88 or 8443
    PORT=8443

    # Your hook path, must start with "/"
    HOOK_PATH="/secret-path"
    ```

4. Run:

    ```zsh
    yarn
    yarn start
    ```

    or

    ```zsh
    npm i
    npm run start
    ```

5. Run:

    ```zsh
    curl -F "url=https://[YOUR-DOMAIN][YOUR-HOOK-PATH]" https://api.telegram.org/bot[YOUR-BOT-TOKEN]/setWebhook
    ```

6. Have fun.

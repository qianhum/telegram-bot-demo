const { Telegraf } = require('telegraf');
const fs = require('fs');
const dotenv = require('dotenv');

dotenv.config();

// domain must includes "https://" and port, like "https://my.telegram.bot:8443"
const {
  BOT_TOKEN: token,
  KEY_PATH: keyPath,
  FULLCHAIN_CERT_PATH: fullChainCertPath,
  DOMAIN: domain,
  PORT: port,
  HOOK_PATH: hookPath,
} = process.env;

if (token === undefined) {
  throw new Error('BOT_TOKEN must be provided!');
}

const tlsOptions = {
  key: fs.readFileSync(keyPath),
  cert: fs.readFileSync(fullChainCertPath),
};

const bot = new Telegraf(token);
bot.command('image', (ctx) => ctx.replyWithPhoto({ url: 'https://picsum.photos/200/300/?random' }));
bot.on('text', (ctx) => ctx.replyWithHTML('<b>Hello</b>'));

// Start webhook directly
// bot.startWebhook(hookPath, tlsOptions, port);
// bot.telegram.setWebhook(`${domain}${hookPath}`);

// Start webhook via launch method (preferred)
bot.launch({
  webhook: {
    domain,
    port,
    hookPath,
    tlsOptions,
  },
});

// Enable graceful stop
process.once('SIGINT', () => bot.stop('SIGINT'));
process.once('SIGTERM', () => bot.stop('SIGTERM'));

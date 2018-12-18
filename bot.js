bot.on('ready', () => {
    bot.user.setStatus('available')
    bot.user.setPresence({
        game: {
            name: 'Hacker do Rafa L',
            type: "Hackeando",
        }
    });
});

client.login(process.env.BOT_TOKEN);

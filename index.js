const { Client, GatewayIntentBits, EmbedBuilder } = require('discord.js');
const config = require('./config.js');

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMembers,
        GatewayIntentBits.GuildPresences
    ]
});

client.once('ready', () => {
    console.log(`Bot is online as ${client.user.tag}`);
});

client.on('guildMemberUpdate', async (oldMember, newMember) => {
    if (!oldMember.premiumSince && newMember.premiumSince) {
        const boostChannel = newMember.guild.channels.cache.get(config.boostChannelId);
        if (!boostChannel) return;

        const boostCount = newMember.guild.premiumSubscriptionCount;

        const boostEmbed = new EmbedBuilder()
            .setColor(config.embedColor)
            .setTitle('New Server Boost! 🚀')
            .setDescription(`Hey <@${newMember.id}>, thank you for your boost!\nThanks to you, we now have ${boostCount} boost${boostCount === 1 ? '' : 's'} on ${newMember.guild.name}!`)
            .setImage(config.boostImage)
            .setTimestamp();

        await boostChannel.send({ embeds: [boostEmbed] });
    }
});

client.login(config.token);
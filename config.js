module.exports = {
    app: {
        token: process.env.DISCORD_TOKEN || 'xxx',
        playing: '/help 듣는중',
        global: true,
        guild: process.env.GUILD_ID || 'xxx',
        extraMessages: false,
        loopMessage: true,
        lang: 'ko',
        enableEmojis: true,
    },

    emojis:{
        'back': '⏪',
        'skip': '⏩',
        'ResumePause': '⏯️',
        'savetrack': '💾',
        'volumeUp': '🔊',
        'volumeDown': '🔉',
        'loop': '🔁',
    },

    opt: {
        DJ: {
            enabled: false,
            roleName: '',
            commands: []
        },
        Translate_Timeout: 10000,
        maxVol: 100,
        spotifyBridge: true,
        volume: 75,
        leaveOnEmpty: true,
        leaveOnEmptyCooldown: 30000,
        leaveOnEnd: true,
        leaveOnEndCooldown: 30000,
        discordPlayer: {
            ytdlOptions: {
                quality: 'highestaudio',
                highWaterMark: 1 << 25
            }
        }
    }
};

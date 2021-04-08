module.exports = {

    token: "ODA1OTAxMDI4NzY3MTcwNTcw.YBhn0g.FnNIUG9Zw1UaObfGE4Mt8Wr5frU", //Token bot

    idbot: "818007470110015490", //Bot ID

    prefix: "-g", //Bot prefix

    basiclang: "en", //The basic language of the bot, "fr" for French and "en" for English

    embeds: {
        color: "BLUE", //Embed color (in English)
        footers: "Anthony" //Embed footer
    },

    start: {
        loading: "your mom", //Loading status
        activity: "-help" //Status
    },

    events: {
        addcolor: "GREEN", //The color of the event add (in English)
        remcolor: "RED" //The color of the event remove (in English)
    },

    reaction: "🎉", //Reaction to the giveaways if you in the console you see 'unknown emoji' that's what this emoji is not recognized by Discord

    grole: "Giveaways", //If the member doesn't have permission to handle messages he can still use the giveaways commands if he has the role configured right here

    auth: {
        support: "N/A", //The link of your Discord server
        dperms: "2081422583" //The permissions that the bot asks on we want to add it on a Discord server (8 = moderator)
    },
};

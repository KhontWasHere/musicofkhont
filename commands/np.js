module.exports = {
  name: "np",
  description: "Şarkının İsmini Gönderir",
  execute (client, message, args) {
    
      const { channel } = message.member.voice;
    if (!channel) {
      
      return message.channel.send("Herhangi bir ses kanalında bulunmalısınız.");
    }

    const serverQueue = message.client.queue.get(message.guild.id);

    if (!serverQueue) {
      return message.channel.send("Herhangi bir şarkı oynatmıyorum.");
    }
    
    message.channel.send(serverQueue.songs[0].title + ' - Şuanda Oynatılan Şarkı.')

    
    
    
  }
}

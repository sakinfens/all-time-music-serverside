const { AuthenticationError, UserInputError } = require('apollo-server');

const Songs = require('../../models/Song');
const Artist = require('../../models/Artist');

module.exports = {
  Query: {
    async getSongs() {
      try {
        const song = await Songs.find();
        return song;
      } catch (err) {
        throw new Error(err);
      }
    },
    async getSong(_, { songId }) {
      try {
        const song = await Songs.findById(songId);
        if (song) {
          return song;
        } else {
          throw new Error('Songs not found');
        }
      } catch (err) {
        throw new Error(err);
      }
    },
    async getArtists() {
      try {
        const artist = await Artists.find();
        return artist;
      } catch (err) {
        throw new Error(err);
      }
    }

  },
  Mutation: {
    async addSongs(_, { title, genre, artist, cover }) {

      const newSong = new Songs({
        title,
        genre,
        artist,
        cover
      });

      const song = await newSong.save();

      // context.pubsub.publish('NEW_Song', {
      //   newSong: song
      // });

      return song;
    },
  }
};

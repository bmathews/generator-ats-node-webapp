const {expect} = require('chai');
const convert = require('./convert_twitter_profile');
const profileData = require('./sample_twitter_user.json');
const User = require('app/persistence').models.User;

describe('The Twitter profile converter function', () => {
    it('can convert a Twitter profile', () => {
        const userData = convert(profileData);
        return User.createQ(userData).then((created) => {
            expect(created).to.be.ok;
            expect(created.name).to.equal('Joe Test');
            expect(created.twitterId).to.equal('' + profileData.id);
            expect(created.password).to.be.ok;
        });
    });
});

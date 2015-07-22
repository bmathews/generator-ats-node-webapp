const _ = require('lodash');
const extend = require('deep-extend');

module.exports = {
    packageJson() {
        this.appendPackageJson({
            scripts: {
                pretest: "npm run generate-app-symlink",
                prerun: "npm run generate-app-symlink",
                start: "node index"
            },
            files: ['server', 'config'],
            dependencies: {
                "babel": "^5.6.23",
                "bcrypt": "^0.8.3",
                "bluebird": "^2.9.34",
                "body-parser": "^1.13.2",
                "coffee-script": "^1.9.3",
                "compression": "^1.5.1",
                "config": "^1.14.0",
                "cookie-parser": "^1.3.5",
                "cookie-session": "^1.2.0",
                "debug": "^2.2.0",
                "jade": "^1.11.0",
                "express": "^4.13.1",
                "express-cache-response-directive": "^0.2.0",
                "express-jefferson": "^2.1.0",
                "express-mountie": "^3.0.0",
                "hat": "0.0.3",
                "helmet": "^0.10.0",
                "lodash": "^3.10.0",
                "mongoose": "^4.0.7",
                "mongoose-organizer": "^0.1.0",
                "mongoose-q": "0.0.17",
                "mr-cluster": "^0.1.1",
                "passport": "^0.2.2",
                "passport-local": "^1.0.0",
                "q-bluebird": "0.0.1"
            },
            devDependencies: {
                "chai": "^3.1.0",
                "gulp-nodemon": "^2.0.3",
                "rewire": "^2.3.4",
                "supertest": "^1.0.1",
                "supertest-session": "^1.0.0"
            }
        });
    }
};
const logger = require('./common/logger');
const app = require('./app')
const {PORT} = require('./common/constant')

if (PORT) {
    app
        .listen(PORT, '', () => {
            logger.info(`server running on port : ${PORT}`);
        })
        .on('error', (e) => logger.error(e));
}
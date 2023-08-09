import socketIOClient from 'socket.io-client';

const burstyGameServerUrl = process.env.NEXT_PUBLIC_SWAPFEST_GAME_SERVER_URL ?? null;

export default class GameClient {
    constructor() {
        this.io = null;
    }

    run() {
        console.log("Starting Swapfest game client...");
        this.io = socketIOClient(burstyGameServerUrl);

        this.io.on('ping', (data) => {
            console.log("received ping from server");
            console.log("sending pong back to server...");
            this.io.emit('pong');
        });
    }

    kill() {
        console.log('Disconnecting Swapfest game client...')
        this.io.disconnect();
    }
}
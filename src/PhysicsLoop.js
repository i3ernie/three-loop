import {Loop} from "./Loop.js";


//////////////////////////////////////////////////////////////////////////////////
//		PhysicsLoop						//
//////////////////////////////////////////////////////////////////////////////////
class PhysicsLoop extends Loop {
    constructor ( rate )
    {
        super( );

        this.rate	= rate || 60;
        var timerId	= null;
        var onInterval	= function(){
            var delta	= 1/this.rate;
            // relaunch the setTimeout
            timerId	= setTimeout(onInterval, delta*1000);
            // call each update function
            this.update( delta );
        }.bind(this);


        //////////////////////////////////////////////////////////////////////////////////
        //		start/stop/isRunning functions					//
        //////////////////////////////////////////////////////////////////////////////////
        this.start = function(){
            console.assert( this.isRunning() === false );
            timerId	= setTimeout(onInterval, 0);
        };

        this.isRunning	= function(){
            return timerId ? true : false;
        };

        this.stop = function() {
            if( timerId === null )	return;
            clearInterval( timerId );
            timerId	= null;
        };
    }
};

export { PhysicsLoop }
import Loop from "./Loop.js";
    
//////////////////////////////////////////////////////////////////////////////////
//		THREEx.RenderingLoop						//
//////////////////////////////////////////////////////////////////////////////////
class RenderingLoop extends Loop {
    constructor ( renderer )
    {
        super();

        this._isRunning = false;
        this.renderer = renderer;

        this.maxDelta	= 0.2;	
        //////////////////////////////////////////////////////////////////////////////////
        //		start/stop/isRunning functions					//
        //////////////////////////////////////////////////////////////////////////////////
    
        /**
         * 
         * @returns {undefined}
         */
        this.start = function( obj ) {
            console.assert( this._isRunning === false );

            const scope = this;
            this.add(function(){
                scope.renderer.render( obj.scene, obj.camera );
            });
            this.renderer.setAnimationLoop( this.animation );
            this._isRunning = true;
            
            return this;
        };
       
    }

    /**
     * 
     * @returns {undefined}
     */
    stop () {

        if( !this._isRunning ) { 
            return
        };
        this.renderer.setAnimationLoop( null );
        this._isRunning = false;
    }

    /**
     * 
     * @returns {Boolean}
     */
    isRunning () {
        return !!this.isRunning;
    }
};

export { RenderingLoop, Loop };
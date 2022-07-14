import Loop from "./Loop.js";
    
//////////////////////////////////////////////////////////////////////////////////
//		THREEx.RenderingLoop						//
//////////////////////////////////////////////////////////////////////////////////
const RenderingLoop = function( renderer )
{
    Loop.call( this );

    this.renderer = renderer;

    this.maxDelta	= 0.2;	
    //////////////////////////////////////////////////////////////////////////////////
    //		start/stop/isRunning functions					//
    //////////////////////////////////////////////////////////////////////////////////
    
    /**
     * 
     * @returns {undefined}
     */
    this.start = function( obj ){
        console.assert( this.isRunning === false );

        const scope = this;
        this.add(function(){
            scope.renderer.render( obj.scene, obj.camera );
        });
        this.renderer.setAnimationLoop( this.animation );
        this.isRunning = true;
        
        return this;
    };
    
    /**
     * 
     * @returns {Boolean}
     */
    this.isRunning = function(){
        return !!this.isRunning;
    };
    
    /**
     * 
     * @returns {undefined}
     */
    this.stop = function() {

        if( !this.isRunning ) { 
            return
        };
        this.renderer.setAnimationLoop( null );
        this.isRunning = false;
    };
};

RenderingLoop.prototype = Object.assign( Object.create( Loop.prototype ), {
    constructor : RenderingLoop
});

export {RenderingLoop, Loop };
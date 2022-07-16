//////////////////////////////////////////////////////////
//		Loop                            				//
//////////////////////////////////////////////////////////

    var Loop = function(){
        this._fcts = [];
        this.animation = this.update.bind(this);
    };

    /**
     * 
     * @param {function} fct
     * @returns {function}
     */
    Loop.prototype.add	= function( fct ){
        this._fcts.push( fct );
        return fct;
    };

    /**
     * 
     * @param {function} fct
     * @returns {undefined}
     */
    Loop.prototype.remove = function( fct ){
        var index	= this._fcts.indexOf( fct );
        if( index === -1 )	{ return; }
        this._fcts.splice( index,1 );
    };

    /**
     * 
     * @param {type} delta
     * @returns {undefined}
     */
    Loop.prototype.update = function( time ){
        this._fcts.forEach( function( fct ){
            fct( time );
        });
    };

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

            var scope = this;
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
        }        this.renderer.setAnimationLoop( null );
        this._isRunning = false;
    }

    /**
     * 
     * @returns {Boolean}
     */
    isRunning () {
        return !!this.isRunning;
    }
}

export { Loop, RenderingLoop };
//# sourceMappingURL=three-loop.es.js.map

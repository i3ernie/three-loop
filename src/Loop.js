   
//////////////////////////////////////////////////////////
//		Loop                            				//
//////////////////////////////////////////////////////////

    const Loop = function(){
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
        if( index === -1 )	return;
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

export {Loop};
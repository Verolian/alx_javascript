#!/usr/bin/node
class Rectangle{
    constructor(w,h){
    if (w>0 && h>0){
        this.width = w;
        this.height = h;
    };
    }
    print() {
        const p = 'X'
        for (let i = 0; i < this.height; i++) {
            console.log('X'.repeat(this.width));
        };
        };
};
module.exports = Rectangle;


module.exports=Rectangle ;
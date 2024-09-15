import {formatCurrency} from '../../scripts/utils/money.js';

// to create a test suite in jasmine we use describe() ;

describe('test suite: formatCurrency', () =>{

    // to create a test in jasmine we use it();
    it('convert cents into dollars', () =>{

        // instead of using if statements , we use expect() we can compare 2 values in it 
        expect(formatCurrency(2095)).toEqual('20.95'); //gives an object
        // now it checks if the 2 values are equal 

    });

    it('convert 0 ', () =>{

        
        expect(formatCurrency(0)).toEqual('0.00'); 
  

    });
});
/**
* @license Apache-2.0
*
* Copyright (c) 2025 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

'use strict';

var bernoulli = require( '@stdlib/random-base-bernoulli' );
var uniform = require( '@stdlib/random-base-uniform' );
var isnan = require( '@stdlib/math-base-assert-is-nan' );
var incrnanskewness = require( './../lib' );

// Initialize an accumulator:
var accumulator = incrnanskewness();

// For each simulated datum, update the corrected sample skewness...
console.log( '\nValue\tSkewness\n' );

var skewness;
var v;
var i;
for ( i = 0; i < 100; i++ ) {
	v = ( bernoulli( 0.8 ) < 1 ) ? NaN : uniform( 0.0, 100.0 );
	skewness = accumulator( v );
	if ( skewness === null ) {
		console.log( '%d\t%s', v.toFixed( 4 ), skewness );
	} else {
		console.log( '%d\t%d', ( isnan( v ) ) ? NaN : v.toFixed( 4 ), skewness.toFixed( 4 ) );
	}
}
console.log( '\nFinal skewness: %d\n', accumulator() );

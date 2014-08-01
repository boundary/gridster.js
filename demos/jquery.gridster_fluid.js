/*global QUnit:false, module:false, test:false, asyncTest:false, expect:false*/
/*global start:false, stop:false ok:false, equal:false, notEqual:false, deepEqual:false*/
/*global notDeepEqual:false, strictEqual:false, notStrictEqual:false, raises:false*/
(function($) {
    'use strict';

    var gridsterOptions = {
        maxCols: 6,
        maxRows: 6
    }
    var gridW = $('.gridster-container').width();
    var gridH = $('.gridster-container').height();
    var width_px = gridW / gridsterOptions.maxCols;
    var width_percent = (width_px / gridW) * 100;
    
    var gridster = $('.gridster').gridster({
        widget_selector: 'gridster-panel',
        widget_base_dimensions: [width_percent, 100],
        max_cols: gridsterOptions.maxCols,
        max_rows: gridsterOptions.maxRows,
        max_size_x: gridsterOptions.maxCols,
        max_size_y: gridsterOptions.maxRows,
        width_unit: '%'
    }).data('gridster');
}(jQuery));

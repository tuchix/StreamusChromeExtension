﻿define([
    'foreground/view/behavior/tooltip',
    'text!template/playlistTitle.html'
], function (Tooltip, PlaylistTitleTemplate) {
    'use strict';

    var PlaylistTitleView = Backbone.Marionette.ItemView.extend({
        className: 'text-tooltipable text lineHeight-loose fontSize-large',
        template: _.template(PlaylistTitleTemplate),
        
        modelEvents: {
            'change:title': 'render'
        },
        
        behaviors: {
            Tooltip: {
                behaviorClass: Tooltip
            }
        },
        
        onRender: function () {
            this._setTitle();
        },
        
        _setTitle: function() {
            this.$el.attr('title', this.model.get('title'));
        }
    });

    return PlaylistTitleView;
});
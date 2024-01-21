/**
 * label.js | https://github.com/fluid-dev/hexo-theme-fluid/tree/master/scripts/tags
 */

'use strict';

module.exports = ctx => function(args) {
  args = args.join(' ').split('@');
  var classes = args[0] || 'default';
  var text = args[1] || '';

  if (!text) {
    ctx.log.warn('Label text must be defined.');
  }

  return `<span class="label label-${classes.trim()}">${text}</span>`;
};

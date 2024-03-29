/* global hexo */

'use strict';

const postButton = require('./button')(hexo);

hexo.extend.tag.register('button', postButton);
hexo.extend.tag.register('btn', postButton);

const postNote = require('./note')(hexo);

hexo.extend.tag.register('note', postNote, true);
hexo.extend.tag.register('subnote', postNote, true);

const postLabel = require('./label')(hexo);

hexo.extend.tag.register('label', postLabel);
hexo.extend.tag.register('sublabel', postLabel);

const postGroupImage = require('./group-image')(hexo);

hexo.extend.tag.register('groupimage', postGroupImage, true);
hexo.extend.tag.register('gi', postGroupImage, true);
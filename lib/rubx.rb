lib_path = File.expand_path '../', __FILE__
$LOAD_PATH.unshift lib_path unless $LOAD_PATH.include? lib_path

module Rubx
end

require "rubx/helpers"
require "rubx/representers/object_representer"

ENV["RACK_ENV"] = "test"

require "rubygems"
require "bundler/setup"
require_relative "../lib/rubx"
require "minitest/autorun"
require "minitest/reporters"

Minitest::Reporters.use!

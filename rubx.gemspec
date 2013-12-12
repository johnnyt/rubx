# -*- encoding: utf-8 -*-
lib = File.expand_path('../lib', __FILE__)
$LOAD_PATH.unshift(lib) unless $LOAD_PATH.include?(lib)
require 'rubx/version'

Gem::Specification.new do |s|
  s.name          = 'rubx'
  s.version       = Rubx::VERSION
  s.authors       = ['JohnnyT']
  s.email         = ['ubergeek3141@gmail.com']
  s.homepage      = 'https://github.com/johnnyt/rubx'
  s.summary       = %q{A pure Ruby OLAP application}
  s.description   = %q{A pure Ruby OLAP application}
  s.license       = 'MIT'

  s.files         = `git ls-files`.split($/)
  s.executables   = s.files.grep(%r{^bin/}).map{ |f| File.basename(f) }
  s.test_files    = s.files.grep(%r{^(test|spec|features)/})
  s.require_paths = ['lib']

  # Check the Gemfile for test and development dependencies
end

# vim: syntax=ruby

# -*- ruby -*-

#require 'rubygems'
require 'hoe'

Hoe.plugin :git
Hoe.plugin :gemspec

Hoe.spec 'rubx' do
  developer 'JohnnyT', 'ubergeek3141@gmail.com'

  self.summary     = 'A Multi-Dimensional system in Ruby'
  self.description = 'A Multi-Dimensional system in Ruby'
  self.urls        = ['https://github.com/johnnyt/rubx']

  self.history_file = 'CHANGELOG.md'
  self.readme_file  = 'README.md'
  self.testlib      = :minitest

  license 'MIT'

  dependency 'parslet',   '>= 1.0'
  dependency 'minitest',  '>= 5.0', :dev
end

Dir['tasks/**/*.rake'].each { |t| load t }

# vim: syntax=ruby



#require 'bundler'
#Bundler::GemHelper.install_tasks
#
#require 'rspec/core/rake_task'
#desc 'Run all specs'
#RSpec::Core::RakeTask.new(:spec)
#
#task :default => :spec
#
#task :debug do
#  ENV['DEBUG'] = 'true'
#  Rake::Task['spec'].invoke
#end
#
#require 'rake/testtask'
#
#Rake::TestTask.new do |t|
#  t.libs << 'lib/rubx'
#  t.test_files = FileList['test/**/*_test.rb']
#  t.verbose = true
#end

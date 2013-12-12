require 'bundler'
require 'rake/testtask'

Bundler::GemHelper.install_tasks

Rake::TestTask.new do |t|
  t.libs << 'lib/rubx'
  t.test_files = FileList['test/**/*_test.rb']
  t.verbose = true
end

task :default => :test

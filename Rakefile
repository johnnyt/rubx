require "rubygems"
require "rake/testtask"

desc "Run the Sinatra server"
task :server do
  `bundle exec rackup -p 9292 -s webrick`
end

Rake::TestTask.new(:test) do |t|
  t.test_files = FileList["test/**/*_test.rb"]
end

task default: :test

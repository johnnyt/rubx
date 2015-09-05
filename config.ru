#\ -s webrick

require "rubygems"
require "json"
require "multi_json"
require "rack"
require "rack_dav"
require "roar"
require "sinatra/base"
require "sinatra/json"

require_relative "lib/rubx"
require_relative "./app"

AmberDevApp = Rack::Builder.new do
  use Rack::ShowExceptions

  map "/src" do
    use Rack::CommonLogger
    run RackDAV::Handler.new root: File.expand_path("../client/src", __FILE__)
  end

  map "/" do
    run Rubx::App.new
  end
end

run AmberDevApp

module Rubx
  class App < Sinatra::Base
    set :public_folder, 'client'
    disable :logging # Rack adds Rack::CommonLogger in development
    helpers Sinatra::JSON
    helpers Rubx::Helpers

    get "/" do
      send_file File.join(settings.public_folder, "index.html")
    end

    get "/objects/:id" do
      obj = ObjectSpace._id2ref params[:id].to_i
      represent obj
    end
  end
end

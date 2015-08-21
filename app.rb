module Rubx
  class App < Sinatra::Base
    set :public_folder, 'client'
    helpers Sinatra::JSON

    get '/' do
      send_file File.join(settings.public_folder, 'index.html')
    end
  end
end

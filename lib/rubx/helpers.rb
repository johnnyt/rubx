module Rubx
  module Helpers
    def represent object, options = {}
      content_type options.fetch('content_type', 'application/json')
      serialize_object(object, options).to_json
    end

    def serialize_object object, options = {}
      representer_class = options[:representer_class] || representer_class_for(object)

      if representer_class.kind_of? Class
        representer_class.new(object).to_hash options
      else
        object.extend(representer_class).to_hash options
      end
    end

    def representer_class_for object
      klass_name = object.class.name.to_s.split('::').last

      begin
        Rubx::Representers.const_get "#{klass_name}Representer"
      rescue NameError
        Rubx::Representers::ObjectRepresenter
      end
    end
  end
end

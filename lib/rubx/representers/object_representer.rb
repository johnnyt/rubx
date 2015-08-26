require "roar/decorator"
require "roar/json"

module Rubx
  module Representers
    class ObjectRepresenter < Roar::Decorator
      include Roar::JSON

      property :object_id
    end
  end
end



#class Class
#  def to_db_view depth=0
#    hsh = super # will eventually get to object
#  end
#end
#
#class Object
#  def to_db_view depth=1
#    hsh = { oop: object_id }
#
#    if depth > 0
#      #hsh[:class] = self.class.to_db_view depth-1,
#      hsh[:class] = self.class.name
#      hsh[:instance_variables] = instance_variables.map{|iv| iv.to_db_view}
#    end
#
#    #hsh = {
#    #  oop: object_id,
#    #  class: self.class.to_db_view depth-1,
#    #  instance_variables: instance_varialbes.map{|iv| iv.to_db_view}
#    #}
#
#    inspection = self.inspect
#    if inspection._isString
#      hsh[:inspection] = inspection[0, 200]
#      hsh[:inspection] += "..." if hsh[:inspection].size < inspection.size
#    else
#      hsh[:inspection] = "(error)"
#    end
#
#    hsh
#  end
#end
#
